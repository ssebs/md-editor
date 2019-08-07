import React, { useState, useEffect } from "react";

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
                    let diffNum = cursorPos.end - cursorPos.start;
                    if (diffNum === 0) {
                        return;
                    }
                    let newContent = "";

                    console.log("Making the selection bold...");
                    console.log(content);
                    console.log(cursorPos);

                    newContent += content.slice(0, cursorPos.start);
                    const tmpStr = content.substr(cursorPos.start, diffNum);
                    newContent += `**${tmpStr}**`;
                    newContent += content.slice(cursorPos.end);
                    console.log(newContent);

                    props.updateFunc(newContent)
                }}
            >
                Bold
            </div>

            <div>Italic</div>
            <div>Quote</div>
        </div>
    );
};

export default Toolbar;
