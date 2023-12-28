import { Candle, CandleSticksData } from "@/types/candleSticks"

interface Coordinates {
    x: number,
    y: number[]
}

const getSeriesData = (candlesData: CandleSticksData) => {

    let seriesData: Coordinates[] = []

    candlesData.forEach((candle: Candle) => {
        let x = candle[0]
        let y = [candle[1], candle[2], candle[3], candle[4], candle[5]]

        let Coordinates = {
            x,
            y
        }

        seriesData.push(Coordinates)
    })

    const formattedData = [
        {
            data: seriesData
        }
    ]

    return formattedData
}

export default getSeriesData