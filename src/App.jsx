import React, { useState, useEffect } from "react";
import marked from "marked";

import Editor from "./components/Editor";

const App = () => {
    const sampleContent = "# Foo\n\n> bar";
    const [content, setContent] = useState(null);

    useEffect(() => {
        const cookie = localStorage.getItem("mdContent");
        if (cookie) {
            console.log(cookie);
            setContent(cookie);
        } else {
            console.log("Sample...");
            console.log(sampleContent);
            setContent(sampleContent);
        }
    }, []);

    return (
        <>
            {content && (
                <div>
                    <h1>Markdown Editor</h1>
                    <Editor />

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
