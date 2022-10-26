let paramsString = document.location.search;
let searchParams = new URLSearchParams(paramsString);

const geo = searchParams.get('geo');
const affiliateId = searchParams.get('afid');
const clickId = searchParams.get('clid');

const myButton1 = document.querySelector('.submit_button1');
const popup = document.querySelector('.popup');
const popup_btnClose = document
  .querySelector('.popup-btnClose')
  .addEventListener('click', () => popup.classList.remove('popup--active'));
const popup_close = document
  .querySelector('.popup__btn')
  .addEventListener('click', () => popup.classList.remove('popup--active'));

myButton1.addEventListener('click', onClick);

function onClick(ev) {
  ev.preventDefault();
  console.log('click');

  const iti = document.querySelector('.iti__selected-flag');
  const country = iti.querySelector('.iti__selected-dial-code');

  const name = document.querySelector('.print_information').value;
  const email = document.querySelector('.print_informationEmail').value;
  const tel = document.querySelector('.print_informationTel').value;

  const telNumber = country.textContent + tel;

  let obj = {
    note: {
      note: 'crystalin - инвестиции в пул инвесторов',
    },
    name: name,
    email: email,
    phoneNumber: telNumber,
    geo: geo,
    affiliateId: affiliateId,
    clickId: clickId,
  };
  console.log(obj);
  fetch('https://tradecard911.com/submit-json', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: { 'content-type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data == 'Successfully submitted') {
        console.log('this good');
        popup.classList.add('popup--active');
      }
    })
    .catch(alert);
}
