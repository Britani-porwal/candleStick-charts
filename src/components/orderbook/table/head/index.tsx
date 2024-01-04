import styles from '../table.module.scss'

const HEAD = [
    "COUNT", "AMOUNT", "TOTAL", "PRICE"
]

interface TableHeadProps {
    reverse?: boolean
}

const Head = ({ reverse = false }: TableHeadProps) => {
    const tableHead = reverse ? HEAD.reverse() : HEAD

    return <div className={styles.headContainer}>
        {tableHead.map((headTitle, index) => {
            return <span key={index} className={styles.tableHead}>{headTitle}</span>
        })}
    </div>
}

export default Head;