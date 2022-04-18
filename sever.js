const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    const url = req.url
    const method = req.method
    // const str = `You request url is ${url}, and your method is ${method}`
    const str = {
        "aa": "123"
    }
    // console.log(str)
    res.setHeader('Content-Type', 'application/json')
    res.end(str)
});

server.listen(8080, () => {
  console.log("listening on port http://localhost:8080...");
});
