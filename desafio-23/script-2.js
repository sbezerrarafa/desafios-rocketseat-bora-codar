const form = document.getElementById('meuForm');
const formSteps = document.querySelectorAll('.form-step');
const progressStep = document.querySelectorAll('.step-progress strong');

let currentStep = 0;

form.addEventListener('click', (e) => {
  if (!e.target.matches('[data-action]')) {
    return;
  }
  const actions = {
    next() {
      if (!validacao()) {
        return;
      }
      currentStep++;
    },
    prev() {
      currentStep--;
    },
  };
  const action = e.target.dataset.action;
  actions[action]();
  updateActiveStep();
  updateProgressStep();
});
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  alert(`Obrigado  ${data.get('name')}`);
});

function updateActiveStep() {
  formSteps.forEach((step) => {
    step.classList.remove('ativo');
  });
  formSteps[currentStep].classList.add('ativo');
}

function updateProgressStep() {
  progressStep.forEach((step, index) => {
    step.classList.remove('ativo');
    step.classList.remove('done');

    if (index < currentStep + 1) {
      step.classList.add('ativo');
    }
    if (index < currentStep) {
      step.classList.add('done');
    }
  });
}

function validacao() {
  const currentFormStep = formSteps[currentStep];
  const formFields = [
    ...currentFormStep.querySelectorAll('input'),
    ...currentFormStep.querySelectorAll('textarea'),
  ];

  return formFields.every((input) => input.reportValidity());
}
//  usar como data
