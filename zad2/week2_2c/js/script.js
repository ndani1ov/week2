const drawPyramid = () => {
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
      drawLayer(i, width, startX, startY, context);
    }
  }
  
  const drawLayer = (layerIndex, width, startX, startY, context) => {
    for (let j = 0; j < width; j++) {
      if (j >= layerIndex && j < width - layerIndex) {
        drawBlock(j, layerIndex, startX, startY, context);
      }
    }
  }
  
  const drawBlock = (blockIndex, layerIndex, startX, startY, context) => {
    context.fillStyle = 'red';
    context.strokeStyle = 'white';
    context.lineWidth = 7;
    context.fillRect(startX + blockIndex * 20, startY - layerIndex * 20, 20, 20);
    context.strokeRect(startX + blockIndex * 20, startY - layerIndex * 20, 20, 20);
  }