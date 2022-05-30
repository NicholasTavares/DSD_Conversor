const net = require("net");
const client = new net.Socket();
const PORT = 8080;
client.connect({
  port: PORT,
});

client.on("connect", function () {
  console.log("Conexão estabelecida com o servidor...");
});

client.setEncoding("utf8");

client.on("data", function (data) {
  console.log(data);
});
