import { c, canvas, Grid, mouse } from "./lib";
import "./style.css";

let timer = 0;
const grid = new Grid();
let w = canvas.width / grid.res;

canvas.addEventListener("mousedown", () => {
  mouse.down = true;
});
canvas.addEventListener("mouseup", () => {
  mouse.down = false;
});
canvas.addEventListener("mousemove", (e) => {
  if (mouse.down) {
    const x = Math.floor(e.offsetX / w);
    const y = Math.floor(e.offsetY / w);
    grid.set(x, y, 5);
  }
});

function animate() {
  grid.update();
  c.fillStyle = "rgba(0,0,0,0.08)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  for (let i = 0; i < grid.res; i++) {
    for (let j = 0; j < grid.res; j++) {
      const val = grid.arr[i][j];
      let r = val > 0 ? 255 : 0;
      let g = Math.floor(Math.abs(val) * 255);
      let b = val <= 0 ? 255 : 0;
      let size = 10*val+5;
      c.fillStyle = `rgba(${r},${g},${b},${Math.abs(val)})`;
      c.fillRect(i * w - size/2, j * w - size/2, size, size);
    }
  }

  timer += 0.05;
  grid.arr[19][20] = 5 * Math.cos(timer);
  grid.arr[21][20] = -5 * Math.cos(timer);
  c.closePath();
  requestAnimationFrame(animate);
}
animate();
