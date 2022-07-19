import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
    const [text, setText] = useState("");
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault(); //To prevent the form from refreshing the page after the submit
        if (text.length === 0) return;
        let newThought = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime(),
        };
        props.addThought(newThought);
        setText("");
    };
    return (
        <form className="AddThoughtForm" onSubmit={handleSubmit}>
            <input
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                value={text}
                onChange={handleTextChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
}
