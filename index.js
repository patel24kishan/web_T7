const http=require("http");
const app = require("./app");

const port =process.env.PORT || 8080;

console.log(__dirname);
console.log(__filename);

const server= http.createServer(app);

server.listen(port,()=>{console.log("server has started on port "+port);
});