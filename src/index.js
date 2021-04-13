var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

function playSong() {
  console.log("song not playing");
  console.log("song paused");
  console.log("song playing");
  console.log("song splaying");
  console.log("song claying");
  console.log("song graying");
  console.log("song graying");
  console.log("song graying");
}
