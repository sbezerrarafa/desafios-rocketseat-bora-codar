import { Selector } from 'testcafe';

fixture`Desafio 20 Test`
  .page`./index.html`;

test('Verifica título e visibilidade dos elementos', async t => {
  // Verifica o título da página
  await t.expect(Selector('title').textContent).eql('Desafio 23');

  // Verifica o texto do header
  await t.expect(Selector('header h1').textContent).eql('The -!Abstractor Galary');

  // Verifica se os elementos da primeira linha de imagens estão visíveis
  for (let i = 1; i <= 4; i++) {
    const container = Selector(`.model-1 .container:nth-child(${i})`);
    await t.expect(container.visible).ok();
  }

  // Verifica se os elementos da segunda linha de imagens estão visíveis
  for (let i = 1; i <= 4; i++) {
    const container = Selector(`.model-2 .container:nth-child(${i})`);
    await t.expect(container.visible).ok();
  }
});