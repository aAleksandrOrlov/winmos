const modals = () => {
  function modalOpen(modal) {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
    document.body.style.marginRight = calcScroll() + 'px';
  }

  function modalsClose(modals = document.querySelectorAll('[data-modal]')) {
    document.body.style.marginRight = 0;

    modals.forEach((modal) => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth;
  }

  function bindModal(
    modalSelector,
    triggerSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const modal = document.querySelector(modalSelector),
      triggers = document.querySelectorAll(triggerSelector),
      close = document.querySelector(closeSelector);

    modal.addEventListener('click', (e) => {
      if (closeClickOverlay && e.target === modal) modalsClose();
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) e.preventDefault();
        modalsClose();
        modalOpen(modal);
      });
    });

    close.addEventListener('click', () => modalsClose());
  }

  function showModalByTime(modalSelector, time) {
    setTimeout(() => modalOpen(document.querySelector(modalSelector)), time);
  }

  bindModal(
    '.popup_engineer',
    '.popup_engineer_btn',
    '.popup_engineer .popup_close'
  );
  bindModal('.popup', '.phone_link', '.popup .popup_close');
  bindModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
  bindModal(
    '.popup_calc_profile',
    '.popup_calc_button',
    '.popup_calc_profile_close',
    false
  );
  bindModal(
    '.popup_calc_end',
    '.popup_calc_profile_button',
    '.popup_calc_end_close',
    false
  );

  showModalByTime('.popup', 60000);
};

export default modals;
