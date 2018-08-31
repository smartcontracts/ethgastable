const populateTable = (data) => {
  let lines = data.split("\n");
  let output = [];
  for (let i = 1; i < lines.length; i++) {
    let splitLine = lines[i].slice(0,-1).split(",");
    if (splitLine.length === 1) {
      continue;
    }

    output.push(`
      <tr>
        <td>${splitLine[0]}</td>
        <td>${splitLine[1]}</td>
        <td>${splitLine[2]}</td>
        <td>${splitLine[3]}</td>
      </tr>
    `);
  }
  document.getElementById("gas-table-body").innerHTML = output.join("");
};

fetch("data/gasprices.csv")
  .then(response => response.text())
  .then(data => populateTable(data));
