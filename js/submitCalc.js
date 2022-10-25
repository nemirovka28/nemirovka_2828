const btn = document.getElementById('submitButton').addEventListener('click', onClickBtn);

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
    name: name,
    email: email,
    tel: telNumber,
    period: resultArr[0],
    value: resultArr[1],
    valute: resultArr[2],
    industrio: resultArr[3],
  };
  console.log(obj);
  // fetch('/add', { method: 'POST', body: JSON.stringify(obj), headers: { 'content-type': 'application/json' } })
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     alert(data);
  //   })
  //   .catch(alert);
}
