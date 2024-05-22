// ========= withdraw ======

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw_amount");

  const withdrawAmountValue = withdrawAmount.value;
  const withdrawAmountValueNumber = parseFloat(withdrawAmountValue);

  withdrawAmount.value = "";

  if (isNaN(withdrawAmountValueNumber)) {
    alert("provite a valid number");
    return;
  }
  const previousWithdraw = document.getElementById("previous_withdraw");

  const previousWithdrawValue = previousWithdraw.innerText;

  const previousWithdrawValueNumber = parseFloat(previousWithdrawValue);

  // ======================

  const afterWithdrawBalance = document.getElementById("previous_balance");

  const afterWithdrawBalanceValue = afterWithdrawBalance.innerText;

  const afterWithdrawBalanceValueNumber = parseFloat(afterWithdrawBalanceValue);

  if (withdrawAmountValueNumber > afterWithdrawBalanceValueNumber) {
    alert("don't have this money in the amount");
    return;
  }

  const totalWithdraw = previousWithdrawValueNumber + withdrawAmountValueNumber;

  previousWithdraw.innerText = totalWithdraw;

  const currentBalanceafterWithdrae =
    afterWithdrawBalanceValueNumber - withdrawAmountValueNumber;

  afterWithdrawBalance.innerText = currentBalanceafterWithdrae;
});
