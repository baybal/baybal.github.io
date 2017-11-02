import PlayGround from 'modules/playground.js'

let ground = new PlayGround({
  el: '#play-ground'
});

ground.addCreature({
  start: [ 5, 18 ],
  colors: ['lime', 'blue', 'blue', 'blue', 'blue'],
  speed: 500,
})
ground.addCreature({
  start: [ 55, 0 ],
  colors: ['red', 'yellow', 'red', 'red', 'red'],
  speed: 300,
  grid: [60, 60],
  size: 1
})
