import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { IVenda } from "../Context/DataContext"

type vendaDia = {
  data: string
  pago: number
  processando: number
  falha: number
}

function tranformData(data: IVenda[]): vendaDia[] {
  const dias = data.reduce((acc: { [key: string]: vendaDia }, item) => {
    const dia = item.data.split(" ")[0]
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      }
    }
    acc[dia][item.status] += item.preco
    return acc
  }, {})

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }))
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const tranformedData = tranformData(data)
  return (
    <ResponsiveContainer height={400} width="99%">
      <LineChart data={tranformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#4f2" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#f22" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraficoVendas
