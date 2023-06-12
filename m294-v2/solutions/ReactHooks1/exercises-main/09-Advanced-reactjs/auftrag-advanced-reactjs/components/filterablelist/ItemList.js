import styles from "components/filterablelist/ItemList.module.css"

export default function ItemList({ items }) {
    return (
        <ul className={ styles.itemlist }>
            {
                items.map(item => {
                    return (
                        <li key={ item.id }>
                            <h2>{ item.name }</h2>
                            <p>{ item.description }</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}