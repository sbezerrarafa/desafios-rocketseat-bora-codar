const inputHover = document.querySelector('.container-input');
const input = document.getElementById('carregar');
const nomeArquivo = document.getElementById('nome_arquivo');
const tamanhoArquivo = document.getElementById('tamanho-total');
const tamanhoInicial = document.getElementById('tamanho-inicial');
const tamanhoBarra = document.getElementById('barra');
const porcentagem = document.getElementById('porcentagem');

inputHover.addEventListener('dragover', () => {
  inputHover.classList.add('dragover');
});
inputHover.addEventListener('dragleave', () => {
  inputHover.classList.remove('dragover');
});

function trocarValor() {
  input.addEventListener('change', () => {
    var arquivo = input.files[0];
    var nomeNovo = arquivo.name;
    var tamanhoNovo = arquivo.size;
    var tamanhoConvertido = tamanhoNovo / (1024 * 1024);
    var tamanhoArquivoAtual = tamanhoConvertido.toFixed(2);
    nomeArquivo.textContent = nomeNovo;
    tamanhoArquivo.textContent = tamanhoArquivoAtual + ' MB';

    var valor = parseFloat(tamanhoArquivoAtual);

    function incrementSizeValue(i, max) {
      if (i > max) return;
      setTimeout(function () {
        tamanhoInicial.innerText = i.toFixed(2) + ' MB / ';
        incrementSizeValue(i + 0.1, max);
      }, 100);
    }
    incrementSizeValue(0, valor);

    function incrementBarra(i, maxBarra) {
      if (i > maxBarra) return;
      setTimeout(function () {
        tamanhoBarra.value = i;
        porcentagem.innerText = i + '%';
        incrementBarra(i + 1, maxBarra);
      }, 30);
    }
    incrementBarra(0, 100);
  });
}

trocarValor();
