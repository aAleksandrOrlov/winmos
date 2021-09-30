const changeModalState = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  function bindActionToElem(event, elems, prop) {
    elems.forEach((item, idx) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = idx + 1;
            break;

          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              idx === 0 ? (state[prop] = 'cold') : (state[prop] = 'warm');

              elems.forEach((elem, i) => {
                i === idx ? (elem.checked = true) : (elem.checked = false);
              });

              break;
            }

            state[prop] = item.value;
            break;

          case 'SELECT':
            state[prop] = item.value;
            break;
        }
      });
    });
  }

  bindActionToElem('click', windowForms, 'form');
  bindActionToElem('change', windowWidth, 'width');
  bindActionToElem('change', windowHeight, 'heigth');
  bindActionToElem('change', windowType, 'type');
  bindActionToElem('change', windowProfile, 'profile');
};

export default changeModalState;
