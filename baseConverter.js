const fs = require("fs");
const Stack = require("./Stack.js");

let obj = {
  history: [],
};
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  fs.readFile("history.json", "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      obj.history.push({
        from: decNumber.toString(),
        to: baseString,
        base: base.toString(),
        date: today.toLocaleString(),
      });
      json = JSON.stringify(obj);
      fs.writeFile("history.json", json, "utf8", () => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
        }
      });
    }
  });

  return `${decNumber} na base 10 (decimal) é '${baseString}' na base ${base}\n`;
}

module.exports = baseConverter;
