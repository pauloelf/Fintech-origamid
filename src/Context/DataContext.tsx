import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react"
import useFetch from "../Hooks/useFetch"

type IDataContext = {
  data: IVenda[] | null
  loading: boolean
  error: string | null
  start: string
  setStart: Dispatch<React.SetStateAction<string>>
  end: string
  setEnd: Dispatch<React.SetStateAction<string>>
}

export type IVenda = {
  id: string
  nome: string
  preco: number
  status: "processando" | "pago" | "falha"
  pagamento: "boleto" | "cartao" | "pix"
  parcela: number | null
  data: string
}

const DataContext = createContext<IDataContext | null>(null)

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) throw new Error("useData precisa estar em DataContextProvider")

  return context
}

function getDate(n: number) {
  const date = new Date()
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth()).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [start, setStart] = useState(getDate(14))
  const [end, setEnd] = useState(getDate(0))
  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`
  )

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, end, setEnd }}
    >
      {children}
    </DataContext.Provider>
  )
}
