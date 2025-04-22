import { useState } from "react";

export type TripItem = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }:
    { items: TripItem[], onDeleteItem: (arg0: number) => void, onToggleItem: (arg0: number) => void, onClearList: () => void }
)
{
    const [sortBy, setSortBy] = useState("input");
    let sortedItems: TripItem[] = [];

    switch (sortBy)
    {
        case "input":
            sortedItems = items;
            break;

        case "description":
            sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
            break;

        case "packed":
            sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return <div className="list">
        <ul>
            {sortedItems.map(item => <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />)}
        </ul>

        <div className="actions">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={onClearList}>Clear list</button>
        </div>
    </div>
}

function Item({ item, onDeleteItem, onToggleItem }: { item: TripItem, onDeleteItem: (arg0: number) => void, onToggleItem: (arg0: number) => void })
{
    return <li>
        <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.description} {item.quantity}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
}