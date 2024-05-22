// =========================

document.getElementById("deposit-btn").addEventListener("click", function () {
  const proviteDeposit = document.getElementById("provite_deposit");

  const previousDepositAmount = proviteDeposit.value;

  const previousDepositAmountNumber = parseFloat(previousDepositAmount);

  proviteDeposit.value = "";

  if (isNaN(previousDepositAmountNumber)) {
    alert("provide a valid number");
    return;
  }

  const depositPreviousAmount = document.getElementById("deposit_amount");

  const deposit_value = depositPreviousAmount.innerText;

  const deposit_value_number = parseFloat(deposit_value);

  const currentDepositAmount =
    previousDepositAmountNumber + deposit_value_number;

  depositPreviousAmount.innerText = currentDepositAmount;

  // add balance
  const previousBalance = document.getElementById("previous_balance");

  const previousBalanceValue = previousBalance.innerText;

  const previousBalanceValueNumber = parseFloat(previousBalanceValue);
  console.log(typeof previousBalanceValueNumber);

  const currentBalance =
    previousBalanceValueNumber + previousDepositAmountNumber;

  previousBalance.innerText = currentBalance;
});
