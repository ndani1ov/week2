function drawPyramid() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const height = parseInt(document.getElementById("height").value);
    const width = height * 2 - 1;

    canvas.width = width * 20;
    canvas.height = height * 20;

    context.clearRect(0, 0, canvas.width, canvas.height);

    let startX = canvas.width / 2 - width * 10;
    let startY = canvas.height - 20;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (j >= i && j < width - i) {
                context.fillRect(startX + j * 20, startY - i * 20, 20, 20);
            }
        }
    }
}