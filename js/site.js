(function () {
  'use strict';

  /* ---------------------------------------------------------
     ÁREAS DE ATUAÇÃO: cada cartão é um slide automático com as capas de todos os
     trabalhos da categoria (na ordem de videos.js / ilustracoes.js), com fusão suave.
     Categoria com um só trabalho fica parada.
     --------------------------------------------------------- */
  (function () {
    var reduzido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var INTERVALO = 4200;
    Array.prototype.forEach.call(document.querySelectorAll('.area__capa[data-capa]'), function (el, k) {
      var tipo = el.getAttribute('data-capa'), itens;
      if (tipo === 'ilustracao') {
        itens = (window.ILUSTRACOES || []).map(function (a) { return { src: a.arquivo, foco: a.foco }; });
      } else {
        itens = (window.VIDEOS || []).filter(function (x) { return x.categoria === tipo && x.capa; })
          .map(function (x) { return { src: x.capa, foco: x.foco }; });
      }
      itens = itens.filter(function (i) { return i.src; });
      if (!itens.length) return;
      el.classList.add('area__capa--slide');
      var imgs = itens.map(function (i, n) {
        var img = document.createElement('img');
        img.alt = '';
        img.src = i.src;
        if (n > 0) img.loading = 'lazy';
        if (i.foco) img.style.objectPosition = i.foco;
        if (n === 0) img.className = 'on';
        el.appendChild(img);
        return img;
      });
      if (imgs.length < 2 || reduzido) return;
      var atual = 0;
      // cada cartão começa em um momento diferente, para não trocarem todos juntos
      setTimeout(function () {
        setInterval(function () {
          if (document.hidden) return;
          imgs[atual].classList.remove('on');
          atual = (atual + 1) % imgs.length;
          imgs[atual].classList.add('on');
        }, INTERVALO);
      }, 900 * k);
    });
  })();

  /* ---------------------------------------------------------
     MENU (celular e tablet)
     --------------------------------------------------------- */
  var botao = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu');

  function abrirMenu(abrir) {
    if (!botao || !menu) return;
    botao.setAttribute('aria-expanded', String(abrir));
    botao.querySelector('.menu-botao__texto').textContent = abrir ? 'Fechar' : 'Menu';
    menu.classList.toggle('aberto', abrir);
  }

  if (botao && menu) {
    botao.addEventListener('click', function () {
      abrirMenu(botao.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) abrirMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('aberto')) {
        abrirMenu(false);
        botao.focus();
      }
    });
  }

  /* ---------------------------------------------------------
     REEL
     Se o arquivo do vídeo não existir, mostra o espaço reservado.
     --------------------------------------------------------- */
  var reel = document.querySelector('.reel');
  if (reel) {
    var video = reel.querySelector('video');
    var semVideo = function () { reel.classList.add('sem-video'); };
    var verificar = function () {
      if (video && (video.error || video.networkState === 3)) semVideo(); // 3 = sem fonte
    };
    var fonte = reel.querySelector('source');
    if (fonte) fonte.addEventListener('error', semVideo);
    if (video) video.addEventListener('error', semVideo);
    verificar();
    window.addEventListener('load', verificar);
  }

  /* ---------------------------------------------------------
     SOFTWARES
     Se o ícone não existir, mostra a sigla no lugar.
     --------------------------------------------------------- */
  document.querySelectorAll('.softwares__lista img').forEach(function (img) {
    var trocar = function () {
      var sigla = document.createElement('span');
      sigla.className = 'sigla';
      sigla.textContent = img.getAttribute('data-sigla') || img.alt.slice(0, 2);
      sigla.title = img.alt;
      sigla.setAttribute('role', 'img');
      sigla.setAttribute('aria-label', img.alt);
      if (img.parentNode) img.parentNode.replaceChild(sigla, img);
    };
    img.addEventListener('error', trocar);
    if (img.complete && img.naturalWidth === 0) trocar();
  });

  /* ---------------------------------------------------------
     VÍDEOS (Vimeo)
     Os cartões vêm de js/videos.js. O player só é criado quando a pessoa clica.
     --------------------------------------------------------- */
  var janela = document.getElementById('player');

  function texto(el, valor) { el.textContent = valor || ''; }

  function criarCartao(v, i) {
    var li = document.createElement('li');
    li.style.setProperty('--r', v.proporcao);

    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'video';
    b.setAttribute('data-indice', i);

    var capa = document.createElement('span');
    capa.className = 'video__capa';
    var img = document.createElement('img');
    img.src = v.capa;
    img.alt = '';
    img.loading = 'lazy';
    capa.appendChild(img);
    var play = document.createElement('span');
    play.className = 'video__play';
    play.setAttribute('aria-hidden', 'true');
    capa.appendChild(play);

    var legenda = document.createElement('span');
    legenda.className = 'video__legenda';
    var nome = document.createElement('span');
    nome.className = 'video__titulo';
    nome.textContent = v.nome;
    var tempo = document.createElement('span');
    tempo.className = 'video__tempo';
    tempo.textContent = v.duracao;
    legenda.appendChild(nome);
    legenda.appendChild(tempo);

    b.appendChild(capa);
    b.appendChild(legenda);
    li.appendChild(b);
    return li;
  }

  // cada lista da página mostra os vídeos da sua categoria (data-categoria)
  document.querySelectorAll('.videos__lista[data-categoria]').forEach(function (lista) {
    var contato = lista.querySelector('.videos__contato');
    (window.VIDEOS || []).forEach(function (v, i) {
      if (v.categoria === lista.getAttribute('data-categoria')) {
        lista.insertBefore(criarCartao(v, i), contato);
      }
    });
  });

  // setas laterais: rolagem suave quando há mais cartões do que cabem na tela
  document.querySelectorAll('.videos__lista[data-categoria]').forEach(function (lista) {
    var envoltorio = document.createElement('div');
    envoltorio.className = 'carrossel';
    lista.parentNode.insertBefore(envoltorio, lista);
    envoltorio.appendChild(lista);

    function seta(lado, rotulo) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'carrossel__seta carrossel__seta--' + lado;
      b.setAttribute('aria-label', rotulo);
      b.hidden = true;
      envoltorio.appendChild(b);
      return b;
    }
    var esq = seta('esq', 'Ver vídeos anteriores');
    var dir = seta('dir', 'Ver mais vídeos');

    function atualizar() {
      var max = lista.scrollWidth - lista.clientWidth;
      esq.hidden = lista.scrollLeft <= 2;
      dir.hidden = lista.scrollLeft >= max - 2;
    }
    function rolar(sentido) {
      lista.scrollBy({ left: sentido * lista.clientWidth * 0.8, behavior: 'smooth' });
    }
    esq.addEventListener('click', function () { rolar(-1); });
    dir.addEventListener('click', function () { rolar(1); });
    lista.addEventListener('scroll', atualizar, { passive: true });
    window.addEventListener('resize', atualizar);
    window.addEventListener('load', atualizar);
    atualizar();
  });

  if (janela && typeof janela.showModal === 'function') {
    var quadro = janela.querySelector('iframe');
    var ultimo = null;

    var moldura = janela.querySelector('.player__quadro');
    var grade = janela.querySelector('.player__frames');
    var playerSetaE = janela.querySelector('.player__seta.carrossel__seta--esq');
    var playerSetaD = janela.querySelector('.player__seta.carrossel__seta--dir');
    var atual = null;

    // projetos com "frames": abrem no vídeo; a seta da direita leva à grade de frames (e a da esquerda volta)
    function modo(frames) {
      var v = atual;
      var tem = !!(v.frames && v.frames.length);
      grade.hidden = !frames;
      moldura.hidden = frames;
      janela.classList.toggle('player--frames', frames);
      playerSetaE.hidden = !(tem && frames);
      playerSetaD.hidden = !(tem && !frames);
      if (frames) {
        quadro.src = 'about:blank';
      } else {
        var som = v.som === true ? '&muted=0' : (v.som === false ? '&muted=1' : '');
        quadro.src = 'https://player.vimeo.com/video/' + v.id + '?h=' + v.h +
          '&autoplay=1&title=0&byline=0&portrait=0&dnt=1' + som;
      }
      texto(janela.querySelector('.player__nome'), tem ? v.nome + (frames ? ' · Frames' : ' · Vídeo') : v.nome);
    }
    playerSetaD.addEventListener('click', function () { modo(true); });
    playerSetaE.addEventListener('click', function () { modo(false); });
    document.addEventListener('keydown', function (e) {
      if (!janela.open || !atual || !(atual.frames && atual.frames.length)) return;
      if (e.key === 'ArrowRight' && grade.hidden) modo(true);
      else if (e.key === 'ArrowLeft' && !grade.hidden) modo(false);
    });

    var abrir = function (botao) {
      var v = window.VIDEOS[Number(botao.getAttribute('data-indice'))];
      if (!v) return;
      atual = v;
      janela.style.setProperty('--r', v.proporcao);
      quadro.title = v.nome;
      texto(janela.querySelector('.player__titulo'), v.titulo);
      texto(janela.querySelector('.player__subtitulo'), v.subtitulo);
      texto(janela.querySelector('.player__descricao'), v.descricao);
      texto(janela.querySelector('.player__ferramentas'), v.ferramentas);
      texto(janela.querySelector('.player__nome'), v.nome);
      var temFrames = !!(v.frames && v.frames.length);
      grade.innerHTML = '';
      if (temFrames) {
        v.frames.forEach(function (src, n) {
          var li = document.createElement('li');
          var im = document.createElement('img');
          im.src = src;
          im.alt = v.nome + ' · frame ' + (n + 1);
          im.loading = 'lazy';
          li.appendChild(im);
          grade.appendChild(li);
        });
      }
      modo(false);
      ultimo = botao;
      janela.showModal();
      janela.scrollTop = 0;
    };

    document.querySelectorAll('.video').forEach(function (b) {
      b.addEventListener('click', function () { abrir(b); });
    });
    janela.querySelector('.player__fechar').addEventListener('click', function () { janela.close(); });
    // clique no fundo (fora do vídeo e dos textos) também fecha
    janela.addEventListener('click', function (e) {
      if (e.target === janela || e.target.classList.contains('player__palco')) janela.close();
    });
    janela.addEventListener('close', function () {
      quadro.src = 'about:blank'; // para o vídeo
      if (ultimo) ultimo.focus();
    });
  }

  /* ---------------------------------------------------------
     ILUSTRAÇÃO: grade + visualizador (mesmo padrão do player de vídeo)
     --------------------------------------------------------- */
  var listaArte = document.querySelector('.ilustracoes__lista');
  var visor = document.getElementById('visualizador');
  if (listaArte) {
    var artes = window.ILUSTRACOES || [];
    var vazio = document.querySelector('.ilustracoes__vazio');
    if (vazio) vazio.hidden = artes.length > 0;
    var faixa = visor ? visor.querySelector('.visor__faixa') : null;
    var setaE = visor ? visor.querySelector('.carrossel__seta--esq') : null;
    var setaD = visor ? visor.querySelector('.carrossel__seta--dir') : null;
    var rotulo = visor ? visor.querySelector('.visor__rotulo') : null;
    var contador = visor ? visor.querySelector('.visor__contador') : null;
    var atual = [], nomeAtual = '';

    function indiceVisivel() { return Math.round(faixa.scrollLeft / faixa.clientWidth); }
    function marcar() {
      var n = Math.max(0, Math.min(atual.length - 1, indiceVisivel()));
      carregarSlide(n);
      var f = atual[n] || {};
      rotulo.textContent = nomeAtual + (f.legenda ? ' · ' + f.legenda : '');
      contador.textContent = atual.length > 1 ? (n + 1) + ' / ' + atual.length : '';
      setaE.hidden = atual.length < 2 || n === 0;
      setaD.hidden = atual.length < 2 || n === atual.length - 1;
    }
    function ir(n) {
      n = Math.max(0, Math.min(atual.length - 1, n));
      faixa.scrollTo({ left: n * faixa.clientWidth, behavior: 'smooth' });
    }
    // link normal do Spotify (open.spotify.com/album/ID) -> endereço do player incorporado
    function embedSpotify(link) {
      var m = /open\.spotify\.com\/(?:intl-[a-z]+\/)?(album|track|playlist|artist|show|episode)\/([A-Za-z0-9]+)/.exec(link || '');
      return m ? 'https://open.spotify.com/embed/' + m[1] + '/' + m[2] + '?utm_source=generator' : null;
    }
    // o player só carrega quando a pessoa chega nesse slide
    function carregarSlide(n) {
      var f = faixa.children[n] && faixa.children[n].querySelector('iframe[data-src]');
      if (f && !f.src) f.src = f.getAttribute('data-src');
    }
    function montarFaixa(fotos, nome) {
      atual = fotos; nomeAtual = nome || '';
      faixa.style.scrollBehavior = 'auto';
      faixa.innerHTML = '';
      fotos.forEach(function (f) {
        var rot = f.legenda ? nomeAtual + ' · ' + f.legenda : nomeAtual;
        var ouvir = f.spotify ? embedSpotify(f.spotify) : null;
        if (ouvir) {
          // slide com player do Spotify: toca aqui mesmo; o botão abre o EP numa nova guia
          var slide = document.createElement('div');
          slide.className = 'visor__slide visor__slide--spotify';
          var fundo = document.createElement('img');
          fundo.className = 'visor__fundo';
          fundo.src = fotos[0].arquivo;
          fundo.alt = '';
          var player = document.createElement('iframe');
          player.className = 'visor__spotify';
          player.title = 'Ouvir ' + nomeAtual + ' no Spotify';
          player.setAttribute('data-src', ouvir);
          player.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
          var abrir = document.createElement('a');
          abrir.className = 'visor__abrir';
          abrir.href = f.spotify;
          abrir.target = '_blank';
          abrir.rel = 'noopener noreferrer';
          abrir.textContent = 'Abrir no Spotify \u2197';
          slide.appendChild(fundo);
          slide.appendChild(player);
          slide.appendChild(abrir);
          faixa.appendChild(slide);
          return;
        }
        var im = document.createElement('img');
        im.src = f.arquivo;
        im.alt = rot;
        faixa.appendChild(im);
      });
      faixa.scrollLeft = 0;
      faixa.style.scrollBehavior = '';
      marcar();
    }
    if (faixa) {
      faixa.addEventListener('scroll', marcar, { passive: true });
      setaE.addEventListener('click', function () { ir(indiceVisivel() - 1); });
      setaD.addEventListener('click', function () { ir(indiceVisivel() + 1); });
      visor.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { ir(indiceVisivel() - 1); e.preventDefault(); }
        if (e.key === 'ArrowRight') { ir(indiceVisivel() + 1); e.preventDefault(); }
      });
    }

    artes.forEach(function (a, i) {
      var li = document.createElement('li');
      li.style.setProperty('--r', a.proporcao);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'video';
      b.setAttribute('data-indice', i);
      var capa = document.createElement('span');
      capa.className = 'video__capa';
      var img = document.createElement('img');
      img.src = a.arquivo;
      img.alt = a.nome || '';
      img.loading = 'lazy';
      capa.appendChild(img);
      var legenda = document.createElement('span');
      legenda.className = 'video__legenda';
      var nome = document.createElement('span');
      nome.className = 'video__titulo';
      nome.textContent = a.nome;
      legenda.appendChild(nome);
      var fotos = (a.imagens && a.imagens.length) ? a.imagens : [{ arquivo: a.arquivo }];
      if (fotos.length > 1) {
        var qtd = document.createElement('span');
        qtd.className = 'video__tempo';
        qtd.textContent = fotos.length + ' imagens';
        legenda.appendChild(qtd);
      }
      b.appendChild(capa);
      b.appendChild(legenda);
      li.appendChild(b);
      listaArte.appendChild(li);

      b.addEventListener('click', function () {
        if (!visor || typeof visor.showModal !== 'function') return;
        visor.style.setProperty('--r', a.proporcao);
        texto(visor.querySelector('.player__titulo'), a.titulo);
        texto(visor.querySelector('.player__subtitulo'), a.subtitulo);
        texto(visor.querySelector('.player__descricao'), a.descricao);
        texto(visor.querySelector('.player__ferramentas'), a.ferramentas);
        visor.classList.toggle('visor--spotify', fotos.some(function (f) { return f.spotify && embedSpotify(f.spotify); }));
        montarFaixa(fotos, a.nome);
        visor.showModal();
        visor.scrollTop = 0;
        visor._ultimo = b;
        marcar(); // só agora a faixa tem largura medida
      });
    });
    if (visor) {
      visor.querySelector('.player__fechar').addEventListener('click', function () { visor.close(); });
      visor.addEventListener('click', function (e) {
        if (e.target === visor || e.target.classList.contains('player__palco')) visor.close();
      });
      visor.addEventListener('close', function () { if (visor._ultimo) visor._ultimo.focus(); });
    }
  }

  /* ---------------------------------------------------------
     CONTATO: monta a chamada e as linhas a partir de js/contato.js
     --------------------------------------------------------- */
  (function () {
    var dados = window.CONTATO;
    var secao = document.getElementById('contato');
    if (!dados || !secao) return;
    secao.querySelector('.contato__titulo').textContent = dados.titulo || '';
    secao.querySelector('.contato__texto').textContent = dados.texto || '';
    var lista = secao.querySelector('.contato__lista');
    (dados.canais || []).forEach(function (c) {
      var li = document.createElement('li');
      var el = document.createElement(c.link ? 'a' : 'div');
      el.className = 'contato__canal';
      if (c.link) {
        el.href = c.link;
        if (/^https?:/.test(c.link)) { el.target = '_blank'; el.rel = 'noopener'; }
      }
      var r = document.createElement('span');
      r.className = 'contato__rotulo';
      r.textContent = c.rotulo;
      var t = document.createElement('span');
      t.className = 'contato__valor';
      t.textContent = c.texto;
      var s = document.createElement('span');
      s.className = 'contato__seta';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = c.link ? '↗' : '';
      el.appendChild(r); el.appendChild(t); el.appendChild(s);
      li.appendChild(el);
      lista.appendChild(li);
    });
  })();

  /* ---------------------------------------------------------
     LETREIRO
     Padrão repetido: nome, sol, assinatura, sol.
     Monta grupos iguais até cobrir a tela e anda exatamente um
     grupo por volta, então o loop fecha sem emenda.
     --------------------------------------------------------- */
  var PADRAO = ['nome', 'sol', 'assinatura', 'sol'];
  var VELOCIDADE = 95.2; // pixels por segundo (136 menos 30%). Menor = mais lento

  // cor dos elementos para cada fundo (sempre com contraste: creme nos escuros, escuro no branco)
  var TINTA = { preto: 'creme', azul: 'creme', vermelho: 'creme', branco: 'escuro' };

  // cada vinheta da página (.letreiro) tem o seu tema em data-tema
  Array.prototype.forEach.call(document.querySelectorAll('.letreiro'), function (letreiro, ordem) {
    var trilho = letreiro.querySelector('.trilho');
    if (!trilho) return;

    // ?tema=azul no endereço testa cores só na primeira vinheta (a do topo)
    var tema = (ordem === 0 && new URLSearchParams(window.location.search).get('tema')) || letreiro.getAttribute('data-tema');
    if (!TINTA[tema]) tema = 'preto';
    letreiro.setAttribute('data-tema', tema);

    function criarUnidade() {
      var unidade = document.createElement('div');
      unidade.className = 'unidade';
      PADRAO.forEach(function (nome) {
        var img = new Image();
        img.className = 'el el--' + nome;
        img.alt = '';
        img.src = 'assets/elementos/' + nome + '-' + TINTA[tema] + '.png';
        unidade.appendChild(img);
      });
      return unidade;
    }

    function montar() {
      trilho.innerHTML = '';

      var grupo = document.createElement('div');
      grupo.className = 'grupo';
      grupo.appendChild(criarUnidade());
      trilho.appendChild(grupo);

      var larguraUnidade = grupo.getBoundingClientRect().width;
      var unidades = Math.ceil(letreiro.clientWidth / larguraUnidade) + 1;
      for (var i = 1; i < unidades; i++) grupo.appendChild(criarUnidade());

      var larguraGrupo = grupo.getBoundingClientRect().width;
      var copia = grupo.cloneNode(true);
      trilho.appendChild(copia);

      trilho.style.setProperty('--passo', larguraGrupo + 'px');
      trilho.style.setProperty('--duracao', (larguraGrupo / VELOCIDADE) + 's');
    }

    montar();

    var larguraAnterior = window.innerWidth;
    var espera;
    window.addEventListener('resize', function () {
      if (window.innerWidth === larguraAnterior) return; // ignora só a barra do navegador
      larguraAnterior = window.innerWidth;
      clearTimeout(espera);
      espera = setTimeout(montar, 150);
    });
  });
  /* =========================================================
     SOBRE: monta a seção a partir de js/sobre.js
     ========================================================= */
  (function () {
    var d = window.SOBRE, secao = document.getElementById('sobre');
    if (!d || !secao) return;
    secao.querySelector('.sobre__titulo').textContent = d.titulo || '';
    var par = secao.querySelector('.sobre__paragrafos');
    (d.paragrafos || []).forEach(function (t) { var p = document.createElement('p'); p.textContent = t; par.appendChild(p); });
    var ul = secao.querySelector('.sobre__fazer');
    (d.fazer || []).forEach(function (t) { var li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
    var st = secao.querySelector('.sobre__status');
    if (d.status) { st.querySelector('span:last-child').textContent = d.status; st.hidden = false; }
    var cv = secao.querySelector('.sobre__cv');
    if (d.curriculo) { cv.href = d.curriculo; cv.hidden = false; }
    var fig = secao.querySelector('.sobre__foto'), foto = fig.querySelector('img');
    if (d.foto) {
      var t = new Image();
      t.onload = function () { foto.src = d.foto; foto.hidden = false; fig.classList.add('tem-foto'); };
      t.src = d.foto;
    }
  })();
})();
