const data = Array.from(document.querySelectorAll('[data-index]')).map(node => {
    const test = Array.from(node.querySelectorAll('div[data-testid] > div[contenteditable="true"] > p'))
    return [test[1].innerText,test[0].innerText]
})
const lineArray = []
data.forEach(function (infoArray, index) {
    var line = infoArray.join(";");
    lineArray.push(index === 0 ? "data:text/csv;charset=utf-8," + line : line);
});
const csvContent = lineArray.join("\n");
window.open(csvContent)