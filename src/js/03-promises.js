import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('form')
};

const dataPromise = {
  firstDelay: 0,
  step: 0,
  amount: 0,
  position: 0,
  delay: 0,
};

refs.inputDelay.addEventListener('input', onInputDelay);
refs.inputStep.addEventListener('input', onInputStep);
refs.inputAmount.addEventListener('input', onInputAmount);
refs.formEl.addEventListener('submit', ((evt) => {
  evt.preventDefault()
  for (let index = 0; index < dataPromise.amount; index += 1) {
    console.log(dataPromise.position += 1)
    if (Number(dataPromise.position) === 1) {
    dataPromise.delay += Number(dataPromise.firstDelay);
  } else {
    dataPromise.delay += Number(dataPromise.step);
  }
  
  console.log(dataPromise.delay)
    makePromise(dataPromise).then(onMakePromiseSuccess).catch(onMakePromiseError);
    
  }
  refs.formEl.reset();
  dataPromise.position = 0;
  dataPromise.delay = 0;
}));

// makePromise(dataPromise) .then(onMakePromiseSuccess).catch(onMakePromiseError);

function onMakePromiseSuccess(result) {
  Notiflix.Notify.success(result)
  console.log(result)
}

function onMakePromiseError(error) {
  Notiflix.Notify.failure(error);
  console.log(error)
}

function makePromise({position, delay}) {

  const shouldResolve = Math.random() > 0.5;
 
  return new Promise((resolve, reject) => {

    setTimeout(() => {     
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
      //   if (amount > position) {
  //     setTimeout((() => {
  //       console.log(position += 1);
  //       delay += Number(firstDelay);
  //       const shouldResolve = Math.random() > 0.5;
  //       if (shouldResolve) {
  //       resolve(`Fulfilled promise ${position} in ${delay}ms`)
  //       } else {
  //       reject(`Rejected promise ${position} in ${delay}ms`);
  //     }
      
      
  //       if (amount > position) {
  //         const intervalPromise = setInterval((() => {
  //           console.log(position += 1);
  //           delay += Number(step);
  //           const shouldResolve = Math.random() > 0.5;
  //       if (shouldResolve) {
  //       resolve(`Fulfilled promise ${position} in ${delay}ms`)
  //       } else {
  //       reject(`Rejected promise ${position} in ${delay}ms`);
  //     }
            
            
  //           if (amount <= position) {
  //             clearInterval(intervalPromise);
  //             console.log('Stop!!!');
  //           }
  //         }), step)
  //       }
  //     // dataPromise.position = 0;
  //   }), firstDelay)
  // }
  })
}

function onInputDelay(evt) {
  dataPromise[`firstDelay`] = `${evt.target.value}`;
}

function onInputStep(evt) {
  dataPromise[`step`] = `${evt.target.value}`;
}

function onInputAmount(evt) {
  dataPromise[`amount`] = `${evt.target.value}`;
}

// function createPromise({ position, delay }) {
//   const shouldResolve = Math.random() > 0.5;
//   if (shouldResolve) {
//     resolve(`Fulfilled promise ${position} in ${delay}ms`)
//   } else {
//     reject(`Fulfilled promise ${position} in ${delay}ms`);
//   }
// }
