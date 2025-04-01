let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');  

function quadrado(x,y,largura,altura,cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,largura,altura);
    ctx.closePath();
}

function circulo(x,y,r,inico,fim,cor1,cor2){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = cor1;
    ctx.strokeStyle = cor2;
    ctx.arc(x,y,r,inicio,fim);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function arco(x,y,r,inico,fim,cor){
    
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = cor;
    ctx.arc(x,y,r,inicio,fim);
    ctx.stroke();
    ctx.closePath();
}

function linhas(x1,y1,x2,y2,cor){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = cor;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

quadrado(0,0,50,50,'blue')
quadrado(250,0,50,50,'red')
quadrado(0,125,25,25,'lightskyblue')
quadrado(0,150,25,25,'lightskyblue')
quadrado(287.5,137.5,500,12.5,'lightskyblue')
quadrado(287.5,150,12.5,12.5,'lightskyblue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')
quadrado(0,0,50,50,'blue')

linhas(0,150,300,150,'green')