import {
  extend,
  isObject,
  isNumber,
  getRandomArrayIndex
} from 'modules/utils.js'

export default class PlayGround {
  constructor(options = {}) {
    let defaults = {}

    this.options = extend(defaults, options);

    if (!this.options.el || !(this.parent = document.querySelector(this.options.el))) {
      throw new Error('Playground: Parent element (options.el) is not found.')
    }

    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    this.svg.setAttribute('width', '100%')
    this.svg.setAttribute('height', '100%')
    //this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`)
    this.parent.append(this.svg)

    this.creatures = []
  }

  get width() {
    return this.svg.getBoundingClientRect().width
  }

  get height() {
    return this.svg.getBoundingClientRect().height
  }

  addCreature(options) {
    this.creatures.push(new Creature(this, options))
  }
}


class Creature {
  constructor(ground, options = {}) {
    let defaults = {
      colors: ['lime'],
      start: [0, 0],
      speed: 1000,
      grid: [40, 40],
      size: 1
    }
    this.ground = ground
    this.svg = this.ground.svg

    this.options =  extend(defaults, options)

    this.grid = this.createMatrix(this.options.grid[0], this.options.grid[1])

    this.blocks = []
    this.ambient = [ this.options.start ]

    this.loop(this.lastTime)
  }

  loop () {
    setInterval(() => { this.addBlock() }, this.options.speed)
  }

  addBlock() {
    let i =  getRandomArrayIndex(this.ambient),
        [coords] = this.ambient.splice(i, 1),
        block = new Block(this.svg, coords, this.options.colors[getRandomArrayIndex(this.options.colors)], this.ground.width / this.options.grid[0] * this.options.size),
        ambient = [
          [coords[0], coords[1] - 1],
          [coords[0] + 1, coords[1]],
          [coords[0], coords[1] + 1],
          [coords[0] - 1, coords[1]],

          // [coords[0] + 1, coords[1] - 1],
          // [coords[0] + 1, coords[1] + 1],
          // [coords[0] - 1, coords[1] + 1],
          // [coords[0] - 1, coords[1] - 1]
        ];

    this.blocks.push(block)
    this.setCell(coords, 1)

    while(this.ambient.length < 3 && ambient.length > 0) {
      let [cell] = ambient.splice( getRandomArrayIndex(ambient), 1);

      if (cell[0] >= 0 && cell[1] >= 0 && this.isEmptyCell(cell)) {
        this.ambient.push(cell)

        this.setCell(cell, -1)
      }
    }

    // ambient.map((cell) => {
    //   if (cell[0] >= 0 && cell[1] >= 0 && ground.isEmptyCell(cell)) {
    //     if (this.ambient.length < 4) {
    //       this.ambient.push(cell)
    //     }
    //     ground.setCell(cell, -1)
    //   }
    // })
  }


  isEmptyCell(cell) {
    let [x, y] = cell;
    return this.grid[x][y] !== 1 && this.grid[x][y] !== -1;
  }

  setCell(cell, value) {
    let [x, y] = cell;

    this.grid[x][y] = value;
  }

  createMatrix(width = 0, height = 0) {
    let matrix = new Array(width);

    for (let i = 0; i < matrix.length; i++ ) {
      matrix[i] = new Array(height);
    }

    return matrix;
  }

}

class Block {
  constructor(root, coords, color, size) {
    this.root = root
    this.size = size

    this.svg = new SvgPolygon(this.root, this.convertCoordsToPoints(coords))
    this.svg.setAttribute('class', 'creature-block')
    this.svg.setAttribute('fill', color)
    this.svg.setAttribute('stroke', color)
    this.root.insertBefore(this.svg.node, this.root.firstChild)
  }

  convertCoordsToPoints(coords) {
    let [x, y] = coords

    return [
      { x: x * this.size, y: y * this.size },
      { x: x * this.size + this.size, y: y * this.size },
      { x: x * this.size + this.size, y: y * this.size + this.size },
      { x: x * this.size, y: y * this.size + this.size }
    ]
  }
}

class SvgPolygon {
  constructor (root, coors = [], size) {
    this.root = root
    this.node = document.createElementNS('http://www.w3.org/2000/svg','polygon')
    this.points = this.node.points

    if (coors.length > 0) {
        let points = this.createPoints(coors)
        this.initialize(points[0])
        for (let i = 1; i < points.length; i++)
            this.appendPoint(points[i])
    }

  }

  createPoint (coor) {
      let point = this.root.createSVGPoint()
      point.x = coor.x
      point.y = coor.y
      return point
  }

  createPoints (coors) {
      let points = []
      for(let c of coors)
          points.push(this.createPoint(c))
      return points
  }

  setPoints(coors) {
    if (coors.length > 0) {
      let points = this.createPoints(coors)
      this.initialize(points[0])
      for (let i = 1; i < points.length; i++)
        this.appendPoint(points[i])
    }
  }

  initialize (point = createPoint({x:0, y:0})) { this.points.initialize(point) }

  appendPoint (point) { this.points.appendItem(point) }

  getPoint (i) { return this.points.getItem(i) }

  setAttribute (attr, val) { this.node.setAttribute(attr, val) }
}
