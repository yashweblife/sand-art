import Grid from "./Grid";
const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
canvas.height = 700;
canvas.width = 700;
const c = canvas.getContext("2d") as CanvasRenderingContext2D;
const mouse = {
  down: false,
};
export { c, canvas, Grid, mouse };

