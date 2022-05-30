const dgram = require("dgram");
const client = dgram.createSocket("udp4");
let message = [];
let count = 0;

process.stdin.setEncoding("utf-8");

client.on("message", (msg, info) => {
  console.log(`Resultado ${msg}`);
});

process.stdin.on("data", function (text) {
  message[count] = text;
  if (count === 1) {
    if (
      message[0] === null ||
      message[1] == null ||
      message[1].length == 0 ||
      message[1] < 0 ||
      message[1] > 32
    ) {
      console.log("Valores inválidos, insira-os de novo");
      message[0] = null;
      message[1] = null;
      count = 0;
    }
    message[0] = Buffer.from(message[0]);
    message[1] = Buffer.from(message[1]);
    client.send(message, 8089, "localhost", function (err) {
      if (err) {
        client.close();
      }
    });
  }
  count++;
});
