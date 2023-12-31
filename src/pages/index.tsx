import { Inter } from 'next/font/google'
import Candles from '@/components/candles'
import { getCandlesData } from '@/api/charts'
import { CandleSticksData } from '@/types/candleSticks'

const inter = Inter({ subsets: ['latin'] })
interface HomeProps {
  response: CandleSticksData
}

export default function Home({ response }: HomeProps) { return <Candles candlesData={response} /> }

export async function getServerSideProps() {
  const response = await getCandlesData()

  return {
    props: { response },
  };
}