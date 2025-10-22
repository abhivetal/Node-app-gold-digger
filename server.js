import http from "node:http";
import path from "node:path";
import { serveStatic } from "./utils/serveStatic.js";
import { goldStream } from "./handlers/routeHandlers.js";

const PORT = 8000;

const server = http.createServer(async function (req, res) {
    if(req.url === "/gold") {
        goldStream(req, res);
    }
    else {
        const publicDir = path.join(import.meta.dirname, "public");
        serveStatic(req, res, publicDir);
    }
})

server.listen(PORT, function () {
    console.log(`hello you are running on a port ${PORT}`)
});

