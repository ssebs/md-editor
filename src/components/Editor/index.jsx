import React, { useState, useEffect } from "react";

import { makeBold, makeItalic } from "./FormatActions";
import Toolbar from "./Toolbar";

const Editor = props => {
    const [content, setContent] = useState(props.content);
    const [cursorPos, setCursorPos] = useState({
        start: 0,
        end: 0
    });
    const editorRef = React.createRef()

    // clg the selection
    useEffect(() => {
        // console.log(`Cursor: ${JSON.stringify(cursorPos)}`);
        // if (cursorPos.start === cursorPos.end) {
        //     console.log(content.substr(cursorPos.start, 1));
        // } else {
        //     const diffNum = cursorPos.end - cursorPos.start;
        //     console.log(content.substr(cursorPos.start, diffNum));
        // }
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
        if (e.ctrlKey) {
            switch (e.key) {
                case "b":
                    setContent(makeBold(content, cursorPos));
                    break;
                case "i":
                    setContent(makeItalic(content, cursorPos));
                    break;
                default:
                    break;
            }
        }
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
                editorRef={editorRef}
            />
            <textarea
                ref={editorRef}
                name="editor"
                id="editor"
                className="editorarea"
                onChange={handleChange}
                value={content}
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
