window.onload = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Criação da imagem
    const img = new Image();
    img.src = '1.jpeg'; 
    const imgWidth = 50; 
    const imgHeight = 50; 

    img.onload = () => {
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
    };

    canvas.addEventListener('mousemove', (event) => {
        const mouseX = event.offsetX - imgWidth / 2;
        const mouseY = event.offsetY - imgHeight / 2;

        const x = Math.max(0, Math.min(mouseX, canvas.width - imgWidth));
        const y = Math.max(0, Math.min(mouseY, canvas.height - imgHeight));

        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(img, x, y, imgWidth, imgHeight);
    });
};