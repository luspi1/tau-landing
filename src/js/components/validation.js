import JustValidate from 'just-validate';

const feedbackForm = document.querySelector('.feedback__form')

if (feedbackForm) {
  const validationFeedback = new JustValidate(feedbackForm);
  const phoneInput = document.querySelector('.feedback__phone-input')
  validationFeedback
    .addField('.feedback__phone-input', [
        {
          validator: (val) => {
              const phone = phoneInput.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length === 10)
          },
          errorMessage: 'Телефон указан неверно, должно быть 11 цифр: + 7 (999) 123-45-67',
        },

        {
          rule: 'required',
          errorMessage: 'Телефон указан неверно, должно быть 11 цифр: + 7 (999) 123-45-67',
        },
      ],
    )
}



