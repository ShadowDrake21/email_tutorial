const transactionsEl = document.querySelector('.transactions');
const balanceNumberEl = document.querySelector('.balance-number');
const numberIncomeEl = document.querySelector('.number--income');
const numberExpensesEl = document.querySelector('.number--expenses');
const formEl = document.querySelector('form');
const inputDescriptionEl = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');

const submitHandler = (event) => {
  event.preventDefault();
  const description = inputDescriptionEl.value;
  const amount = +inputAmountEl.value;

  const transactionEl = `
   <li class="transaction ${
     amount > 0 ? 'transaction--income' : 'transaction--expense'
   }">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">${
              amount > 0 ? '+' : ''
            }${amount}</span>
            <button class="transaction__btn">X</button>
          </li>`;

  transactionsEl.insertAdjacentHTML('beforeend', transactionEl);
  inputDescriptionEl.value = '';
  inputAmountEl.value = '';

  // unfocus form inputs
  inputDescriptionEl.blur();
  inputAmountEl.blur();

  if (amount > 0) {
    const currentIncome = +numberIncomeEl.textContent;
    const updatedIncome = currentIncome + amount;
    numberIncomeEl.textContent = updatedIncome;
  } else {
    const currentExpenses = +numberExpensesEl.textContent;
    const updatedExpenses = currentExpenses + -amount;
    numberExpensesEl.textContent = updatedExpenses;
  }

  // update balance
  balanceNumberEl.textContent =
    numberIncomeEl.textContent - numberExpensesEl.textContent;
  if (balanceNumberEl.textContent < 0) {
    balanceNumberEl.classList.add('balance--negative');
  } else {
    balanceNumberEl.classList.remove('balance--negative');
  }
};

formEl.addEventListener('submit', (event) => submitHandler(event));

const clickHandler = (event) => {
  // remove transaction item visually
  const clickedEl = event.target.parentNode;
  clickedEl.remove();

  // update income or expenses
  const amountEl = clickedEl.querySelector('.transaction__amount');
  const amount = +amountEl.textContent;

  if (amount > 0) {
    const currentIncome = numberIncomeEl.textContent;
    const updatedIncome = currentIncome - amount;
    numberIncomeEl.textContent = updatedIncome;
  } else {
    const currentExpenses = numberExpensesEl.textContent;
    const updatedExpenses = currentExpenses - -amount;
    numberExpensesEl.textContent = updatedExpenses;
  }

  // update balance
  const income = numberIncomeEl.textContent - numberExpensesEl.textContent;
  balanceNumberEl.textContent = income;

  // make red if balance is negative
  if (income < 0) {
    balanceNumberEl.classList.add('balance--negative');
  } else {
    balanceNumberEl.classList.remove('balance--negative');
  }
};

transactionsEl.addEventListener('click', (event) => clickHandler(event));
