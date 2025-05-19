window.onload = () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const tiros = [];
  const inimigos = [];

  let jogadorX = 370;
  let jogadorY = 500;
  let vidas = 3;
  let pontos = 0;

  let jogoIniciado = false;
  let intervaloCena;
  let intervaloInimigos;

  const jogadorImg = new Image();
  jogadorImg.src = "img/Ship_5.png";

  document.getElementById("startButton").addEventListener("click", () => {
    if (!jogoIniciado) {
      jogoIniciado = true;

      intervaloCena = setInterval(desenharCena, 1000 / 60);
      intervaloInimigos = setInterval(criarInimigo, 2000);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!jogoIniciado) return;

    const tecla = event.key;

    if (tecla === "ArrowLeft" || tecla === "a") {
      jogadorX -= 20;
    }
    if (tecla === "ArrowRight" || tecla === "d") {
      jogadorX += 20;
    }
    if (tecla === "ArrowUp" || tecla === "w") {
      jogadorY -= 20;
    }
    if (tecla === "ArrowDown" || tecla === "s") {
      jogadorY += 20;
    }
  });

  canvas.addEventListener("click", (event) => {
    if (!jogoIniciado) return;

    const rect = canvas.getBoundingClientRect();
    const destinoX = event.clientX - rect.left;
    const destinoY = event.clientY - rect.top;

    tiros.push({
      x: jogadorX + 30,
      y: jogadorY,
      destinoX: destinoX,
      destinoY: destinoY
    });
  });

  function criarInimigo() {
    const x = Math.random() * (canvas.width - 50);
    const y = -50;
    const velocidade = 2 + Math.random() * 3;

    inimigos.push({ x, y, velocidade, largura: 50, altura: 50 });
  }

  function desenharCena() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Vidas: " + vidas, 10, 30);
    ctx.fillText("Pontos: " + pontos, 10, 60);

    ctx.drawImage(jogadorImg, jogadorX, jogadorY, 60, 60);

    inimigos.forEach((inimigo, index) => {
      inimigo.y += inimigo.velocidade;

      ctx.fillStyle = "green";
      ctx.fillRect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);

      if (colidiuComJogador(inimigo)) {
        inimigos.splice(index, 1);
        vidas--;

        if (vidas <= 0) {
          alert("Game Over!");
          clearInterval(intervaloCena);
          clearInterval(intervaloInimigos);
          location.reload();
        }
      }

      if (inimigo.y > canvas.height) {
        inimigos.splice(index, 1);
      }
    });

    tiros.forEach((tiro, tIndex) => {
      inimigos.forEach((inimigo, iIndex) => {
        if (colidiu(tiro, inimigo)) {
          tiros.splice(tIndex, 1);
          inimigos.splice(iIndex, 1);
          pontos += 10;
        }
      });
    });

    tiros.forEach((tiro, index) => {
      tiro.y -= 10;

      ctx.fillStyle = "red";
      ctx.fillRect(tiro.x, tiro.y, 5, 10);

      if (tiro.y < 0) {
        tiros.splice(index, 1);
      }
    });
  }

  function colidiu(a, b) {
    return (
      a.x < b.x + b.largura &&
      a.x + 5 > b.x &&
      a.y < b.y + b.altura &&
      a.y + 10 > b.y
    );
  }

  function colidiuComJogador(inimigo) {
    return (
      inimigo.x < jogadorX + 60 &&
      inimigo.x + inimigo.largura > jogadorX &&
      inimigo.y < jogadorY + 60 &&
      inimigo.y + inimigo.altura > jogadorY
    );
  }
};