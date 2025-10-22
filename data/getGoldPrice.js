export function getGoldPrice() {
  // Start around £1850 per ounce
  const basePrice = 150000;

  // Randomly increase or decrease by up to £10
  const change = (Math.random() * 800 - 10);

  // Return the new price rounded to 2 decimals
  const newPrice = basePrice + change;
  return newPrice.toFixed(2);
}