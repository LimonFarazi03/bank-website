document.getElementById('deposit-btn').addEventListener('click', function() {
    // get the amount deoposited
    let depositInput = document.getElementById('deposit-input');
    let depositAmount = depositInput.value;
    console.log(depositAmount);
    // next
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    // clear the deopsit input
    depositInput.value = '';
    alert('SuccessFully Deposit your money')
})