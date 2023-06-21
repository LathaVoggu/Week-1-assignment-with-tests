/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let calculationMap = new Map();
  for(let i=0; i<transactions.length; i++){
    let transaction = transactions[i];
    let category = transaction.category;
    let totalPrice = transaction.price;
    calculationMap.set(category, calculationMap.get(category) == null ? totalPrice : calculationMap.get(category) + totalPrice);
  }
 // console.log(calculationMap);
  return readMap(calculationMap)
}

let transactions = [{ itemName: "MacBookPro", category: "Electronics", price: 3200, timestamp: "16-06-2022" },
                    { itemName: "iPhone", category: "Electronics", price: 220, timestamp: "16-05-2022" },
                    { itemName: "EarPhones", category: "Electronics", price: 120, timestamp: "16-04-2022" },
                    { itemName: "Guitar", category: "Music", price: 4000, timestamp: "16-01-2023" },
                    { itemName: "Bat", category: "Sports", price: 320, timestamp: "16-06-2022" }
                    ]

module.exports = calculateTotalSpentByCategory;

function readMap(calculationMap){
  let output = [];
  calculationMap.forEach((value,key) => {
   // console.log(key, value);
    let expenditure = {};
    Object.assign(expenditure, {category: key}, {totalSpent: value});
    output.push(expenditure);
  });
  //console.log(output);
  return output;
}

let result = calculateTotalSpentByCategory(transactions);
console.log(transactions);
console.log(result);
