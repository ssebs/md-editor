import React, { useState, useEffect } from "react";

import Toolbar from "./Toolbar";

const Editor = props => {
    const [content, setContent] = useState(props.content);
    const [cursorPos, setCursorPos] = useState({
        start: 0,
        end: 0
    });

    // clg the selection
    useEffect(() => {
        console.log(`Cursor: ${JSON.stringify(cursorPos)}`);
        if (cursorPos.start === cursorPos.end) {
            console.log(content.substr(cursorPos.start, 1));
        } else {
            const diffNum = cursorPos.end - cursorPos.start;
            console.log(content.substr(cursorPos.start, diffNum));
        }

        // eslint-disable-next-line
    }, [cursorPos]);

    const handleSave = () => {
        props.saveFunc(content);
    };
    const handleReset = () => {
        props.saveFunc(null);
    };
    const handleChange = e => {
        setContent(e.target.value);
    };
    const handleSelection = e => {
        setCursorPos({
            start: e.target.selectionStart,
            end: e.target.selectionEnd
        });
    };
    const handleToolbarUpdate = content => {
        console.log("Updating content from toolbar");
        setContent(content);
    };

    return (
        <div>
            <Toolbar
                cursorPos={cursorPos}
                content={content}
                updateFunc={handleToolbarUpdate}
            />
            <textarea
                name="editor"
                id="editor"
                className="editorarea"
                onChange={handleChange}
                defaultValue={content}
                onKeyDown={handleSelection}
                onSelect={handleSelection}
            />
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Editor;
