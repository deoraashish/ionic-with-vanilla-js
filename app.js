const reason = document.querySelector('#input-reason');
const amount = document.querySelector('#input-amount');
const cancel = document.querySelector('#btn-cancel');
const confirm = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
  amount.value = '';
  reason.value = '';
};

confirm.addEventListener('click', () => {
  const enteredReason = reason.value;
  const enteredAmount = amount.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    alertCtrl
      .create({
        message: 'Please enter some values',
        header: 'Invalid Inputs',
        buttons: ['Okay'],
      })
      .then((alertElement) => {
        alertElement.present();
      });
    return;
  }
  const ionItem = document.createElement('ion-item');
  ionItem.textContent = enteredReason + ': $' + enteredAmount;
  expensesList.appendChild(ionItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancel.addEventListener('click', clear);
