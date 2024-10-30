function alterarImagem() {
    const imagem = document.getElementById("imagem");
    // Alterar para uma nova imagem aleatória
    imagem.src = "https://placekitten.com/200/201";
}

function alterarTitulo() {
    const titulo = document.getElementById("titulo");
    // Alterar o texto do título
    titulo.innerText = "Título Alterado!";
}

function alterarCorParagrafo() {
    const paragrafo = document.getElementById("paragrafo");
    // Alterar a cor do parágrafo para azul
    paragrafo.style.color = paragrafo.style.color === "blue" ? "black" : "blue";
}

function tocarAudio() {
    // Criar um novo elemento de áudio e tocar um som
    const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.play();
}

function toggleButtons() {
    // Alternar a classe dos botões
    const buttons = document.querySelectorAll(".toggle-btn");
    buttons.forEach(button => {
        button.classList.toggle("toggle-class");
    });
}
