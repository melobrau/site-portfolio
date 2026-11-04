/* =========================================================
   VÍDEOS DA SEÇÃO "VÍDEO"
   É aqui que você edita os textos de cada vídeo. A página monta tudo a partir desta lista.

   categoria  'video' (seção Vídeo), 'animacao' (seção Animação) ou 'misto' (Trabalhos mistos)
              (use 'oculto' para esconder um vídeo do site sem apagar)
   id         número do vídeo no Vimeo (o que vem depois de vimeo.com/)
   h          código do link privado (o que vem depois do número, quando o vídeo é oculto)
   proporcao  1.7778 = horizontal 16:9  |  1 = quadrado  |  0.5625 = vertical 9:16
   som        true = abre COM som | false = abre mudo (e continua mudo) | sem este campo = padrão do Vimeo
   duracao    texto que aparece no cartão
   capa       caminho da imagem de capa (o que vem do Vimeo funciona; pode trocar por um arquivo seu)
   frames     (opcional) lista de imagens: o projeto abre numa grade de frames, com botão para assistir ao vídeo. Ex.: frames: ['assets/video/x/01.jpg', ...]
   foco       (opcional) enquadramento da capa nos cartões de "Áreas de atuação" (que são horizontais): '50% 8%' = centro, bem no alto
              (primeiro número = esquerda/direita, segundo = cima/baixo). Sem este campo, centraliza.

   nome       NOME DE EXIBIÇÃO: aparece na legenda do cartão e na barra embaixo do player
              (não precisa ser igual ao título que o vídeo tem no Vimeo)
   titulo     título grande que sobe do lado ESQUERDO quando o vídeo abre
   subtitulo  linha de apoio abaixo do título
   descricao  texto do lado DIREITO do player
   ferramentas (opcional) linha de crédito/ferramentas embaixo da descrição; some se ficar vazio
   A ORDEM DESTA LISTA é a ordem em que os cartões aparecem em cada seção (da esquerda para a direita).
   ========================================================= */
window.VIDEOS = [
  {
    categoria: 'video',
    id: '1242563981', h: '00bada6da3', proporcao: 0.5625, duracao: '1:52',
    capa: 'https://i.vimeocdn.com/video/2220850443-0b9562214d21b8e81aa35189859dce86527c711895ac4ea605627b9ee3beaa6b-d_1280',
    foco: '50% 8%',
    nome: 'Monielle · Ativos Precatórios',
    titulo: 'Monielle',
    subtitulo: 'Case documental de Monielle - 2026',
    descricao: 'Monielle é uma dos cases de maior sucesso da Ativos Precatórios, chegou a liquidar sozinha um precatório de 60 Milhões.'
  },
  {
    categoria: 'video',
    id: '1242936095', h: 'ee04aed805', proporcao: 0.5625, duracao: '0:46',
    capa: 'https://i.vimeocdn.com/video/2221317380-bb4c14e7b120dbec0b554f1ca86b0cc017e3045008bd1f793cd27a6582c29ffb-d_1280',
    foco: '50% 21%',
    nome: 'Ativos Precatórios · INSS',
    titulo: 'Ativos Precatórios · INSS',
    subtitulo: 'Material informativo para Instagram - 2026.',
    descricao: '[Descrição: o que é o projeto, qual foi o seu papel e como foi feito.]'
  },
  {
    categoria: 'video',
    id: '1242569908', h: '69968de8bb', proporcao: 0.5625, duracao: '1:01',
    capa: 'https://i.vimeocdn.com/video/2220858416-5a5908060a52f65dff6a2879e0126184f79c6f32219a086d2b313cfa2bc3bd4d-d_1280',
    foco: '50% 3%',
    nome: 'Circuito Paladino - PB',
    titulo: 'Circuito Paladino - PB',
    subtitulo: '2024',
    descricao: 'Cobertura do Circuito de Kart Paladino, na Paraiba, para Cleev Racing - 2024.'
  },
  {
    categoria: 'video',
    id: '1242563976', h: 'b1bc820267', proporcao: 0.5625, duracao: '0:37',
    capa: 'https://i.vimeocdn.com/video/2220850668-7cf1bb66b041f4c165ee692c86d3401a9580b1ec60a6b76714777a76dfdf5676-d_1280',
    foco: '50% 15%',
    nome: 'Formula Delta · Interlagos',
    titulo: 'Formula Delta · Interlagos',
    subtitulo: 'Entrevista com o piloto P.A, 2° lugar - 2025',
    descricao: 'Material produzido para Cleev Racing.'
  },
  {
    categoria: 'video',
    id: '1242948050', h: '08141b1e72', proporcao: 0.5625, duracao: '1:31',
    capa: 'https://i.vimeocdn.com/video/2221332958-3bbdc92dca5e702ced3c42fb5a03f0b68019fcd94e9ddb522d036d72d47c3371-d_960',
    foco: '50% 80%',
    nome: 'Neurobots',
    titulo: 'Neurobots.',
    subtitulo: 'Conteúdo para Instagram.',
    descricao: 'A Neurobots desenvolve pesquisas e tecnologias para auxiliar no tratamento de pessoas que sofreram AVC.'
  },
  {
    categoria: 'video',
    id: '1242565216', h: '415f05c21a', proporcao: 1, duracao: '2:38',
    capa: 'https://i.vimeocdn.com/video/2220852203-4973a3a4f7ee593735ca77a5888a611ecc1567e1ff30b23a47bfef4b76892ecb-d_1280',
    nome: 'Visualizer · Bandeira',
    titulo: 'Bandeira',
    subtitulo: 'Visualizer do single Bandeira - 2025',
    descricao: 'Do Alto do Brasil, Andrad é uma das novas vozes do rap underground recifense.'
  },
  {
    categoria: 'animacao',
    som: false,
    id: '1242563978', h: 'e74212b88d', proporcao: 1.7778, duracao: '0:15',
    capa: 'assets/video/ativos-institucional.jpg',
    nome: 'Ativos Precatórios · Institucional · Times Square, NY.',
    titulo: 'Ativos Precatórios',
    subtitulo: 'Material institucional.',
    descricao: 'Este institucional foi produzido em inglês para ser veiculado na Times Square, New York.'
  },
  {
    categoria: 'misto',
    id: '1242569907', h: '924d61ae8d', proporcao: 1, duracao: '0:06',
    capa: 'https://i.vimeocdn.com/video/2220858074-6e6ab615b23d39e553eef6ed801de4498b22ffa98698cd321a3268a1223b777c-d_1280',
    frames: ['assets/video/fuego/frame-01.jpg', 'assets/video/fuego/frame-02.jpg', 'assets/video/fuego/frame-03.jpg', 'assets/video/fuego/frame-04.jpg', 'assets/video/fuego/frame-05.jpg', 'assets/video/fuego/frame-06.jpg'],
    nome: 'Fuego',
    titulo: 'Fuego',
    subtitulo: 'Video-colagem - 2023',
    descricao: 'Animação frame a frame feita com colagem tradicional, cada elemento de cada frame é um recorte diferente de papel.'
  },
  {
    categoria: 'animacao',
    som: true,
    id: '1242830001', h: '87cee10d2e', proporcao: 0.5625, duracao: '0:05',
    capa: 'https://i.vimeocdn.com/video/2221183444-6925456b1ecc46eef71ab8cf4f58f2bf59cf7e54419576bd61be2b5da62ca953-d_1280',
    nome: 'Ativos Partners',
    titulo: 'Ativos Partners',
    subtitulo: '',
    descricao: 'Motion para a submarca da Ativos Precatórios.'
  },
  {
    categoria: 'animacao',
    som: false,
    id: '1242931752', h: '13d87cd882', proporcao: 0.5625, duracao: '0:04',
    capa: 'https://i.vimeocdn.com/video/2221311890-fa38b5ccea3865d1625d8ba19c82df1d1adf3a363183878d089dc45624e5c7b6-d_1280',
    foco: '50% 5%',
    nome: 'Motion Fenalaw',
    titulo: 'Motion Fenalaw',
    subtitulo: 'Animação de card.',
    descricao: '[Descrição: o que é o projeto, qual foi o seu papel e como foi feito.]'
  },
  {
    categoria: 'animacao',
    id: '1243071339', h: 'e33cfa8a03', proporcao: 0.5625, duracao: '0:15',
    capa: 'https://i.vimeocdn.com/video/2221493422-0d7336e2400cac5d2f037e26484b93c8a7d7e3cb5ed75b08635c567cfa72e376-d_1280',
    foco: '50% 33%',
    nome: 'Apresentação do Celerino',
    titulo: 'Apresentação do Celerino',
    subtitulo: 'Apresentação do mascote da empresa - 2026',
    descricao: 'Lançamento do mascote da empresa. O Celerino representa um ofício requisitório.',
    ferramentas: 'Roteiro, storyboard, animação, edição e finalização: Mateus Melo. Quadros gerados com Gemini e Firefly, narração e voz com ElevenLabs, edição no CapCut.'
  },
  {
    categoria: 'animacao',
    id: '1243073181', h: '59ea7821f3', proporcao: 0.5625, duracao: '0:33',
    capa: 'https://i.vimeocdn.com/video/2221495838-20197b294cd6e7ecdbd97dd27c939e7a5c711c279040925691cb85fb4f696466-d_1280',
    foco: '50% 10%',
    nome: 'Estrada dos Precatórios',
    titulo: 'Estrada dos Precatórios',
    subtitulo: '',
    descricao: 'Animação feita para Instagram.',
    ferramentas: 'Roteiro, storyboard, animação, edição e finalização. Quadros gerados com Gemini e Firefly, narração com ElevenLabs, edição no CapCut.'
  },
  {
    categoria: 'animacao',
    id: '1243073182', h: '7a5475aa52', proporcao: 0.5625, duracao: '0:22',
    capa: 'https://i.vimeocdn.com/video/2221495762-9f39c8d7fc7aaec4fb6cccee5bc404af56d618f15a24bd51f547755faeddff0f-d_1280',
    foco: '50% 33%',
    nome: 'Celerino · Fenalaw',
    titulo: 'Celerino · Fenalaw',
    subtitulo: '',
    descricao: 'Animação de check-in do Celerino indo à Fenalaw, em São Paulo.',
    ferramentas: 'Roteiro, storyboard, animação, edição e finalização: Mateus Melo. Quadros gerados com Gemini e Firefly, narração e voz com ElevenLabs, edição no CapCut.'
  },
  {
    categoria: 'oculto',
    id: '1242610638', h: 'bfb9d5cfac', proporcao: 0.5625, duracao: '0:16',
    capa: 'https://i.vimeocdn.com/video/2220910398-9a2bfef6840478f88d0c30907bd59008104fabb04d3cdca6be84ca11d1dcbafe-d_1280',
    nome: 'Motion Melissa',
    titulo: '[Título do vídeo]',
    subtitulo: '[Subtítulo: cliente, ano ou técnica]',
    descricao: '[Descrição: o que é o projeto, qual foi o seu papel e como foi feito.]'
  }
];
