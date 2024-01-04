import Table from "./table"
import styles from "./orderbook.module.scss"
import { useEffect, useState } from "react"
import { fetchorders } from "@/api/orders"
import { OrderBookResponse } from "@/types/orderbook"

const WebSocket = typeof window !== 'undefined' ? window.WebSocket : null;

const Orderbook = () => {
    const [orderData, setOrderData] = useState<OrderBookResponse>()

    const fetchOrderData = async () => {
        const response = await fetchorders()
        setOrderData(response)
    }

    useEffect(() => {
        fetchOrderData()
    }, [])

    useEffect(() => {
        if (WebSocket) {
            const wss = new WebSocket('wss://api.bitfinex.com/ws/')
            wss.onmessage = (msg) => {
                const response = JSON.parse(msg.data)
                console.log("response", response)
            }
            wss.onopen = () => {
                const subscribeRequest = {
                    event: 'subscribe',
                    channel: 'book',
                    pair: 'BTCUSD',
                    prec: 'P0',
                    freq: 'F0',
                    len: '25',
                };

                wss.send(JSON.stringify(subscribeRequest));
            }
        }
        else {
            console.error("Couldn't connect to websocket")
        }

    }, [])

    return <div className={styles.orderContainer}>
        {orderData && <>
            <Table orderList={orderData?.bids} />
            <Table orderList={orderData?.asks} reverse={true} /></>}
    </div>
}

export default Orderbook