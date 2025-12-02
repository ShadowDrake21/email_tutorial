// const balance = 5000;
// const description = 'Salary';
// const newTransaction = true;

// const balanceNumberEl = document.querySelector('.balance-number');
// balanceNumberEl.textContent = 10000;

// console.log(1000);

// const text = 'Hello';
// const salary = 2000;
// const isExpense = false;

// const expenses = [1000, 30, 25];

// console.log(expenses[1]);
// const translation = {
//   description: 'Salary',
//   amount: 5000,
// };

// console.log(translation.amount);

// const error = {
//   description: 'Not found',

// }

// function calculateBalance(income, expenses) {
//   const balance = income - expenses;
//   return balance;
// }

// function expression
// var calculateBalance = function (income, expenses) {
//   const balance = income - expenses;
//   return balance;
// };

const calculateBalance = (income, expenses) => income - expenses;

const myBalance = calculateBalance(0, 2000);
console.log(myBalance);

const balanceEl = document.querySelector('.balance-number');
balanceEl.addEventListener('click', () => {});
