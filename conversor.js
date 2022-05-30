// Require dgram module.
const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const baseConverter = require("./baseConverter");
const convertToString = require("./convertToString");
const PORT = 8089;
let result;
server.bind(PORT);

server.on("message", function (message, info) {
  const [num, base] = convertToString(message);
  result = baseConverter(num, base);

  server.send(result, info.port, "localhost", function (error) {
    if (error) {
      client.close();
    } else {
      console.log("Data sent !!!");
    }
  });
});

server.on("listening", function () {
  const address = server.address();
  console.log(`UDP Server rodando na porta ${address.port}\n`);
});
