import React, {useState} from "react";

const Toolbar = props => {
    const [content, setContent] = useState(props.content)
    const [cursorPos, setCursorPos] = useState(props.cursorPos)

    return (
        <div className="toolbar">
            <div>Bold</div>
            <div>Italic</div>
            <div>Quote</div>
        </div>
    );
};

export default Toolbar;
