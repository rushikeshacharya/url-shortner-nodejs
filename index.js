const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    const log = `\n ${Date.now()} : ${req.url} New Request Received...`;
    fs.appendFile("log.txt", log, (err, data) => {
      switch (req.url) {
        case "/":
          res.end("Home Page");
          break;
        case "/about":
          res.end("This is Flash");
          break;

        default:
          res.end("404");
          break;
      }
    });
    console.log("new req received");
  })
  .listen(8000, () => {
    console.log("Server is running on 8000");
  });
