let numeroSecreto = Math.floor(Math.random() * 100);

function verificarPalpite() {
    let palpite = parseInt(document.getElementById("palpite").value);
    let mensagem = document.getElementById("mensagem");

    if (isNaN(palpite) || palpite < 0 || palpite > 99) {
        mensagem.innerText = "Digite um número entre 0 e 99!";
        mensagem.style.color = "red";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.innerText = "Parabéns! Você acertou!";
        mensagem.style.color = "green";
        document.body.style.setProperty("background-color", "lightgreen");
    } else if (palpite < numeroSecreto) {
        mensagem.innerText = "Tente um número maior!";
        mensagem.style.color = "blue";
        document.body.style.setProperty("background-color", "red");
    } else {
        mensagem.innerText = "Tente um número menor!";
        mensagem.style.color = "blue";
        document.body.style.setProperty("background-color", "red");
    }
}