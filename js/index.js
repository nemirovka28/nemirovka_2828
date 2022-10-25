const myButton1 = document.querySelector('.submit_button1');
const myButton = document.querySelector('.submit_button');
myButton1.addEventListener('click', onClick);
myButton.addEventListener('click', onClick);

function onClick(ev) {
  ev.preventDefault();
  console.log('click');
  // let name = document.forms['print_information'].elements['person_name'].value;
  // let email = document.forms['print_informationEmail'].elements['person_email'].value;
  // let tel = document.forms['print_informationTel'].elements['phone'].value;
  const iti = document.querySelector('.iti__selected-flag');
  console.log(iti.getAttribute('title'));

  let name = document.querySelector('.print_information').value;
  let email = document.querySelector('.print_informationEmail').value;
  let tel = document.querySelector('.print_informationTel').value;

  console.log('Name', name);
  console.log('Telephone', tel);
  console.log('Email', email);
  let obj = {
    name: name,
    email: email,
    tel: tel,
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
