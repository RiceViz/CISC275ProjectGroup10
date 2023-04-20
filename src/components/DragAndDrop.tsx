import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Player } from "../interfaces/player";

interface Item {
    id: number;
    text: string;
}

const DragAndDropExample = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" }
    ]);

    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        index: number
    ) => {
        event.dataTransfer.setData("text/plain", index.toString());
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (
        event: React.DragEvent<HTMLDivElement>,
        index: number
    ) => {
        event.preventDefault();
        const dragIndex = parseInt(event.dataTransfer.getData("text/plain"));
        const draggedItem = items[dragIndex];
        const remainingItems = items.filter((item, idx) => idx !== dragIndex);
        setItems([
            ...remainingItems.slice(0, index),
            draggedItem,
            ...remainingItems.slice(index)
        ]);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, index)}
                    onDragOver={handleDragOver}
                    onDrop={(event) => handleDrop(event, index)}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
};

export default DragAndDropExample;
