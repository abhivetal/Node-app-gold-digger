const eventSource = new EventSource("/gold");
const priceDisplay = document.getElementById("price-display");
const connectionStatus = document.getElementById("connection-status");

eventSource.onmessage = function (event) {
    const data = JSON.parse(event.data);
    const goldPrice = data.price;
    connectionStatus.textContent = "Live Server 🟢";
    priceDisplay.textContent = goldPrice;
}

eventSource.onerror = function() {
    console.log("Connection lost...");
}

const dialog = document.querySelector("dialog");

document.getElementById("invest-btn").addEventListener("click", function () {
    const price = priceDisplay.textContent;
    const investmentAmount = document.getElementById("investment-amount").value;
    const message = `You just bought ${(investmentAmount/price).toFixed(4)} Tola gold for ₹${investmentAmount}. You will receive documentation shortly.`;
    document.getElementById("investment-summary").textContent = message;

    dialog.showModal();
})

document.getElementById("close-dialog").addEventListener("click", function () {
    dialog.close();
})






