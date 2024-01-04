import { OrderBookResponse } from "@/types/orderbook";

export async function fetchorders() {
    const response = await fetch("https://api.bitfinex.com/v1/book/BTCUSD");
    const orders: OrderBookResponse = await response.json();

    return orders;
}