import './style.css'
import Sidenav from './Components/Sidenav'
import Resumo from './Pages/Resumo'
import Header from './Components/Header'
import { DataContextProvider } from './Context/DataContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vendas from './Pages/Vendas'
import Venda from './Pages/Venda'

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/Fintech-origamid' element={<Resumo/>} />
              <Route path='/Fintech-origamid/vendas' element={<Vendas/>} />
              <Route path='/Fintech-origamid/vendas/:id' element={<Venda/>} />
            </Routes>
          </main>
        </div>  
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
