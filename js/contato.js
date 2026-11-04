/* =========================================================
   CONTATO
   Edite aqui os seus canais. A página monta a seção a partir desta lista.
   A ORDEM DA LISTA é a ordem das linhas.

   rotulo   nome do canal (E-mail, WhatsApp, Instagram...)
   texto    o que aparece escrito (o e-mail, o @ do Instagram, o número)
   link     endereço que abre ao clicar. Exemplos:
              e-mail:    'mailto:voce@email.com'
              whatsapp:  'https://wa.me/5581999999999'   (55 + DDD + número, sem espaços)
              instagram: 'https://instagram.com/seuusuario'
              behance:   'https://behance.net/seuusuario'
            Sem link (vazio), a linha aparece sem clique: bom para deixar reservado.
   Para esconder um canal, apague a linha ou comente com //. (Behance: reativar = copiar a linha do Instagram e trocar os dados.)
   ========================================================= */
window.CONTATO = {
  titulo: 'Vamos fazer algo juntos?',
  texto: 'Vídeo, animação, ilustração ou um projeto que mistura tudo. Me conta a ideia e eu respondo.',
  canais: [
    { rotulo: 'E-mail',    texto: 'melo.prodi@gmail.com', link: 'mailto:melo.prodi@gmail.com' },
    // abre o WhatsApp direto (no computador, pelo WhatsApp Web ou programa; no celular, pelo aplicativo) com uma mensagem pronta
    { rotulo: 'WhatsApp',  texto: '(81) 99269-2093',       link: 'https://wa.me/5581992692093?text=Ol%C3%A1%2C%20Mateus!%20Vi%20seu%20portf%C3%B3lio%20e%20queria%20conversar.' },
    { rotulo: 'Instagram', texto: '@melobrau',            link: 'https://instagram.com/melobrau' }
  ]
};
