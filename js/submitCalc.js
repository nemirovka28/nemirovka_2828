let paramsString = document.location.search;
let searchParams = new URLSearchParams(paramsString);

const geo = searchParams.get('geo');
const affiliateId = searchParams.get('afid');
const clickId = searchParams.get('clid');

const btn = document.getElementById('submitButton').addEventListener('click', onClickBtn);
const popup = document.querySelector('.popup');
const popup_btnClose = document
  .querySelector('.popup-btnClose')
  .addEventListener('click', () => popup.classList.remove('popup--active'));
const popup_close = document
  .querySelector('.popup__btn')
  .addEventListener('click', () => popup.classList.remove('popup--active'));

const resultArr = [];

function onClickBtn() {
  const valueOnInput = document.querySelector('.calc__range-input');
  const periodActive = document.querySelector('.period--active');
  const valuteActive = document.querySelector('.calc__change-item--active');
  const industrioActive = document.querySelectorAll('.industrio__item--actve');
  const arr = [];
  const i = industrioActive.forEach(el => arr.push(el));
  const industrio = arr.map(el => el.children[0].innerText);

  const period = periodActive.querySelector('.period__item-title').textContent;
  const value = null ? 100 : valueOnInput.value;
  const valute = valuteActive.textContent;
  resultArr.push(period);
  resultArr.push(value);
  resultArr.push(valute);
  resultArr.push(industrio.join(' '));
}
const myButton = document.querySelector('.submit_button');

myButton.addEventListener('click', onClick1);

function onClick1(ev) {
  ev.preventDefault();

  const iti = document.querySelector('.modal');
  const country = iti.querySelector('.iti__selected-dial-code');
  const name = document.querySelector('.print_informationinForm').value;
  const email = document.querySelector('.print_informationEmailinForm').value;
  const tel = document.querySelector('.print_informationTelinForm').value;

  const telNumber = country.textContent + tel;

  let obj = {
    note: {
      note: 'crystalin - инвестиции в пул инвесторов',
      period: resultArr[0],
      value: resultArr[1],
      valute: resultArr[2],
      industrio: resultArr[3],
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
      if (data == 'Successfully submitted') {
        console.log('this good');
        popup.classList.add('popup--active');
      }
      console.log(data);
    })
    .catch(alert);
}
// Successfully submitted
