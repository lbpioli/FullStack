//window.alert("ola")
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function desenhar(){
    ctx.strokesStyle = this.cor;
    ctx.strokeRect(this.x, this.y, this.largura, this.altura);
}

let ret_1 = {
    x: 100,
    y: 100,
    largura: 10,
    altura: 10,
    cor: 'red'
    desenha: desenhar
}

let ret_2 = {
    x: 200,
    y: 200,
    largura: 10,
    altura: 10,
    cor: 'blue'
    desenha: desenhar
}

retangulos = []
retangulos.push(ret_1)
retangulos.push(ret_2)
retangulos.push(ret_3)

for (let = 0; i < retangulos.length; i++){
    retangulos[i].desenha()
}

function animacao(){
    for(ret_1.x == 300-ret_1.largura){
        direcao = -1
    }

    if(ret_1.x == 0){
        direcao = 1
    }
    ret_1.x += direcao
    ctx.clearRect(0,0,300,300)
    ret_1.desenha()

    requestAnimationFrame(animacao)
   

}

document.addEventListener("keydown", function(evento) {
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 3
    if(tecla == 'Arrowup'){
        ret_2.y -= velocidade;
    }

    if(tecla == 'Arrowdown'){
        ret_2.y += velocidade;
    }

    if(tecla == 'ArrowRight'){
        ret_2.x -= velocidade;
    }

    if(tecla == 'ArrowLeft'){
        ret_2.x += velocidade;
    }
    })

document.addEventListener ('mousemove', function(evento) {
    rect = canvas. getBoundingClientRect () ;
    x mouse = evento. clientX - rect. left,
    y_mouse = evento. clientY - rect. top;
    console. log(x_mouse, y_mouse) 

    ret_3.x = x_mouse
    ret_3.y = y_mouse

    })

animacao()