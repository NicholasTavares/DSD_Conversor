function convertToString(message) {
  let num = "";
  let base = "";
  let count = 0;
  msg = Array.from(message.toString());
  msg.map((string) => {
    if (string !== "\n" && count === 0) {
      num += string;
    } else {
      count++;
    }
    if (count > 0) {
      base += string;
    }
  });

  return [parseInt(num), parseInt(base)];
}

module.exports = convertToString;
