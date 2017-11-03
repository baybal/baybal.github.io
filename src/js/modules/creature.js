import {
  extend,
  isObject,
  isNumber,
  getRandomArrayIndex
} from 'modules/utils.js'

export default class Creature {
  constructor(options = {}) {
    let defaults = {
      colors: ['lime'],
      blocks: [],
      maxMass: 5,
      maxPossibles: 3
    }

    this.options =  extend(defaults, options)

    this.cell = Math.ceil(window.innerWidth / 50);

    this.grid = new Grid(50, Math.ceil(window.innerHeight / this.cell))

    this.extremes = []
    this.possibleCells = []
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

      setTimeout(() => { requestAnimationFrame(this.loop.bind(this)) }, 2000)
    }

    // this.blocks.map((block) => {
    //   console.log(block, block.getBorderingCells().map((c) => {
    //     return {
    //       pos: c,
    //       value: this.grid.getCell(c)
    //     }
    //   }))
    // })
  }

  loop () {
    if (this.blocks.length > 2 && this.extremeBlocks().length) {
      this.removeBlock(this.extremeBlocks().shift())
    }

    this.generateBlock()
    //console.log(this.extremeBlocks())
    setTimeout(() => {
      requestAnimationFrame(this.loop.bind(this))
    }, this.options.speed)
  }

  createBlock(pos, color) {
    let block = new Block(this, pos, color, this.cell);
    console.log('create block', pos)
    this.blocks.push(block)
    this.grid.setCell(pos, 1)
    this.removePossibleCell(pos)
    this.addPossibleCells(block)

    this.extremes = this.blocks.filter((b) => {
      let bordering = b.getBorderingCells();
      return bordering.filter((a) => {
        return this.grid.getCell(a) === 1
      }).length
    })

    return block;
  }

  addPossibleCells(block) {
    let borderingCells = block.getBorderingCells();

    while(this.possibleCells.length < this.options.maxPossibles && borderingCells.length > 0) {
      let [cell] = borderingCells.splice( getRandomArrayIndex(borderingCells), 1);

      if (cell[0] >= 0 && cell[0] < this.grid.width && cell[1] >= 0 && cell[1] < this.grid.height && this.grid.isEmptyCell(cell)) {
        this.possibleCells.push(cell)
        console.log('add possible', cell)
        this.grid.setCell(cell, -1)
      }
    }
  }

  generateBlock() {
    if (this.possibleCells.length) {
      let i = getRandomArrayIndex(this.possibleCells),
          [ pos ] = this.possibleCells.splice(i, 1);

      this.createBlock(pos, this.options.colors[getRandomArrayIndex(this.options.colors)], this.cell);
    } else {
      //this.addPossibleCells(this.blocks[0])
    }
  }

  removeBlock(block) {
    let index = this.blocks.indexOf(block);

    if (index >= 0) {
      let bordering = block.getBorderingCells(true);

      bordering.map((b) => {
        this.removePossibleCell(b)
      })

      this.blocks.splice( index, 1 )
      block.remove()
    }
  }

  removePossibleCell(cell) {
    let item = this.possibleCells.find((i) => i[0] == cell[0] && i[1] == cell[1]),
        index = this.possibleCells.indexOf(item);

    if (index >= 0) {
      this.possibleCells.splice( index, 1 )
      console.log('remove possible', cell)
      this.grid.setCell(cell, undefined);
    }
  }

  extremeBlocks() {
    return this.blocks.filter((block) => {
      return block.neighbours.length == 1;
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
      console.log('invalid cell', cell)
      return;
    }

    let [x, y] = cell;
    this.matrix[x][y] = value;
    console.log('set grid', cell, value, this.matrix[x][y])
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
