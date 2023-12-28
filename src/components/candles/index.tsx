import { CandleSticksData } from "@/types/candleSticks";
import getSeriesData from "@/utils/candle";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface CandleProps {
    candlesData: CandleSticksData
}

// window object is available only in the browser environment
// ApexCharts by default assumes a browser environment
// By using ssr: false , we ensure that ApexCharts is not imported during Server Side Rendering
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

const Candles = ({ candlesData }: CandleProps) => {
    // const [candleSeries, setCandleSeries] = useState(getSeriesData(candlesData))

    // useEffect(() => {
    //     setCandleSeries(getSeriesData(candlesData))
    // },
    // [candleSeries])
    const candleSeries = getSeriesData(candlesData)
    const candleOptions: ApexCharts.ApexOptions = {
        chart: {
            type: "candlestick",
            height: 650
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            labels: {
                formatter: (value) => value.toFixed(2)
            }
        }
    }

    return <ReactApexChart options={candleOptions} series={candleSeries} type="candlestick" height={650} />
}

export default Candles