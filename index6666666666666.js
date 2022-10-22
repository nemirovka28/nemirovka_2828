let myButton = document.getElementById('button');
myButton.addEventListener('click', function (ev) {
  ev.preventDefault();
  let name = document.forms['person_information'].elements['person_name'].value;
  let tel = document.forms['person_information'].elements['person_telephone'].value;
  console.log('Name', name);
  console.log('Telephone', tel);
  let obj = {
    name: name,
    tel: tel,
  };
  fetch('/add', { method: 'POST', body: JSON.stringify(obj), headers: { 'content-type': 'application/json' } })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      alert(data);
    })
    .catch(alert);
});
