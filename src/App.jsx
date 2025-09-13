import Home from './Pages/Home/Home'
import Produtos from './Pages/Produtos/Produtos'
import Carrinho from './Pages/Carrinho/Carrinho'
import Pagamento from './Pages/Pagamento/Pagamento'
import Sucesso from './Pages/Sucesso/Sucesso'
import { Route, Routes, Link } from 'react-router'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/carrinho" element={<Carrinho/>}/>
      <Route path="/pagamento" element={<Pagamento/>}/>
      <Route path="/sucesso" element={<Sucesso/>}/>
      </Routes>
    </CartProvider>
  )
}

export default App
