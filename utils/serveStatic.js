import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getFileExt } from "./fileExt.js";

export async function serveStatic(req, res, publicDir) {

    try {
        const pathToResource = req.url === "/" ? "index.html" : req.url;

        const filePath = path.join(publicDir, pathToResource)
        const fileContent  = await fs.readFile(filePath);

        const ext = path.extname(pathToResource);
        const contentType = getFileExt(ext);
    
        sendResponse(res, 200, contentType, fileContent);
    }
    catch (error) {
        if(error.code === "ENOENT") {
            const filePath = path.join(publicDir, "404.html")
            const content = await fs.readFile(filePath, "utf8");
            sendResponse(res, 404, "text/html", content);
        }
        else {
            sendResponse(res, 500, 'text/html', '<html><h1>Server Error: ${err.code}</h1></html>')
        }
    }

}