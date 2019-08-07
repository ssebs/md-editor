import React, { useState, useEffect } from "react";
import marked from "marked";

import Editor from "./components/Editor";

const App = () => {
    const sampleContent = "# Foo\n\n> bar";
    const [content, setContent] = useState(null);

    useEffect(() => {
        const cookie = localStorage.getItem("mdContent");
        if (cookie) {
            setContent(cookie);
        } else {
            setContent(sampleContent);
        }
    }, [content]);

    const handleSave = content => {
        if (!content) {
            console.log("resetting");
            localStorage.setItem("mdContent", sampleContent);
            setContent(sampleContent);
        } else {
            console.log("saving");
            console.log(content);
            setContent(content);
            localStorage.setItem("mdContent", content);
        }
    };

    return (
        <>
            {content && (
                <div className="container">
                    <h1>Markdown Editor</h1>
                    <Editor content={content} saveFunc={handleSave} />

                    <hr />
                    <h3>Output:</h3>
                    <div
                        style={{
                            border: "1px solid gray",
                            padding: "1rem"
                        }}
                        dangerouslySetInnerHTML={{ __html: marked(content) }}
                    />
                </div>
            )}
        </>
    );
};

export default App;
