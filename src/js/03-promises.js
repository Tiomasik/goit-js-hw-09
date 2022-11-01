
const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('form')
};

const dataPromise = {
  delay: "",
  step: "",
  amount: "",
};

refs.inputDelay.addEventListener('input', onInputDelay);
refs.inputStep.addEventListener('input', onInputStep);
refs.inputAmount.addEventListener('input', onInputAmount);
refs.formEl.addEventListener('submit', ((evt) => {
  evt.preventDefault()
  console.log(dataPromise)
}));

function onInputDelay(evt) {
  dataPromise[`delay`] = `${evt.target.value}`;
}

function onInputStep(evt) {
  dataPromise[`step`] = `${evt.target.value}`;
}

function onInputAmount(evt) {
  dataPromise[`amount`] = `${evt.target.value}`;
}




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
