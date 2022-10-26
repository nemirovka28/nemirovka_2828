document.addEventListener('DOMContentLoaded', () => {
  var phones = document.querySelectorAll('#phone');
  for (var i = phones.length - 1; i >= 0; i--) {
    processInput(phones[i]);
  }
});

function processInput(phone) {
  var iti = window.intlTelInput(phone, {
    allowDropdown: true,
    nationalMode: false,
    autoPlaceholder: 'aggressive',
    formatOnDisplay: true,
    separateDialCode: true,
    initialCountry: 'auto',
    preferredCountries: ['ru', 'by', 'kz'],
    onlyCountries: [
      'al',
      'ad',
      'at',
      'by',
      'be',
      'ba',
      'bg',
      'hr',
      'cz',
      'dk',
      'ee',
      'fo',
      'fi',
      'fr',
      'de',
      'gi',
      'gr',
      'va',
      'hu',
      'is',
      'ie',
      'it',
      'lv',
      'li',
      'lt',
      'lu',
      'mk',
      'mt',
      'md',
      'mc',
      'me',
      'nl',
      'no',
      'pl',
      'pt',
      'ro',
      'ru',
      'sm',
      'rs',
      'sk',
      'si',
      'es',
      'se',
      'ch',
      'az',
      'am',
      'gb',
      'tr',
      'cy',
      'ge',
      'kz',
      'us',
    ],
    geoIpLookup: function (callback) {
      $.get('https://ipinfo.io', function () {}, 'json').always(function (resp) {
        var countryCode = resp && resp.country ? resp.country : 'us';
        callback(countryCode);
        return countryCode;
      });
    },
    utilsScript: './intl-tel-input-17.0.18/build/js/ajax-geo.js',
  });

  phone.addEventListener('input', () => {
    phone.setCustomValidity('');
    if (!iti.isValidNumber()) phone.setCustomValidity('!!!');
  });
}
setTimeout(function () {
  var link = $('.mask').attr('placeholder');

  setTimeout(function () {
    document.querySelector('.first_code').innerHTML = link;

    $(function () {
      $('.mask').mask(link);
    });
  }, 50);
}, 5000);

$('form').hover(function () {
  $('form').removeClass('hover');
  $(this).addClass('hover');

  $('body').on('click touchend', '.iti__country', function (e) {
    setTimeout(function () {
      var link_new = $('.hover .mask').attr('placeholder');
      console.log('link_new', link_new);
      var link_end = (document.querySelector('.second_code').innerHTML = link_new);

      $(function () {
        $('.hover .mask').mask(link_end);
      });

      setTimeout(function () {
        console.log('link_end', link_end);
        document.querySelector('.first_code').innerHTML = link_end;
      }, 50);
    }, 300);
  });
});
