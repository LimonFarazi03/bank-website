function deposit() {
    let depositValue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById('deposit-output');
    let balanceOutput = document.getElementById('balance-output');

    depositOutput.innerText =
        parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);
    balanceOutput.innerText =
        parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value);
    // Clening
    depositValue.value = '';
}

function withdraw() {
    let withDrawValue = document.getElementById('withdraw-value');
    let withDrawOutput = document.getElementById('withdraw-output');
    let balanceOutput = document.getElementById('balance-output');

    withDrawOutput.innerHTML =
        parseFloat(withDrawOutput.innerHTML) + parseFloat(withDrawValue.value);
    balanceOutput.innerText =
        parseFloat(balanceOutput.innerText) - parseFloat(withDrawValue.value);
    // Clening
    withDrawValue.value = '';
}