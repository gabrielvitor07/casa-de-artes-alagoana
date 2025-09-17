import { calculateCartTotal, initialState } from "../src/contexts/cartReducer.js";
import { produtos } from "../src/data/produtos.js";

describe("Carrinho - total", () => {
  test("carrinho vazio retorna 0", () => {
    expect(calculateCartTotal(initialState)).toBe(0);
  });

  test("soma total com preços 'R$ xx,yy' dos produtos reais", () => {
    const state = {
      items: [
        { ...produtos[0], quantity: 2 }, // 2 x R$ 199,00 = R$ 398,00
        { ...produtos[1], quantity: 1 }, // 1 x R$ 129,00 = R$ 129,00
      ],
      totalItems: 3,
    };
    const total = calculateCartTotal(state);
    // Total esperado: 398 + 129 = 527
    expect(total).toBeCloseTo(527, 2);
  });

  test("funciona com diferentes quantidades e múltiplos itens", () => {
    const state = {
      items: [
        { ...produtos[2], quantity: 3 }, // 3 x 129 = 387
        { ...produtos[3], quantity: 2 }, // 2 x 129 = 258
      ],
      totalItems: 5,
    };
    const total = calculateCartTotal(state);
    // 387 + 258 = 645
    expect(total).toBeCloseTo(645, 2);
  });
});
