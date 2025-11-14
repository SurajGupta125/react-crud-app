
import { useEffect, useState } from "react";

export const Form = ({ addPost, editPost, edit }) => {
    const [text, setText] = useState({
        title: "",
        body: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit) {
            editPost(edit.id, text);  // UPDATE
        } else {
            addPost(text);            // ADD
        }

        setText({ title: "", body: "" });
    };

    useEffect(() => {
        if (edit) {
            setText({
                title: edit.title,
                body: edit.body
            });
        }
    }, [edit]);

    return (
        <form className="from-container" onSubmit={handleSubmit}>
            <div className="input1">
                <input
                    type="text"
                    name="title"
                    value={text.title}
                    id="title"
                    onChange={handleInput}
                    placeholder="title"
                    required
                    autoComplete="off"
                />
            </div>

            <div className="input2">
                <input
                    type="text"
                    name="body"
                    value={text.body}
                    id="body"
                    onChange={handleInput}
                    placeholder="body"
                    required
                    autoComplete="off"
                />
            </div>

            <div className="btn">
                <button type="submit">
                    {edit ? "Edit" : "Add"}
                </button>
            </div>
        </form>
    );
};
