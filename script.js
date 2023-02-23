




function modoRGB() {


    const rgb = document.querySelectorAll(".rgb");


    //aqui eu precisei colocar esse for para entender que preciso mudar TODOS as classes
    for (var i = 0; i < rgb.length; i++)

        rgb[i].classList.toggle('rgb2');




    const fundo = document.querySelectorAll(".normal");
    //aqui eu precisei colocar esse for para entender que preciso mudar TODOS as classes
    for (var o = 0; o < fundo.length; o++)

        fundo[o].classList.toggle('noturnomode');


    //aqui eu coloquei um before e um after para o botao escrever ativar e desativar
    const botao = document.querySelector(".botao");
    botao.classList.toggle('botao2');


    const exp = document.querySelectorAll('.fundo');
    for (var u = 0; u < exp.length; u++)
        exp[u].classList.toggle('fundo2');



    //aqui tava testando esse codigo, mas nao encaixou entao está inutil.
    const news = document.querySelector('#new');
    news.innerHTML = `modo noturno!`;











}

