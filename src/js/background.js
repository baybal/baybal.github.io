import Vue from 'vue'
import Creature from 'modules/creature'

let creatures = [
  new Creature({
    blocks: [
      { pos: [1, 1], color: 'blue' },
      { pos: [1, 2], color: 'blue' },
      { pos: [1, 3], color: 'blue' }
    ],
    colors: ['blue'],
    //speed: 1000,
    size: 1
  }),
  // new Creature({
  //   blocks: [
  //     { pos: [45, 0], color: 'lime' },
  //     { pos: [44, 0], color: 'lime' }
  //   ],
  //   colors: ['lime']
  // })
];

new Vue({
  el: '#play-ground',
  data: {
    creatures
  },
  computed: {
    blocks: function() {
      return Array.prototype.concat.apply([], this.creatures.map((c) => c.blocks))
    },
    extremes: function() {
      return this.blocks
        .filter((c) => {
          return c.neighbours.length == 1
        })
        .map((c) => {
          let size = window.innerWidth / 50,
              points = [
                { x: c.pos.x * size, y: c.pos.y * size },
                { x: c.pos.x * size + size, y: c.pos.y * size },
                { x: c.pos.x * size + size, y: c.pos.y * size + size },
                { x: c.pos.x * size, y: c.pos.y * size + size }
              ];

          return {
            color: 'grey',
            stroke: 'yellow',
            points: points.map((point) => {
              return point.x + ',' + point.y
            }).join(' ')
          }
        })
    },
    possibles: function() {
      let cells = this.creatures[0].possibleCells;
      return cells.map((c) => {
        let size = window.innerWidth / 50,
            points = [
              { x: c[0] * size, y: c[1] * size },
              { x: c[0] * size + size, y: c[1] * size },
              { x: c[0] * size + size, y: c[1] * size + size },
              { x: c[0] * size, y: c[1] * size + size }
            ];

        return {
          color: 'transparent',
          stroke: 'red',
          points: points.map((point) => {
            return point.x + ',' + point.y
          }).join(' ')
        }
      })
    }
  },
  render: function(h) {

    // for (let i = 0; i < this.blocks.length; i++ ) {
    //   if (this.blocks[i].neighbours.length == 1) {
    //     this.blocks[i].color = 'gray';
    //   } else {
    //     this.blocks[i].color = this.blocks[i].ownColor;
    //   }
    // }

    return h(
      'svg', {
        attrs: {
          width: '100%',
          height: '100%'
        }
      }, [
        ...[...this.blocks, ...this.possibles, ...this.extremes].map((b) => {
          return h(
            'polygon', {
              attrs: {
                points: b.points,
                fill: b.color,
                stroke: b.stroke
              }
            }
          )
        })
    ])
  }
})
