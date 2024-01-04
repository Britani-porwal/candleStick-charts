import { Bids } from "@/types/orderbook"
import Head from "./head"
import Rows from "./rows"
import styles from "./table.module.scss"

interface TableProps {
    reverse?: boolean
    orderList: Bids
}

const Table = ({ reverse, orderList }: TableProps) => {
    return <div className={styles.tableHolder}>
        <Head reverse={reverse} />
        <Rows orderList={orderList} reverse={reverse} />
    </div>
}

export default Table