const form = document.querySelector(".notification-form");
const emailInput = document.querySelector(".notification-form__input");
const submitBtn = document.querySelector(".notification-form__submit");
const errorMsg = document.querySelector(".notification__error");

const validateEmail = (val) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (val.length > 0) {
    if (val.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault;
  const isValid = validateEmail(emailInput.value);
  console.log(isValid);
  console.log(emailInput.value);
  if (!isValid) {
    emailInput.classList.add("notification-form__input--error");
    errorMsg.classList.remove("notification__error--hidden");
  } else {
    emailInput.classList.remove("notification-form__input--error");
    errorMsg.classList.add("notification__error--hidden");
    emailInput.value = "";
  }
});
