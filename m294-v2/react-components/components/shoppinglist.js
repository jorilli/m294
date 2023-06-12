
export default function Shoppinglist({items}) {
    return (
        <div>
            <h3>Breakfast Shopping List</h3>
            <ul>
                {items.map(item => (
                            <li key={item.name}>
                                <p>{item.name} - {item.amount}</p>
                            </li>
                ))
                }
            </ul>
        </div>
    )
}