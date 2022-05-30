const net = require("net");
const readHistory = require("./readHistory");
const PORT = 8080;

const server = net.createServer((socket) => {
  socket.setEncoding("utf8");
  socket.on("data", (data) => {
    console.log(data.toString());
  });

  const result = readHistory();

  for (let i = 0; i < result.history.length; i++) {
    socket.write(
      `
      Número decimal: ${result.history[i].from}\n
      Conversão: ${result.history[i].to}\n
      Base para convesão: ${result.history[i].base}\n
      Data de conversão: ${result.history[i].date}\n
      #################################################
      `
    );
  }

  socket.on("connect", (data) => {
    console.log(data.toString());
  });
});

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));
