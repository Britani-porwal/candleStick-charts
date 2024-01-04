export type Bids = [
    {
        price: string;
        amount: string;
        timestamp: string;
    }
]

export type OrderBookResponse = {
    bids: Bids;
    asks: Bids;
}