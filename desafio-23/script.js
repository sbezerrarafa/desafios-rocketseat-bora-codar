const prevBtns = document.querySelectorAll(('.prev-btn'))
const nextBtns = document.querySelectorAll(('.next-btn'))
const form = document.getElementById('meuForm');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.step-progress strong');

let currentStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!validacao()) {
      console.log('bateu aqui')
      return;
    }
    currentStep++;
    updateFormsSteps();
    updateProgressStep()
  })
})
prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    currentStep--;
    updateFormsSteps();
  })
})

function updateFormsSteps() {
  formSteps.forEach(formStep => {
    formStep.classList.contains('ativo') &&
      formStep.classList.remove('ativo')
  })
  formSteps[currentStep].classList.add('ativo')
}
function updateProgressStep() {
  progressSteps.forEach((step, index) => {
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