import { CandleSticksData } from "@/types/candleSticks"

export async function getCandlesData(timeFrames: string = "1m") {
    const trade = `trade:${timeFrames}:tBTCUSD`
    let url = `https://api-pub.bitfinex.com/v2/candles/${trade}/hist`

    const response = await fetch(url)
    const candlesData: CandleSticksData = await response.json()

    return candlesData
}