import * as S from '../styles/stylesIndex';
import { Card } from '../components/Card';

export default function Home() {
  return (
    <S.ContainerGeral>
      <Card
        title="PARA VOCÊ COMEÇAR"
        titlePlano="Essentials"
        valorPlano="R$ 19,97/mês"
        textoButton="Assinar agora"
        tipoButton="transparent"
        listBeneficios={['Até 3 usuários', 'Autoatendimento']}
      />
      <Card
        title="PARA VOCÊ COMEÇAR"
        titlePlano="Essentials"
        valorPlano="R$ 19,97/mês"
        textoButton="Assinar agora"
        tipo="dark"
        listBeneficios={[
          'Usuários ilimitados',
          'Suporte 24/7',
          'CSM Dedicado',
          'Treinamentos',
        ]}
      />
      <Card
        title="PARA VOCÊ COMEÇAR"
        titlePlano="Essentials"
        valorPlano="R$ 19,97/mês"
        textoButton="Assinar agora"
        tipoButton="transparent"
        listBeneficios={[
          'Plano customizado especialmente para a necessidade de seu negocio',
        ]}
      />
    </S.ContainerGeral>
  );
}
