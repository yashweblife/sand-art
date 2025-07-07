import { c, canvas, Grid, mouse } from "./lib";

let timer = 0;
let w = canvas.width / 40;
const grid = new Grid();

canvas.addEventListener("mousedown", (e) => {
  mouse.down = true;
});
canvas.addEventListener("mouseup", (e) => {
  mouse.down = false;
});
canvas.addEventListener("mousemove", (e) => {
  if (mouse.down) {
    const x = Math.floor(e.x / w);
    const y = Math.floor(e.y / w);
    grid.set(x, y, 5);
  }
});

function animate() {
  grid.update();
  c.fillStyle = "rgba(0,0,0,0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  for (let i = 0; i < grid.res; i++) {
    for (let j = 0; j < grid.res; j++) {
      const val = grid.arr[i][j];
      let r = val > 0 ? 255 : 0;
      let g = Math.floor(Math.abs(val) * 255);
      let b = val <= 0 ? 255 : 0;
      c.fillStyle = `rgba(${r},${g},${b},${Math.abs(val)})`;
      c.fillRect(i * w, j * w, 10, 10);
    }
  }

  timer += 0.05;
  grid.arr[30][20] = 5 * Math.sin(timer);
  grid.arr[10][20] = 5 * Math.cos(timer);
  c.closePath();
  requestAnimationFrame(animate);
}
animate();
