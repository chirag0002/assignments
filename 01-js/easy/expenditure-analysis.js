/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let list = [];
  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let price = transactions[i].price;
    let flag = false;
    for (let j = i+1; j < transactions.length; j++) {
      if (transactions[j].category === category) {
         price += transactions[j].price;
      }
    }
    for (let k=0; k<list.length; k++) {
      if (list[k].category === category) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      list.push({category: category, totalSpent: price});
    }
  }
  return list;
}

module.exports = calculateTotalSpentByCategory;
