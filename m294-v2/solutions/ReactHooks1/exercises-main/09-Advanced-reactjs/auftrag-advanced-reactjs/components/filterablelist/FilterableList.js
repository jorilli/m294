import { useState } from "react"
import SearchBar from "components/filterablelist/SearchBar"
import ItemList from "components/filterablelist/ItemList"
import styles from "components/filterablelist/FilterableList.module.css"

export default function FilterableList({ items }) {
    const [query, setQuery] = useState("")
    const handleChange = (value) => setQuery(value)
    const itemsToRender = query ? items.filter(item => item.name.toLowerCase().includes(query.toLowerCase())) : items
    return (
        <div className={ styles.filterablelist }>
            <SearchBar
                query={ query }
                itemCount={ itemsToRender.length }
                onChange={ handleChange }
            />
            <ItemList
                items={ itemsToRender }
            />
        </div>
    )
}