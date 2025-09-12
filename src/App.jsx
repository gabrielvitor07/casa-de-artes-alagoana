import Home from './Pages/Home/Home'
import Produtos from './Pages/Produtos/Produtos'
import Carrinho from './Pages/Carrinho/Carrinho'
import Pagamento from './Pages/Pagamento/Pagamento'
import { Route, Routes, Link } from 'react-router'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/carrinho" element={<Carrinho/>}/>
      <Route path="/pagamento" element={<Pagamento/>}/>
      </Routes>
    </>
  )
}

export default App
