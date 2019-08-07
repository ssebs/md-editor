import React, { useState, useEffect } from "react";

import { makeBold, makeItalic } from "../FormatActions";

const Toolbar = props => {
    const [content, setContent] = useState(null);
    const [cursorPos, setCursorPos] = useState(props.cursorPos);

    useEffect(() => {
        setContent(props.content);
        setCursorPos(props.cursorPos);
    }, [props.content, props.cursorPos]);

    return (
        <div className="toolbar">
            <div
                onClick={() => {
                    props.updateFunc(makeBold(content, cursorPos));
                }}
            >
                Bold
            </div>

            <div
                onClick={() => {
                    props.updateFunc(makeItalic(content, cursorPos));
                }}
            >
                Italic
            </div>
            <div>Quote</div>
        </div>
    );
};

export default Toolbar;
