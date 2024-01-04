import { CandleSticksData } from "@/types/candleSticks";
import getSeriesData, { getShortHandValue } from "@/utils/candle";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import TimeFrameDropdown from "../dropdown";
import { getCandlesData } from "@/api/charts";
import styles from "./candles.module.scss";
import Orderbook from "../orderbook";

interface CandleProps {
    candlesData: CandleSticksData
}

// window object is available only in the browser environment
// ApexCharts by default assumes a browser environment
// By using ssr: false , we ensure that ApexCharts is not imported during Server Side Rendering
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

const Candles = ({ candlesData }: CandleProps) => {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("1 minute");
    const [candleSeries, setCandleSeries] = useState(getSeriesData(candlesData))


    const handleFetch = () => {
        getCandlesData(getShortHandValue(selectedTimeFrame)).then((res) => {
            setCandleSeries(getSeriesData(res))
        })
    }

    useEffect(() => {
        handleFetch()
    }, [selectedTimeFrame])

    const candleOptions: ApexCharts.ApexOptions = {
        chart: {
            type: "candlestick",
            height: 650
        },
        title: {
            text: 'CHART BTC/USD',
            align: 'left',
            style: {
                color: 'white',
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: '#8b969f'
                }
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => value.toFixed(2),
                style: {
                    colors: '#8b969f',
                }
            },
            opposite: true,
        },
        tooltip: {
            enabled: true,
        },
        grid: {
            borderColor: '#2e4251',
            yaxis: {
                lines: {
                    show: true,
                }
            },
            xaxis: {
                lines: {
                    show: true,
                }
            },
        }
    }

    return <div className={styles.page}>
        <TimeFrameDropdown selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame} />
        <ReactApexChart options={candleOptions} series={candleSeries} type="candlestick" height={650} />
        <Orderbook />
    </div>
}

export default Candles