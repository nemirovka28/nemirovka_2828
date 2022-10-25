const myButton1 = document.querySelector('.submit_button1');

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
    name: name,
    email: email,
    tel: telNumber,
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
