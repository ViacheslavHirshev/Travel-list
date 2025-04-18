export type TripItem = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};

const initialItems: TripItem[] = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true }
];


export default function PackingList()
{
    return <div className="list">
        <ul>
            {initialItems.map(item => <Item {...item} key={item.id} />)}
        </ul>
    </div>
}

function Item({ description, quantity, packed }: TripItem)
{
    return <li>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
            {description} {quantity}
        </span>
        <button>❌</button>
    </li>
}