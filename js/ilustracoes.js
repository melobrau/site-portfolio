/* =========================================================
   ILUSTRAÇÕES
   Coloque as imagens em assets/ilustracao/ e liste cada projeto aqui.
   A ORDEM DA LISTA é a ordem da grade (da esquerda para a direita, de cima para baixo).

   arquivo    imagem que aparece na grade (a capa do projeto), ex.: 'assets/ilustracao/retrato-01.jpg'
   proporcao  largura ÷ altura dessa imagem: 1 = quadrada | 0.8 = retrato 4:5 | 1.5 = paisagem 3:2 | 0.5625 = vertical 9:16
   nome       NOME DE EXIBIÇÃO: aparece na legenda do cartão e embaixo da imagem aberta
   titulo     título grande do lado ESQUERDO quando o projeto abre
   subtitulo  linha de apoio abaixo do título (ano, técnica, cliente)
   descricao  texto do lado DIREITO
   ferramentas (opcional) linha de ferramentas/créditos embaixo da descrição
   imagens    (opcional) imagens que aparecem ao abrir, em ordem, como carrossel com setas.
              Cada item: { arquivo, legenda }. Sem este campo, abre só a própria arte.
              Um item pode ter também spotify: 'https://open.spotify.com/album/...' (cole o link do disco/faixa).
              Com esse campo, o slide vira um player que toca aqui mesmo, com botão "Abrir no Spotify" (nova guia).
              Sem o campo (ou vazio), mostra a imagem normalmente.

   Exemplo de projeto novo (copie, cole depois da última chave e troque os dados):
   {
     arquivo: 'assets/ilustracao/exemplo-capa.jpg', proporcao: 1,
     nome: 'Nome de exibição',
     titulo: 'Título do projeto',
     subtitulo: 'Ilustração digital · 2026',
     descricao: 'Conte o que é, como foi feito e para quem.',
     ferramentas: 'Krita, Photoshop',
     imagens: [
       { arquivo: 'assets/ilustracao/exemplo-capa.jpg', legenda: 'Capa' },
       { arquivo: 'assets/ilustracao/exemplo-2.jpg', legenda: 'Detalhe' }
     ]
   },
   ========================================================= */
window.ILUSTRACOES = [
  {
    arquivo: 'assets/ilustracao/luana-tavares-capa.jpg', proporcao: 1,
    nome: 'Outro Astral · Luana Tavares',
    titulo: 'Outro Astral',
    subtitulo: 'EP de Luana Tavares · 2025',
    descricao: 'Capa e contracapa do EP Outro Astral, de Luana Tavares, com três faixas: Bem Me Quero, Ori e Eu Sou.',
    imagens: [
      { arquivo: 'assets/ilustracao/luana-tavares-capa.jpg', legenda: 'Capa' },
      { arquivo: 'assets/ilustracao/luana-tavares-contracapa.jpg', legenda: 'Contracapa' },
      { arquivo: 'assets/ilustracao/luana-tavares-spotify.png', legenda: 'No Spotify', spotify: 'https://open.spotify.com/intl-pt/album/5X5yV1jmAYam0C2ls7rMp0' }
    ]
  },
  {
    arquivo: 'assets/ilustracao/de-pes-dom-santana.jpg', proporcao: 1.4139,
    nome: 'De Pés · Dom Santana',
    titulo: 'De Pés',
    subtitulo: 'EP de Dom santana. ',
    descricao: 'Ilustração de capa para o EP do cantor pernambucano Dom Santana.',
    imagens: [
      { arquivo: 'assets/ilustracao/de-pes-dom-santana.jpg', legenda: 'Ilustração' },
      { arquivo: 'assets/ilustracao/de-pes-dom-santana.jpg', legenda: 'No Spotify', spotify: 'https://open.spotify.com/intl-pt/album/4JGxNJeeUtHRFCtamU81R7' }
    ]
  },
  {
    arquivo: 'assets/ilustracao/sarava-a-jurema-sagrada.jpg', proporcao: 1,
    nome: 'Podcast Sarava à Jurema Sagrada',
    titulo: 'Sarava à Jurema Sagrada',
    subtitulo: 'Capa para o podcast - 2025.',
    descricao: 'Ilustração para o podcast Saravá à Jurema Sagrada, da jornalista pernambucana Maria Letícia Menezes.',
    imagens: [
      { arquivo: 'assets/ilustracao/sarava-a-jurema-sagrada.jpg', legenda: 'Capa' },
      { arquivo: 'assets/ilustracao/sarava-a-jurema-sagrada.jpg', legenda: 'No Spotify', spotify: 'https://open.spotify.com/show/3a5KaLq4VsybWiMc1VKPCo' }
    ]
  },
  {
    arquivo: 'assets/ilustracao/nao-me-chama-de-cpc.jpg', proporcao: 1,
    nome: 'Não Me Chama de Cpç · AGÔ MC',
    titulo: 'Não Me Chama de Cpç',
    subtitulo: 'Single de AGÔ MC · 2023',
    descricao: 'Capa do single Não Me Chama de Cpç, de AGÔ MC.',
    imagens: [
      { arquivo: 'assets/ilustracao/nao-me-chama-de-cpc.jpg', legenda: 'Capa' },
      { arquivo: 'assets/ilustracao/nao-me-chama-de-cpc.jpg', legenda: 'No Spotify', spotify: 'https://open.spotify.com/intl-pt/album/2ZG6eRVxvT1ji6hzpsalU7' }
    ]
  },
  {
    arquivo: 'assets/ilustracao/supernova-marakarma.jpg', proporcao: 1.4139,
    nome: 'Supernova · Marakarma',
    titulo: 'Supernova',
    subtitulo: 'Mixtape de Marakarma · 2025',
    descricao: 'Arte da mixtape Supernova, de Marakarma, com sete faixas.',
    imagens: [
      { arquivo: 'assets/ilustracao/supernova-marakarma.jpg', legenda: 'Ilustração' },
      { arquivo: 'assets/ilustracao/supernova-marakarma.jpg', legenda: 'No Spotify', spotify: 'https://open.spotify.com/intl-pt/album/0LzQFxQrwmcMSlt7LqFZ5P' }
    ]
  }
];
