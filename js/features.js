function activeBtn(id) {
  id.classList.add('text-black', 'primary_btn_bg');
}

function idleBtn(id) {
  id.classList.add('text-[#111111B2]', 'border');
}

function donated(inp, have, place) {
  const donationPlace = document.getElementById(place).innerText;

  const inputNumber = parseFloat(document.getElementById(inp).value);
  if (isNaN(inputNumber) || inputNumber <= 0) {
    alert('Please enter valid number');
    return;
  }
  const donationAmountTotal = parseFloat(
    document.getElementById(have).innerText
  );

  const total = donationAmountTotal + inputNumber;

  document.getElementById(have).innerText = total;
  document.getElementById(inp).value = '';
  const balanceNumber = parseFloat(balance.innerText);
  balance.innerText = balanceNumber - inputNumber;
  const time = new Date();
  const history = document.getElementById('history_container');
  history.innerHTML += `
  <div class="border rounded-xl p-6">
        <h1 class="font-bold text-xl"> ${inputNumber} Taka is ${donationPlace}</h1>
        <p class="text-base font-light text-[#111111B2]"> Date: ${time}</p>
       </div>
  `;
}
