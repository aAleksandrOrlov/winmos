import './slider';
import changeModalState from './modules/change-modal-state';
import gallery from './modules/gallery';
import modals from './modules/modals';
import timer from './modules/timer';
import forms from './modules/forms';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
  let calcModalState = {};
  changeModalState(calcModalState);

  const deadline = '2021-12-31';
  timer('.container1', deadline);

  modals();
  forms(calcModalState);
  gallery('.works > .container > .row');

  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs(
    '.decoration_slider',
    '.no_click',
    '.decoration_content > div > div',
    'after_click'
  );
  tabs(
    '.balcon_icons',
    '.balcon_icons_img',
    '.big_img > img',
    'do_image_more',
    'inline'
  );
});
