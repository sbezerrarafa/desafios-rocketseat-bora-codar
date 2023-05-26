import './css/index.css';
import IMask from 'imask';

const ccBgColor01 = document.querySelector(
  '.cc-bg svg > g g:nth-child(1) path',
);
const ccBgColor02 = document.querySelector(
  '.cc-bg svg > g g:nth-child(2) path',
);

const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img');

function setCardType(type) {
  const colors = {
    visa: ['#436d99', '#2d57f2'],
    mastercard: ['#df6f29', '#c69347'],
    default: ['black', 'gray'],
  };
  ccBgColor01.setAttribute('fill', colors[type][0]);
  ccBgColor02.setAttribute('fill', colors[type][1]);
  ccLogo.setAttribute('src', `cc-${type}.svg`);
}

setCardType('default');

globalThis.setCardType = setCardType;

const cvc = document.querySelector('#security-code');
const mascaraCvc = {
  mask: '0000',
};
const maskedCvc = IMask(cvc, mascaraCvc);

const dataExpiracao = document.querySelector('#expiration-date');
const mascaraExpericacao = {
  mask: 'MM{/}YY',
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
};
const maskedExpiracao = IMask(dataExpiracao, mascaraExpericacao);

var cardNumber = document.querySelector('#card-number');
var cardNumberPatter = {
  mask: [
    {
      mask: '0000 0000 0000 0000',
      regex: /^4\d{0,15}/,
      cardtype: 'visa',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: 'mastercard',
    },
    {
      mask: '0000 0000 0000 0000',
      cardtype: 'default',
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '');
    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regex);
    });

    return foundMask;
  },
};
var cardNumberMasked = IMask(cardNumber, cardNumberPatter);

const addButton = document.querySelector('#btn-adiocinar');

addButton.addEventListener('click', () => {
  alert('cartão adicionado');
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
});

const cardHolder = document.querySelector('#card-holder');

cardHolder.addEventListener('input', () => {
  const ccHolder = document.querySelector('.cc-holder .value');

  ccHolder.innerText =
    cardHolder.value.length > 0 ? cardHolder.value : 'fulano de tal';
});

maskedCvc.on('accept', () => {
  const cvc = document.querySelector('.cc-security .value');
  cvc.innerHTML = maskedCvc.value.length > 0 ? maskedCvc.value : '123';
});

maskedExpiracao.on('accept', () => {
  const expiracao = document.querySelector('.cc-expiration .value');
  expiracao.innerHTML =
    maskedExpiracao.value.length > 0 ? maskedExpiracao.value : '02/32';
});

cardNumberMasked.on('accept', () => {
  const cardType = cardNumberMasked.masked.currentMask.cardtype;
  setCardType(cardType);
  const cartaoNumero = document.querySelector('.cc-number');
  cartaoNumero.innerHTML =
    cardNumberMasked.value.length > 0
      ? cardNumberMasked.value
      : '1234 5678 9012 3456';
});
