// Get deposit and withdraw input using function
function getInputValue(inputid) {
    const newInputAmount = document.getElementById(inputid);
    const newInputText = newInputAmount.value;
    const newInputValue = parseFloat(newInputText);

    // Clear new input value 
    newInputAmount.value = '';
    return newInputValue;
}
function updateTotal(amount, currenTotalId) {
    // Get Current Deposit Value 
    const currentAmount = document.getElementById(currenTotalId);
    const currentTotalText = currentAmount.innerText;
    const currentTotalAmount = parseFloat(currentTotalText);

    // Adding current deposit and new input deposit 
    const totalDepositAmount = amount + currentTotalAmount;
    currentAmount.innerText = totalDepositAmount;
}

function updateBalance(amount, isAdd) {
    // Get Balance Value 
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);

    if (isAdd == true) {
        // Adding current balance with new input deposit amount 
        const totalBalance = currentBalanceTotal + amount;
        currentBalance.innerText = totalBalance;
    }
    else {
        // Adding current balance with new input deposit amount 
        const totalBalance = currentBalanceTotal - amount;
        currentBalance.innerText = totalBalance;
    }
}
// Get Event Handler on Deposit Button 
document.getElementById('deposit-button').addEventListener('click', function () {

    const newDepositValue = getInputValue('input-deposit')
    updateTotal(newDepositValue, 'deposit-total')
    updateBalance(newDepositValue, true)
})

// Get withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdrawTotal = getInputValue('input-withdraw')
    updateTotal(newWithdrawTotal, 'withdraw-total')
    updateBalance(newWithdrawTotal, false)
})