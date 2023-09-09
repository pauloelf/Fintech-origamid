import './style.css'
import Sidenav from './Components/Sidenav'
import Resumo from './Pages/Resumo'
import Header from './Components/Header'
import { DataContextProvider } from './Context/DataContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Resumo/>} />
            </Routes>
          </main>
        </div>  
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
