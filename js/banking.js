// Get deposit and withdraw input using function
function getInputValue(inputid) {
    const newInputAmount = document.getElementById(inputid);
    const newInputText = newInputAmount.value;
    const newInputValue = parseFloat(newInputText);

    // Clear new input value 
    newInputAmount.value = '';
    return newInputValue;
}

// Get Event Handler on Deposit Button 
document.getElementById('deposit-button').addEventListener('click', function () {

    const newDepositValue = getInputValue('input-deposit')

    // Get Current Deposit Value 
    const currentDepostAmount = document.getElementById('deposit-total');
    const currentDepostText = currentDepostAmount.innerText;
    const currentDepositTotal = parseFloat(currentDepostText);

    // Adding current deposit and new input deposit 
    const totalDepositAmount = newDepositValue + currentDepositTotal;
    currentDepostAmount.innerText = totalDepositAmount;

    // Get Balance Value 
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);

    // Adding current balance with new input deposit amount 
    const totalBalance = currentBalanceTotal + newDepositValue;
    currentBalance.innerText = totalBalance;
})

// Get withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get withdraw input value 
    // const newWithdrawInput = document.getElementById('input-withdraw');
    // const newWithdrawInputText = newWithdrawInput.value;
    // const newWithdrawTotal = parseFloat(newWithdrawInputText);

    const newWithdrawTotal = getInputValue('input-withdraw')

    // get current withdraw amount 
    const currentWithdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawText = currentWithdrawTotal.innerText;
    const currentWithdrawTotalAmount = parseFloat(currentWithdrawText);

    // Adding current withdraw value with new withdraw input value 
    const newWithdrawTotalAmount = currentWithdrawTotalAmount + newWithdrawTotal;
    currentWithdrawTotal.innerText = newWithdrawTotalAmount;

    // Get Balance Total Amount 
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);

    // Subtraction from current Balance
    const totalBalance = currentBalanceTotal - newWithdrawTotal
    currentBalance.innerText = totalBalance;
})