const { OPEN_READWRITE } = require("sqlite3");

const server = require("./server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log('Server is on port 5000');
});
