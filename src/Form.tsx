import { FormEvent, useState } from "react";
import { TripItem } from "./PackingList";

export default function Form({ onAddItem }: { onAddItem: (arg0: TripItem) => void })
{
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event: FormEvent<HTMLFormElement>)
    {
        event.preventDefault();

        if (!description)
            return;

        const newItem: TripItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false
        }

        onAddItem(newItem);
        setDescription("");
        setQuantity(1);
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {
                Array.from({ length: 20 }, (_, i) => i + 1).map(
                    num => <option value={num} key={num}>{num}</option>)
            }
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <button type="submit">Add</button>
    </form>
}