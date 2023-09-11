import { useEffect, useState } from "react"
import DateRange from "./DateRange"
import Months from "./Months"
import { useLocation } from "react-router-dom"

const Header = () => {
  const [title, setTitle] = useState("Resumo")
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/Fintech-origamid") {
      setTitle("Resumo")
      document.title = "Fintech | Resumo"
    } else if (location.pathname === "/Fintech-origamid/vendas") {
      setTitle("Vendas")
      document.title = "Fintech | Vendas"
    }
  }, [location])

  return (
    <header className="mb">
      <div className="mb daterange">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  )
}

export default Header
