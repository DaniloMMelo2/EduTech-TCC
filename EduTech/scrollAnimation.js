ScrollReveal({ reset: true });
/* logo/nome */
var slideParaDireita = {
    distance: '150%',
    origin: 'left',
    opacity: null
};
var slideParaEsquerda = {
    distance: '150%',
    origin: 'right',
    opacity: null
};


ScrollReveal().reveal('.logo', { delay: 500, reset: false });
ScrollReveal().reveal('.jornada-texto', slideParaDireita, {delay: 1000});



/* ondas do header */
ScrollReveal().reveal('#divider_id',{delay:250});

ScrollReveal().reveal('.txt',slideParaEsquerda, { delay:1000, reset: true });
ScrollReveal().reveal('#ensino',slideParaEsquerda, { delay:500, reset: true });
ScrollReveal().reveal('#liceu1',slideParaDireita , { delay:500, reset: true });

ScrollReveal().reveal('.caixa',slideParaDireita ,{delay:1000});

ScrollReveal().reveal('#meufooter',{delay:500, reset: false});
