const id = window.location.pathname.split("/").pop();
const url = "https://www.gimkit.com/api/games/fetch/" + id;

async function fetchJson(url) {
    const res = await window.fetch(url);
    return res.json();
}

(async () => {
    const fetchedData = await fetchJson(url);
    const data = fetchedData.kit.questions.map(question => [question.text,question.answers[0].text]);
    const lineArray = []
    data.forEach(function (infoArray, index) {
        var line = infoArray.join(";");
        lineArray.push(index === 0 ? "data:text/csv;charset=utf-8," + line : line);
    });
    const csvContent = lineArray.join("\n");
    window.open(csvContent)
})();