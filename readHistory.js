const fs = require("fs");

function readHistory() {
  const obj = JSON.parse(fs.readFileSync("history.json", "utf8"));

  return obj;
}

module.exports = readHistory;
