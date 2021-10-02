const forms = (state) => {
  const forms = document.querySelectorAll('.form'),
    inputs = document.querySelectorAll('.form_input'),
    phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  const message = {
    loading: 'Отправка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...',
  };

  async function postData(url, data) {
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  }

  phoneInputs.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.keyCode < 47 || e.keyCode > 57 || input.value.length > 11) {
        e.preventDefault();
      }
    });

    input.addEventListener('focus', () => {
      if (input.value.length === 0) {
        input.value = '+7';
        input.selectionStart = input.value.length;
      }
    });

    input.addEventListener('click', (e) => {
      if (input.selectionStart < 2) {
        input.selectionStart = input.value.length;
      }
      if (e.key === 'Backspace' && input.value.length <= 2) {
        e.preventDefault();
      }
    });

    input.addEventListener('blur', () => {
      if (input.value === '+7') {
        input.value = '';
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && input.value.length <= 2) {
        e.preventDefault();
      }
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      if (form.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      statusMessage.textContent = message.loading;
      setTimeout(() => (statusMessage.textContent = message.success), 2000);

      // postData('assets/server.php', formData)
      //   .then((res) => {
      //     console.log(res);
      //     document.querySelector('.status').textContent = message.success;
      //   })
      //   .catch(() => {
      //     document.querySelector('.status').textContent = message.failure;
      //   })
      //   .finally(() => {
      //     inputs.forEach((input) => (input.value = ''));
      //     setTimeout(() => {
      //       statusMessage.remove();
      //     }, 5000);
      //   });
    });
  });
};

export default forms;
