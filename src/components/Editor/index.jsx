import React, { useState } from "react";

import Toolbar from "./Toolbar";

const Editor = props => {
    const [content, setContent] = useState(props.content);

    const handleSave = () => {
        props.saveFunc(content);
    };
    const handleReset = () => {
        props.saveFunc(null);
    };

    return (
        <div>
            <Toolbar />
            <textarea
                name="editor"
                id="editor"
                className="editorarea"
                onChange={e => setContent(e.target.value)}
                defaultValue={content}
            />
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Editor;
