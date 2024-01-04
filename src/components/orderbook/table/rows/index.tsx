import { Bids } from "@/types/orderbook";
import styles from "../table.module.scss"

interface TableRowProps {
    orderList: Bids;
    reverse?: boolean;
}

const Rows = ({ orderList, reverse = false }: TableRowProps) => {
    return <div>
        {
            orderList.map(({ price, amount, timestamp }, index) => (
                <div className={styles.rowContainer} key={index}>
                    <span className={styles.rowData}>{price}</span>
                    <span className={styles.rowData}>{amount}</span>
                    <span className={styles.rowData}>{timestamp}</span>
                </div>
            ))
        }
    </div>
}

export default Rows