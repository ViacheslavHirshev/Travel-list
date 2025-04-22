import { TripItem } from "./PackingList";

export default function Stats({ items }: { items: TripItem[] })
{
    if (!items.length)
        return <footer className="stats">
            <em>
                Packing list is empty. Start adding some items to it.
            </em>
        </footer>

    const numItems = items.length;
    const packed = items.filter(item => item.packed).length;
    const percentage = Math.round((packed / numItems) * 100);

    return <footer className="stats">
        <em>
            {
                percentage === 100 ? "You've got everything!" :
                    `You have ${numItems} ${numItems === 1 ? "item" : "items"} on your list, and you already packed ${packed} (${percentage}%)`
            }
        </em>
    </footer>
}