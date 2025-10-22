import { getGoldPrice } from "../data/getGoldPrice.js";

export function goldStream(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    setInterval(() => {

        res.write(`data: ${JSON.stringify({event: "gold-price", price: getGoldPrice()})}\n\n`);

    }, 2000);
}