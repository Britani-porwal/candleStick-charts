import { CandleSticksData } from "@/types/candleSticks"

export async function getCandlesData(timeFrames: string = "") {
    let url = "https://api-pub.bitfinex.com/v2/candles/trade%3A1m%3AtBTCUSD/hist"
    url += timeFrames
 
    const response = await fetch(url)
    const candlesData: CandleSticksData = await response.json()

    return candlesData
}