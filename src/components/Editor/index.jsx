import React, { useState, useEffect } from "react";

import Toolbar from "./Toolbar";

const Editor = () => {
    return (
        <>
            {(
                <div>
                    <Toolbar />
                    I'm an editor
                </div>
            )}
        </>
    );
};

export default Editor;
