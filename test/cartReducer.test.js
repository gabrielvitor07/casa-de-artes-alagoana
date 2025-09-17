import { cartReducer, initialState } from "../src/contexts/cartReducer.js";
import { produtos } from "../src/data/produtos.js";

const produtoA = produtos[0];
const produtoB = produtos[1];

describe("Carrinho Funções", () => {
  test("estado inicial", () => {
    expect(initialState).toEqual({ items: [], totalItems: 0 });
  });

  test("adiciona item novo", () => {
    const s1 = cartReducer(initialState, { type: "ADD_TO_CART", payload: produtoA });
    expect(s1.items).toHaveLength(1);
    expect(s1.items[0]).toMatchObject({ id: 1, quantity: 1 });
    expect(s1.totalItems).toBe(1);
  });

  test("repete mesmo item incrementa quantidade", () => {
    const s1 = cartReducer(initialState, { type: "ADD_TO_CART", payload: produtoA });
    const s2 = cartReducer(s1, { type: "ADD_TO_CART", payload: produtoA });
    expect(s2.items).toHaveLength(1);
    expect(s2.items[0].quantity).toBe(2);
    expect(s2.totalItems).toBe(2);
  });

  test("adiciona dois itens diferentes", () => {
    const s1 = cartReducer(initialState, { type: "ADD_TO_CART", payload: produtoA });
    const s2 = cartReducer(s1, { type: "ADD_TO_CART", payload: produtoB });
    const s3 = cartReducer(s2, { type: "ADD_TO_CART", payload: produtoA });

    expect(s3.items).toHaveLength(2);
    expect(s3.items.find((i) => i.id === 1).quantity).toBe(2);
    expect(s3.items.find((i) => i.id === 2).quantity).toBe(1);
    expect(s3.totalItems).toBe(3);
  });

  test("remove item e ajusta total", () => {
    let state = initialState;
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoA }); // A q=1
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoA }); // A q=2
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoB }); // B q=1 (total=3)

    const after = cartReducer(state, { type: "REMOVE_FROM_CART", payload: 1 });
    expect(after.items).toHaveLength(1);
    expect(after.items[0].id).toBe(2);
    expect(after.totalItems).toBe(1);
  });

  test("remover id inexistente mantém estado", () => {
    const state = cartReducer(initialState, { type: "REMOVE_FROM_CART", payload: 999 });
    // reducer retorna o MESMO objeto de estado quando não encontra o item
    expect(state).toBe(initialState);
  });

  test("atualiza quantidade e total", () => {
    let state = initialState;
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoA }); // A q=1, total=1
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoB }); // B q=1, total=2

    const up = cartReducer(state, { type: "UPDATE_QUANTITY", payload: { id: 1, quantity: 5 } });
    expect(up.items.find((i) => i.id === 1).quantity).toBe(5);
    expect(up.totalItems).toBe(6);

    const down = cartReducer(up, { type: "UPDATE_QUANTITY", payload: { id: 1, quantity: 2 } });
    expect(down.items.find((i) => i.id === 1).quantity).toBe(2);
    expect(down.totalItems).toBe(3);
  });

  test("atualizar id inexistente mantém estado", () => {
    const state = cartReducer(initialState, { type: "UPDATE_QUANTITY", payload: { id: 999, quantity: 10 } });
    expect(state).toBe(initialState);
  });

  test("atualizar para 0 mantém item (no reducer puro)", () => {
    let state = initialState;
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoA }); // q=1
    const updated = cartReducer(state, { type: "UPDATE_QUANTITY", payload: { id: produtoA.id, quantity: 0 } });
    const item = updated.items.find((i) => i.id === produtoA.id);
    expect(item.quantity).toBe(0);
    expect(updated.totalItems).toBe(0);
  });

  test("limpa carrinho", () => {
    let state = initialState;
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoA });
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoB });
    expect(state.totalItems).toBe(2);

    const cleared = cartReducer(state, { type: "CLEAR_CART" });
    expect(cleared.items).toEqual([]);
    expect(cleared.totalItems).toBe(0);
  });

  // TESTE COM ERRO PROPOSITAL 1
  // Este teste está feito para FALHAR: após adicionar 1 item, totalItems deve ser 1, não 999.
  test("erro proposital: totalItems deve ser 999 (incorreto)", () => {
    const s1 = cartReducer(initialState, { type: "ADD_TO_CART", payload: produtoA });
    expect(s1.items).toHaveLength(1);
    // Falha de propósito: o valor esperado correto seria 1
    expect(s1.totalItems).toBe(999);
  });

  // TESTE COM ERRO PROPOSITAL 2
  // Este teste está feito para FALHAR: após remover o único item, o carrinho deve ficar vazio, não com 999 itens.
  test("erro proposital: carrinho permanece com 999 itens (incorreto)", () => {
    let state = initialState;
    state = cartReducer(state, { type: "ADD_TO_CART", payload: produtoA }); // 1 item
    const after = cartReducer(state, { type: "REMOVE_FROM_CART", payload: produtoA.id });
    // Falha de propósito: o valor correto seria 0 itens
    expect(after.items).toHaveLength(999);
  });
});
