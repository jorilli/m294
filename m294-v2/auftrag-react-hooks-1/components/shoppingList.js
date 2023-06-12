import { React, useState } from 'react'

export default function ShoppingList() {

    //Make a list of items
    const [items, setItems] = useState([
        { id: 1, name: "Apples" },
        { id: 2, name: "Bananas" },
        { id: 3, name: "Strawberries" },
        { id: 4, name: "Blueberries" },
        { id: 5, name: "Oranges" }
    ]);

    //input-field and button to add custom item to list
    const addItem = () => {
        const name = prompt("Enter item name");
        setItems([...items, {id: items.length + 1, name: name}]);
    }

    //clear list
    const clearList = () => {
        setItems([])
    }

    return (

        //return the list of items with buttons to add, remove, and clear
        <div className="shopping-list">
            <h1>Shopping List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
            <button onClick={clearList}>Clear List</button>
        </div>
    )
}