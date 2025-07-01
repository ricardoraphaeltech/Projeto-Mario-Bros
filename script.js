/* Lógica de Programação
    [X] Saber quando o botão foi clicado
    [X] Mostrar o formulário de contato
    [X] Tornar a mascara visível
    [X] Quando clicar na mascara, ocultar o formulário
    [X] Ocultar a mascara
*/

// Pegar o elemento no HTML pelo seletor
const linkFaleConosco = document.querySelector('.link-fale-conosco')
const formularioFaleConosco = document.querySelector('.formulario-fale-conosco')
const mascaraFormulario = document.querySelector('.mascara-formulario')

// Adiciona um evento de clique no link
linkFaleConosco.addEventListener('click', function(){
    formularioFaleConosco.style.left = "50%"
    mascaraFormulario.style.visibility = "visible"
})

// Adiciona um evento de clique na mascara do formulário
mascaraFormulario.addEventListener('click', function(){
    formularioFaleConosco.style.left = "-115px"
    mascaraFormulario.style.visibility = "hidden"
})

/* Lógica de Programação
    [X] Saber quando o botão foi clicado
    [X] Mostrar o formulário de contato
    [X] Tornar a mascara visível
    [X] Quando clicar na mascara, ocultar o formulário
    [X] Ocultar a mascara
*/

// Pegar o elemento no HTML pelo Id
const botaoContato = document.getElementById('botao-contato')

// Adiciona um evento de clique no botão entre em contato
botaoContato.addEventListener('click', function(){
    formularioFaleConosco.style.left = "50%"
    mascaraFormulario.style.visibility = "visible"
})

// Evento para validar o envio dos dados
const nome = document.getElementById('nome')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const duvida = document.getElementById('duvida')

function validarNome(){
    if(nome.value.trim() === "") {
        alert("Por favor, preencha seu nome!");
        return false; // impede o envio do formulário
    } 
    
    return true; // permite o envio do formulário
}

function validarTelefone(){
    if(telefone.value.trim() === "") {
        alert("Por favor, preencha seu telefone!");
        return false;
    }

    return true;
}

function validarEmail(){
    if(email.value.trim() === "") {
        alert("Por favor, preencha seu e-mail!");
        return false;
    }

    return true;
}

function validarDuvida(){
    if(duvida.value.trim() === "") {
        alert("Por favor, especifique o problema ocorrido!");
        return false;
    }

    return true;
}