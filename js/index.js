// variables

const historyBtn = document.getElementById('history-el');
const donationPage = document.getElementById('donation-el');
const donationBtn = document.getElementById('donation_btn');
const balance = document.getElementById('balance-el');

// button functionality

historyBtn.addEventListener('click', function () {
  historyBtn.classList.remove('text-[#111111B2]', 'border');
  donationPage.classList.remove('text-black', 'primary_btn_bg');
  activeBtn(historyBtn);
  idleBtn(donationPage);
  document.getElementById('donation_container').classList.add('hidden');
  document.getElementById('history_container').classList.remove('hidden');
});

donationPage.addEventListener('click', function () {
  donationPage.classList.remove('text-[#111111B2]', 'border');
  historyBtn.classList.remove('text-black', 'primary_btn_bg');
  activeBtn(donationPage);
  idleBtn(historyBtn);
  document.getElementById('donation_container').classList.remove('hidden');
  document.getElementById('history_container').classList.add('hidden');
});

document.getElementById('donation_btn').addEventListener('click', function () {
  donated('noakhali-input', 'noakhali-total', 'donation-noakhali');

});

document
  .getElementById('donation_btn_feni')
  .addEventListener('click', function () {
    donated('feni-input', 'feni-total', 'donation-feni');
  });

document
  .getElementById('donation_btn_quota')
  .addEventListener('click', function () {
    donated('quota-input', 'quota-total', 'donation-quota');
  });
