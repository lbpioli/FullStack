// Aguardar a página carregar antes de começar o jogo
window.onload = () => {
  // Pegamos o canvas e o contexto de desenho
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // Criamos o objeto da imagem do jogador
  const jogadorImg = new Image();
  jogadorImg.src = "img/jogador.jpg"; // caminho para sua imagem

  // Quando a imagem carregar, desenhar na tela
  jogadorImg.onload = () => {
    ctx.drawImage(jogadorImg, 370, 500, 60, 60); // x, y, largura, altura
  };
};