var ESC_KEYCODE = 27;

var renderModal = function () {
    var main = document.querySelector('main');
    var successTemplate = document.querySelector('#modal')
          .content
          .querySelector('.modal__block');
    var successModal = successTemplate.cloneNode(true);
    main.appendChild(successModal);
    var removeSuccessModal = function () {
        successModal.remove();
    };
    var closedModal = successModal.querySelector('.modal__toggle');
    closedModal.addEventListener('click', removeSuccessModal);
    document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      removeSuccessModal();
    }
  });
}

var openModal = document.querySelector('.page-header__toggle');
openModal.addEventListener('click', function () {
    renderModal();
});

var renderQr = function () {
    var main = document.querySelector('main');
    var successTemplate = document.querySelector('#qr-code')
          .content
          .querySelector('.qr-code__block');
    var successQr = successTemplate.cloneNode(true);
    main.appendChild(successQr);
    var removeSuccessQr = function () {
        successQr.remove();
    };
    var closedQr = successQr.querySelector('.qr-code__toggle');
    closedQr.addEventListener('click', removeSuccessQr);
    document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      removeSuccessQr();
    }
  });
}

var openQr = document.querySelector('.qr__toggle');
openQr.addEventListener('click', function () {
    renderQr();
});
