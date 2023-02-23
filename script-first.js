

var s = 1784

var nome = window.prompt(`Me deixe saber se você não é um robô! Digite abaixo o códiogo: ${s} `)

if (nome == `${s}`) {


    window.alert(`Você não é um robô!\nClique em "Ok" para prosseguir.`)

} else {

    window.alert(`Você provavelmente é um robô! \nTente novamente!`)

    location.reload()

}




var nome2 = window.prompt(`Como eu posso lhe chamar?`)
var idade = window.prompt(`qual é a sua idade?`)
var know = window.confirm('Ok, agora para finalizar clique em "Ok".\n Caso preferir digitar seu nome ou idade novamente, clique em "Cancelar".')
if (know == true) {
    window.alert(`Olá ${nome2}, espero que nesses ${idade} anos de idade você já tenha conquistado muita coisa!\n
    Seja bem-vindo(a) ao meu currículo :)\n \nPara facilitar o contato comigo, estou disponibilizando meu e-mail e whatsapp neste currículo, é só clicar no ícone do telefone ou e-mail e será redirecionado automaticamente.`)
} else {
    location.reload()
}




document.getElementById('chkid').addEventListener('click', function () {

    if (this.checked) {

        window.location.href = 'pag-inic.html'
    }
});
