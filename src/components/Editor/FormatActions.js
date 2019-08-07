// FormatActions.js
// Toolbar / shortcut actions. e.g. bold

export const makeBold = (content, cursorPos) => {
    let newContent = "";
    let diffNum = cursorPos.end - cursorPos.start;
    if (diffNum === 0) {
        return;
    }
    newContent += content.slice(0, cursorPos.start);

    const tmpStr = content.substr(cursorPos.start, diffNum);
    newContent += `**${tmpStr}**`;
    newContent += content.slice(cursorPos.end);
   
    return newContent;
};

export const makeItalic = (content, cursorPos) => {
    let newContent = "";
    let diffNum = cursorPos.end - cursorPos.start;
    if (diffNum === 0) {
        return;
    }
    newContent += content.slice(0, cursorPos.start);

    const tmpStr = content.substr(cursorPos.start, diffNum);
    newContent += `*${tmpStr}*`;
    newContent += content.slice(cursorPos.end);
   
    return newContent;
};