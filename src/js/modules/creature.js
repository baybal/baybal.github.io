import {
  extend,
  isObject,
  isNumber,
  getRandomArrayIndex
} from 'modules/utils.js'

export default class Creature {
  constructor(options = {}) {
    let defaults = {
      colors: ['blue'],
      blocks: [],
      maxBlocks: 60,
      maxNextSteps: 20
    }

    this.options =  extend(defaults, options)

    this.cell = Math.ceil(window.innerWidth / 50);

    this.grid = new Grid(50, Math.ceil(window.innerHeight / this.cell))

    this.nextSteps = []
    this.blocks = []

    options.blocks.map((b) => this.createBlock(b.pos, b.color))


    if (isNumber(options.speed)) {
      window.requestAnimationFrame = function() {
          return (
              window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              ((callback) => {
                window.setTimeout(callback, 1000 / 60);
              })
          );
      }()

      requestAnimationFrame(this.loop.bind(this))
    }
  }

  loop () {
    setTimeout(() => {
      requestAnimationFrame(this.loop.bind(this))
    }, this.options.speed)

    if (this.blocks.length > this.options.maxBlocks) {
      this.removeBlock(this.edgeBlocks.shift())
      return;
    }

    this.generateBlock()
  }

  createBlock(pos, color) {
    this.removeNextStep(pos)
    let block = new Block(this, pos, color, this.cell);

    this.blocks.push(block)
    this.grid.setCell(pos, 1)
    this.generateNextSteps(block)

    return block;
  }

  generateNextSteps(block) {
    let borderingCells = block.getBorderingCells();

    while(this.nextSteps.length < this.options.maxNextSteps && borderingCells.length > 0) {
      let [cell] = borderingCells.splice( getRandomArrayIndex(borderingCells), 1);

      if (cell[0] >= 0 && cell[0] < this.grid.width && cell[1] >= 0 && cell[1] < this.grid.height && this.grid.isEmptyCell(cell)) {
        this.nextSteps.push(cell)
        this.grid.setCell(cell, -1)
      }
    }
  }

  generateBlock() {
    if (this.nextSteps.length) {
      let i = getRandomArrayIndex(this.nextSteps),
          [ pos ] = this.nextSteps.splice(i, 1);

      this.createBlock(pos, this.options.colors[getRandomArrayIndex(this.options.colors)], this.cell);
    } else {
      this.generateNextSteps(this.blocks[getRandomArrayIndex(this.blocks)])
    }
  }

  removeBlock(block) {
    let index = this.blocks.indexOf(block);

    if (index >= 0) {
      let bordering = block.getBorderingCells(true);

      bordering.map((b) => {
        this.removeNextStep(b)
      })

      this.blocks.splice( index, 1 )
      block.remove()
    }
  }

  removeNextStep(cell) {
    let item = this.nextSteps.find((i) => i[0] == cell[0] && i[1] == cell[1]),
        index = this.nextSteps.indexOf(item);

    if (index >= 0) {
      this.nextSteps.splice( index, 1 )
      this.grid.setCell(cell, undefined);
    }
  }

  get edgeBlocks() {
    function isAdjacent(cells) {
      let [a, b, c] = cells;
      return (Math.abs(a[0] - b[0]) < 2) && (Math.abs(a[0] - c[0]) < 2) && (Math.abs(b[0] - c[0]) < 2) && (Math.abs(a[1] - b[1]) < 2) && (Math.abs(a[1] - c[1]) < 2) && (Math.abs(b[1] - c[1]) < 2);
    }

    return this.blocks.filter((block) => {
      return block.neighbours.length == 1 || (block.circle.length == 3 && isAdjacent(block.circle));
    })
  }
}

class Grid {
  constructor(width = 0, height = 0) {
    this.width = width;
    this.height = height;

    this.matrix = this.createMatrix(this.width, this.height);
  }

  isEmptyCell(cell) {
    let [x, y] = cell;
    return this.matrix[x][y] !== 1 && this.matrix[x][y] !== -1;
  }

  getCell(cell) {
    if (!this.isValidCell(cell))
      return null;

    let [x, y] = cell;
    return this.matrix[x][y];
  }

  setCell(cell, value) {
    if (!this.isValidCell(cell)) {
      return;
    }

    let [x, y] = cell;
    this.matrix[x][y] = value;
  }

  createMatrix(width, height) {
    let matrix = new Array(width);

    for (let i = 0; i < matrix.length; i++ ) {
      matrix[i] = new Array(height);
    }

    return matrix;
  }

  isValidCell(cell) {
    return cell instanceof Array &&
      (isNumber(cell[0]) && cell[0] >= 0 && cell[0] < this.width) &&
      (isNumber(cell[1]) && cell[1] >= 0 && cell[1] < this.height);
  }
}

class Block {
  constructor(creature, coords, color, size) {
    this.id = Date.now()
    this.creature = creature
    this.color = this.ownColor = color
    this.stroke = color
    this.pos = {
      x: coords[0],
      y: coords[1]
    }

    this.size = size
  }

  get points() {
    let points = [
          { x: this.pos.x * this.size, y: this.pos.y * this.size },
          { x: this.pos.x * this.size + this.size, y: this.pos.y * this.size },
          { x: this.pos.x * this.size + this.size, y: this.pos.y * this.size + this.size },
          { x: this.pos.x * this.size, y: this.pos.y * this.size + this.size }
        ];

    return points.map((point) => {
      return point.x + ',' + point.y
    }).join(' ')
  }

  get neighbours() {
    return this.getBorderingCells().filter((cell) => {
      return this.creature.grid.getCell(cell) == 1;
    })
  }

  get circle() {
    return this.getBorderingCells(true).filter((cell) => {
      return this.creature.grid.getCell(cell) == 1;
    })
  }

  getBorderingCells(diagonals = false) {
    let cells = [
      [this.pos.x, this.pos.y - 1],
      [this.pos.x + 1, this.pos.y],
      [this.pos.x, this.pos.y + 1],
      [this.pos.x - 1, this.pos.y]
    ];

    if (diagonals) {
      cells.push(
        [this.pos.x + 1, this.pos.y - 1],
        [this.pos.x + 1, this.pos.y + 1],
        [this.pos.x - 1, this.pos.y + 1],
        [this.pos.x - 1, this.pos.y - 1]
      )
    }

    return cells;
  }

  remove() {
    this.creature.grid.setCell([this.pos.x, this.pos.y], undefined)
  }
}
