export default class Grid {
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