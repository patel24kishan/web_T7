const http=require("http");
const app = require("./app");

const port =8080 || process.env.PORT;

console.log(__dirname);
console.log(__filename);

const server= http.createServer(app);

server.listen(port,()=>{console.log("server has started on port "+port);
});