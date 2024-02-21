const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
canvas.height = 500;
canvas.width = 500;
const c = canvas.getContext("2d") as CanvasRenderingContext2D;
class Grid {
  public arr: number[][] = [];
  res = 40;
  constructor() {
    this.arr = this.createArr();
  }
  /**
   * Helper function to initialize a new 2D array
   * @returns
   */
  createArr() {
    const arr = new Array(this.res)
      .fill(null)
      .map(() => new Array(this.res).fill(0));
    return arr;
  }
  /**
   * Get the value at a given position
   * @param x
   * @param y
   * @returns
   */
  at(x: number = 0, y: number = 0) {
    return this.arr[x][y];
  }
  /**
   * Set the value at a given position
   * @param x
   * @param y
   * @param val
   */
  set(x: number = 0, y: number = 0, val: number = 0) {
    if (x >= 0 && x < this.arr.length && y >= 0 && y < this.arr[0].length) {
      this.arr[x][y] = val;
    }
  }
  /**
   * Update the old array with new calculations.
   */
  update() {
    const newArr = this.createArr();
    for (let i = 0; i < this.res; i++) {
      for (let j = 0; j < this.res; j++) {
        let val = this.arr[i][j] / 9;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const i_ = i + x;
            const j_ = j + y;
            if (i_ >= 0 && j_ >= 0 && i_ < this.res && j_ < this.res) {
              newArr[i_][j_] += val;
              if (newArr[i_][j_] > 1) {
                newArr[i_][j_] = 1;
              }
              if (newArr[i_][j_] < -1) {
                newArr[i_][j_] - 1;
              }
            }
          }
        }
      }
    }
    this.arr = newArr;
  }
}

let timer = 0;
let w = canvas.width / 40;
const grid = new Grid();
const mouse = {
  down: false,
};
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
