import { Candle, CandleSticksData } from "@/types/candleSticks"

interface Coordinates {
    x: number,
    y: number[]
}

const getSeriesData = (candlesData: CandleSticksData) => {

    let seriesData: Coordinates[] = []

    candlesData.forEach((candle: Candle) => {
        let x = candle[0]
        let y = [candle[1], candle[3], candle[4], candle[2] ]
        // Format required: [O, H, L, C]

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

export const getShortHandValue = (selectedTimeFrame: string) => {
    const splittedText = selectedTimeFrame.split(" ")
    return splittedText[0] + splittedText[1][0]
}