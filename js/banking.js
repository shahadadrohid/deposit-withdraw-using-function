// Get Event Handler on Deposit Button 
document.getElementById('deposit-button').addEventListener('click', function () {

    // Get deposit input value 
    const newDepositInput = document.getElementById('input-deposit');
    const newDepositInputText = newDepositInput.value;
    const newDepositValue = parseFloat(newDepositInputText);

    // Get Current Deposit Value 
    const currentDepostAmount = document.getElementById('deposit-total');
    const currentDepostText = currentDepostAmount.innerText;
    const currentDepositTotal = parseFloat(currentDepostText);

    // Adding current deposit and new input deposit 
    const totalDepositAmount = newDepositValue + currentDepositTotal;
    currentDepostAmount.innerText = totalDepositAmount;

    // Get Balance Value 
    const currentBalance = document.getElementById('balance-total')
})