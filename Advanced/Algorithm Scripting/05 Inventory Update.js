function addItem(inventory, item) {
  const count = item[0];
  const name = item[1];
  let found = false;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i][1] === name) {
      found = true;
      inventory[i][0] += count;
      break;
    }
  }

  if (!found) {
    inventory.push(item);
  }
}

function updateInventory(currInv, newStock) {
  newStock.forEach(item => addItem(currInv, item));
  return currInv.sort((a, b) => a[1].localeCompare(b[1]));
}
