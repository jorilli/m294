import { useState } from 'react'

import SortArrows from "components/sortabletable/SortArrows"
import styles from "components/sortabletable/SortableTable.module.css"
import useSWR from 'swr'

const URL = "https://jsonplaceholder.typicode.com/users"

function sortUsersByProperty(u1, u2, property, order) {
    const p1 = u1[property]
    const p2 = u2[property]

    if (p1 < p2) {
        return order === "asc" ? -1 : 1
    }

    if (p1 > p2) {
        return order === "asc" ? 1 : -1
    }
    return 0
}

export default function SortableTable() {
    const [state, setState] = useState({ property: "id", order: "desc" })
    const { data: users, error } = useSWR(URL)

    const onSortChange = (property, order) => {
        users.sort((u1, u2) => sortUsersByProperty(u1, u2, property, order))
        setState({ property, order })
    }

    if (error) return <div>An error occured</div>
    if (!users) return <div>Loading...</div>

    return (
        <div className={ styles.sortabletable }>
            <table>
                <thead>
                <tr>
                    <th>ID <SortArrows property="id" onChange={ onSortChange }/></th>
                    <th>Name <SortArrows property="name" onChange={ onSortChange }/></th>
                    <th>Email <SortArrows property="email" onChange={ onSortChange }/></th>
                    <th>Website <SortArrows property="website" onChange={ onSortChange }/></th>
                </tr>
                </thead>

                <tbody>
                {
                    users.map(user => <tr key={ user.id }>
                            <td>{ user.id }</td>
                            <td>{ user.name }</td>
                            <td>{ user.email }</td>
                            <td>{ user.website }</td>
                        </tr>
                    )
                }
                </tbody>

            </table>
        </div>
    )
}