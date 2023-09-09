import React, { PropsWithChildren, createContext, useContext } from 'react'
import useFetch from '../Hooks/useFetch'

type IDataContext = {
  data: IVenda[] | null
  loading: boolean
  error: string | null
}

type IVenda = {
  id: string
  nome: string
  preco: number
  status: 'processando' | 'pago' | 'falha'
  pagamento: 'boleto' | 'cartao' | 'pix'
  parcela: number | null
  data: string
}

const DataContext = createContext<IDataContext | null>(null)

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) throw new Error('useData precisa estar em DataContextProvider');

  return context
}

export const DataContextProvider = ({children}: PropsWithChildren) => {
  const {data, loading, error} = useFetch<IVenda[]>('https://data.origamid.dev/vendas/')

  return <DataContext.Provider value={{data, loading, error}}>{children}</DataContext.Provider>
}