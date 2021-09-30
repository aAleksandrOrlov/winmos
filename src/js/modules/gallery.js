const gallery = (selector) => {
  const gallery = document.querySelector(selector),
    imagePopup = document.createElement('div'),
    bigImage = document.createElement('img');

  imagePopup.classList.add('popup_image', 'faded');
  imagePopup.style.justifyContent = 'center';
  imagePopup.style.alignItems = 'center';
  imagePopup.appendChild(bigImage);

  gallery.appendChild(imagePopup);

  gallery.addEventListener('click', (e) => {
    e.preventDefault();

    const { target } = e;

    if (target && target.classList.contains('preview')) {
      imagePopup.style.display = 'flex';
      document.body.classList.add('modal-open');

      bigImage.setAttribute('src', target.parentNode.getAttribute('href'));
    }
  });

  imagePopup.addEventListener('click', (e) => {
    if (e.target === imagePopup) {
      imagePopup.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
};

export default gallery;
