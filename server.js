const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const port = 3000;
const server = http.createServer(app);
const webS = new WebSocket.Server({ server });

// Gérer la connexion WebSocket
webS.on("connection", function connection(ws) {
    console.log("a new client connected");

    ws.send("welcome abdou ferhan");

    ws.on("message", function incoming(message) {
        console.log("received: "+ message);
        ws.send("your message is: " + message);
    });
});

app.get("/", (req, res) => res.send("Hello world!"));
// Démarrer le serveur HTTP
server.listen(port, () => console.log(`listening on port ${port}!`));
