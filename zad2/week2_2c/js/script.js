function drawPyramid() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var height = parseInt(document.getElementById("height").value);
    var width = height * 2 - 1;

    canvas.width = width * 20;
    canvas.height = height * 20;

    context.clearRect(0, 0, canvas.width, canvas.height);

    var startX = canvas.width / 2 - (width - 1) * 10;
    var startY = canvas.height - 20;

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (j >= i && j < width - i) {
                context.fillRect(startX + j * 20, startY - i * 20, 20, 20);
            }
        }
    }
}