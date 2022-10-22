const refs = {
  input: document.querySelector('.calc__range-input'),
  investmentValue: document.querySelector('.calc__summ-value'),
  calcChangeValute: document.querySelector('.calc__change-valute'),
  calcChangeItem: document.querySelectorAll('.calc__change-item'),
  calcValute: document.querySelector('.calc__summ-value--valute'),
  periodItem: document.querySelectorAll('.period__item'),
  industrioItem: document.querySelectorAll('.industrio__item'),
  btn: document.querySelector('.calc__submit-btn'),
  calcOpacity: document.querySelector('.calc__submit-content'),
  calc__submitValuta: document.querySelector('.calc__submit-item--valute'),
  calc__submitValuta2: document.querySelector('.calc__submit-item--valute2'),
  SUMMONE: document.querySelector('.calc__submit-item-text1'),
  SUMMTWO: document.querySelector('.calc__submit-item-text3'),
  PERCENT: document.querySelector('.calc__submit-item-text2'),
};
refs.input.addEventListener('input', onInputValue);
refs.calcChangeValute.addEventListener('click', onClickValute);
document.getElementById('submitButton').disabled = true;

let summ = 0;
let procent = 0;
let industrio = 0;
let percentSalary = 0;

function salarySumm() {
  if (!summ) {
    summ = 100;
  }
  if (!procent) {
    procent = 0.12;
  }
  let summ1 = Math.round(summ * procent * industrio);
  let summ2 = Math.round(summ * procent * industrio) / 0.14;
  refs.SUMMONE.textContent = summ1;
  refs.SUMMTWO.textContent = Math.round(summ2);
  refs.PERCENT.textContent = Math.round(percentSalary);
}
function onInputValue(e) {
  refs.investmentValue.textContent = e.target.value;
  summ = e.target.value;
  salarySumm();
}
function onClickValute(e) {
  refs.calcChangeItem.forEach(el => {
    if (el.classList.contains('calc__change-item--active')) {
      console.log('remove1');
      el.classList.remove('calc__change-item--active');
    }
  });
  const isChangeValue = e.target.classList.contains('calc__change-item');
  if (!isChangeValue) return;
  if (e.target.classList.contains('calc__usd')) {
    refs.calcValute.textContent = '$';
    refs.calc__submitValuta = '$';
    refs.calc__submitValuta2 = '$';
  }
  if (e.target.classList.contains('calc__eur')) {
    refs.calc__submitValuta.textContent = '€';
    refs.calc__submitValuta2.textContent = '€';
    refs.calcValute.textContent = '€';
  }
  if (e.target.classList.contains('calc__gbr')) {
    refs.calc__submitValuta.textContent = '£';
    refs.calc__submitValuta2.textContent = '£';
    refs.calcValute.textContent = '£';
  }
  if (e.target.classList.contains('calc__change-item--active')) {
    e.target.classList.remove('calc__change-item--active');
    console.log('remove2');
  } else {
    e.target.classList.add('calc__change-item--active');
    console.log('add');
  }
}
refs.periodItem.forEach(el => {
  el.addEventListener('click', onClickPeriod);
  function onClickPeriod(e) {
    refs.periodItem.forEach(el => {
      if (el.classList.contains('period--active')) {
        el.classList.remove('period--active');
      }
    });
    const isChangeValue = e.currentTarget.classList.contains('period__item');

    if (!isChangeValue) return;
    if (e.currentTarget.classList.contains('1month')) {
      procent = 0.12;
      percentSalary = 12;
      salarySumm();
    }
    if (e.currentTarget.classList.contains('3month')) {
      procent = 0.18;
      percentSalary = 15;
      salarySumm();
    }
    if (e.currentTarget.classList.contains('6month')) {
      procent = 0.21;
      percentSalary = 18;
      salarySumm();
    }
    if (e.currentTarget.classList.contains('9month')) {
      procent = 0.25;
      percentSalary = 19;
      salarySumm();
    }
    if (e.currentTarget.classList.contains('12month')) {
      procent = 0.28;
      percentSalary = 22;
      salarySumm();
    }
    if (el.classList.contains('period--active')) {
      e.currentTarget.classList.remove('period--active');
    } else {
      e.currentTarget.classList.add('period--active');
    }
  }
});
function onClickPeriod(e) {
  const isChangeValue = e.target.classList.contains('period__item');
  refs.periodItem.forEach(el => {
    if (el.classList.contains('period--active')) {
      el.classList.remove('period--active');
    }
  });
  if (!isChangeValue) return;
  if (e.target.classList.contains('1month')) {
    procent = 0.12;
    percentSalary = 12;
    salarySumm();
  }
  if (e.target.classList.contains('3month')) {
    procent = 0.18;
    percentSalary = 15;
    salarySumm();
  }
  if (e.target.classList.contains('6month')) {
    procent = 0.21;
    percentSalary = 18;
    salarySumm();
  }
  if (e.target.classList.contains('9month')) {
    procent = 0.25;
    percentSalary = 19;
    salarySumm();
  }
  if (e.target.classList.contains('12month')) {
    procent = 0.28;
    percentSalary = 22;
    salarySumm();
  }
  if (e.target.classList.contains('period--active')) {
    e.target.classList.remove('period--active');
  } else {
    e.target.classList.add('period--active');
  }
}
refs.industrioItem.forEach(el => {
  el.addEventListener('click', onClickList);
  function onClickList(e) {
    const isChangeValue = e.currentTarget.classList.contains('industrio__item');
    if (!isChangeValue) return;
    document.getElementById('submitButton').disabled = true;
    refs.calcOpacity.style.opacity = 0;
    refs.btn.style.opacity = 0.5;
    refs.btn.style.cursor = 'default';
    if (e.currentTarget.classList.contains('industrio__item--actve')) {
      e.currentTarget.classList.remove('industrio__item--actve');
      if (e.currentTarget.classList.contains('btc')) {
        industrio -= 2;
        percentSalary -= 3;
        salarySumm();
      }
      if (e.currentTarget.classList.contains('usdt')) {
        industrio -= 3;
        percentSalary -= 6;
        salarySumm();
      }
      if (e.currentTarget.classList.contains('it')) {
        industrio -= 3;
        percentSalary -= 9;
        salarySumm();
      }
      if (e.currentTarget.classList.contains('mining')) {
        industrio -= 1;
        percentSalary -= 12;
        salarySumm();
      }
    } else {
      e.currentTarget.classList.add('industrio__item--actve');
      if (e.currentTarget.classList.contains('btc')) {
        industrio += 2;
        percentSalary += 3;
        salarySumm();
      }
      if (e.currentTarget.classList.contains('usdt')) {
        industrio += 3;
        percentSalary += 6;
        salarySumm();
      }
      if (e.currentTarget.classList.contains('it')) {
        industrio += 3;
        percentSalary += 9;
        salarySumm();
      }
      if (e.currentTarget.classList.contains('mining')) {
        industrio += 1;
        percentSalary += 12;
        salarySumm();
      }
    }
    if (industrio > 0) {
      document.getElementById('submitButton').disabled = false;
      refs.calcOpacity.style.opacity = 1;
      refs.btn.style.opacity = 1;
      refs.btn.style.cursor = 'pointer';
    }
    console.log(industrio);
  }
});
