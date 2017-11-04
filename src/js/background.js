import Vue from 'vue'
import Creature from 'modules/creature'

let creatures = [
  new Creature({
    blocks: [
      { pos: [41, 0], color: '#d0cfcc' },
      { pos: [43, 0], color: '#d0cfcc' },
      { pos: [42, 0], color: '#d0cfcc' },
      { pos: [43, 1], color: '#d0cfcc' },
      { pos: [42, 1], color: '#d0cfcc' },
      { pos: [43, 2], color: '#d0cfcc' },
      { pos: [42, 2], color: '#d0cfcc' },
      { pos: [42, 3], color: '#d0cfcc' },
      { pos: [43, 3], color: '#ffbf27' },
      { pos: [41, 4], color: '#d0cfcc' },
      { pos: [42, 4], color: '#d0cfcc' },
      { pos: [43, 4], color: '#ffbf27' },
      { pos: [41, 5], color: '#d0cfcc' },
      { pos: [42, 5], color: '#d0cfcc' },
      { pos: [43, 5], color: '#d0cfcc' },
      { pos: [44, 5], color: '#d0cfcc' },
      { pos: [42, 6], color: '#f83c10' },
      { pos: [43, 6], color: '#d0cfcc' },
      { pos: [44, 6], color: '#d0cfcc' },
      { pos: [42, 7], color: '#f83c10' },
      { pos: [43, 7], color: '#d0cfcc' },
      { pos: [43, 8], color: '#ffbf27' },
      { pos: [43, 9], color: '#ffbf27' },
      { pos: [42, 10], color: '#f83c10' },
      { pos: [43, 10], color: '#f83c10' },
      { pos: [42, 11], color: '#f83c10' },
      { pos: [43, 11], color: '#f83c10' },
      { pos: [42, 12], color: '#d0cfcc' },
      { pos: [43, 12], color: '#d0cfcc' },
      { pos: [40, 13], color: '#d0cfcc' },
      { pos: [41, 13], color: '#d0cfcc' },
      { pos: [42, 13], color: '#d0cfcc' },
      { pos: [43, 13], color: '#d0cfcc' },
      { pos: [44, 13], color: '#d0cfcc' },
      { pos: [40, 14], color: '#d0cfcc' },
      { pos: [41, 14], color: '#d0cfcc' },
      { pos: [42, 14], color: '#d0cfcc' },
      { pos: [43, 14], color: '#d0cfcc' },
      { pos: [44, 14], color: '#d0cfcc' },
      { pos: [41, 15], color: '#d0cfcc' },
      { pos: [42, 15], color: '#d0cfcc' },
      { pos: [43, 15], color: '#d0cfcc' },
      { pos: [41, 16], color: '#d0cfcc' },
      { pos: [42, 16], color: '#d0cfcc' },
      { pos: [43, 16], color: '#d0cfcc' },
      { pos: [41, 17], color: '#ffbf27' },
      { pos: [42, 17], color: '#d0cfcc' },
      { pos: [43, 17], color: '#d0cfcc' },
      { pos: [41, 18], color: '#ffbf27' },
      { pos: [42, 18], color: '#d0cfcc' },
      { pos: [43, 18], color: '#f83c10' },
      { pos: [42, 19], color: '#d0cfcc' },
      { pos: [43, 19], color: '#f83c10' },
      { pos: [42, 20], color: '#d0cfcc' },
      { pos: [42, 21], color: '#d0cfcc' },
    ],
    colors: ['#d0cfcc', '#d0cfcc', '#d0cfcc', '#f83c10', '#ffbf27'],
    speed: window.speed
  }),
  // new Creature({
  //   blocks: [
  //     { pos: [5, 5], color: 'blue' },
  //     { pos: [6, 5], color: 'blue' },
  //     { pos: [7, 5], color: 'blue' },
  //     { pos: [6, 6], color: 'blue' },
  //     { pos: [5, 7], color: 'blue' },
  //     { pos: [6, 7], color: 'blue' },
  //     { pos: [7, 7], color: 'blue' }
  //   ],
  //   colors: ['blue'],
  //   speed: 500
  // })
];

let debug = false;

new Vue({
  el: '#play-ground',
  data: {
    creatures,
    //viewport
  },
  computed: {
    blocks: function() {
      return Array.prototype.concat.apply([], this.creatures.map((c) => c.blocks))
    },
    edgeBlocks: function() {
      return !debug ? [] : this.creatures[0].edgeBlocks
        .map((c) => {
          return {
            id: Date.now(),
            color: 'yellow',
            stroke: 'yellow',
            points: c.points
          }
        })
    },
    nextSteps: function() {
      let cells = this.creatures[0].nextSteps;
      return !debug ? [] : cells
        .map((c) => {
          let size = Math.ceil(window.innerWidth / 50),
              points = [
                { x: c[0] * size, y: c[1] * size },
                { x: c[0] * size + size, y: c[1] * size },
                { x: c[0] * size + size, y: c[1] * size + size },
                { x: c[0] * size, y: c[1] * size + size }
              ];

          return {
            id: Date.now(),
            color: 'transparent',
            stroke: 'red',
            points: points.map((point) => {
              return point.x + ',' + point.y
            }).join(' ')
          }
        })
    },
    grid: function() {
      let blocks = this.creatures[0].blocks,
          grid = this.creatures[0].grid,
          cells = [],
          size = Math.ceil(window.innerWidth / 50);
      if (debug && false) {
        for (var i = 0; i < grid.width; i++) {
          for (var j = 0; j < grid.height; j++) {
            cells.push({
              x: (i * size) + ((size - 8) / 2),
              y: (j * size) + ((size - 14)),
              value: Number(grid.matrix[i][j]) || 0,
              id: Date.now()
            })
          }
        }
      }

      return cells;
    }
  },
  render: function(h) {
    return h(
      'svg', {
        attrs: {
          // width: '100%',
          // height: '100%',
          viewBox: `0 0 ${window.innerWidth} ${window.innerHeight}`
        }
      }, [
        ...[].concat(this.blocks, this.nextSteps, this.edgeBlocks).map((b) => {
          return h(
            'polygon', {
              attrs: {
                points: b.points,
                fill: b.color,
                stroke: b.stroke
              },
              key: 'id'
            }
          )
        }),
        ...this.grid.map((g) => {
          return h(
            'text', {
              attrs: {
                x: g.x,
                y: g.y
              },
              key: 'id'
            }, [ g.value ]
          )
        })
    ])
  }
})
