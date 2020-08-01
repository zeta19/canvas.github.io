window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // var canvasOffset = canvas.offset();
  // var offsetX = canvasOffset.left;
  // var offsetY = canvasOffset.top;

  let isDrawing = false;
  let startX;
  let startY;

  //Event Listeners
  canvas.addEventListener("mousedown", (e) => {
    mouseX = parseInt(e.clientX);
    mouseY = parseInt(e.clientY);

    if (isDrawing) {
      isDrawing = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.setLineDash([0]);
      ctx.strokeRect(startX, startY, mouseX - startX, mouseY - startY);
      ctx.fill();
      ctx.closePath();
      canvas.style.cursor = "default";
    } else {
      ctx.lineWidth = 3;
      isDrawing = true;
      startX = mouseX;
      startY = mouseY;
      canvas.style.cursor = "crosshair";
    }
  });

  canvas.addEventListener("mousemove", (e) => {
    mouseX = parseInt(e.clientX);
    mouseY = parseInt(e.clientY);

    if (isDrawing) {
      // prevMouseX = mouseX;
      // prevMouseY = mouseY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setLineDash([6]);

      //Reactangle
      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.strokeRect(startX, startY, mouseX - startX, mouseY - startY);
      ctx.closePath();

      //Axis
      ctx.strokeStyle = "#ff0000";
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      ctx.lineTo(startX, startY);
      ctx.stroke();
      ctx.moveTo(0, startY);
      ctx.lineTo(startX, startY);
      ctx.stroke();
      ctx.closePath();
      //ctx.fill();
    }
  });

  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
});
