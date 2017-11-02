import Pixelation from 'modules/pixelation.js'

let logoPixelation = new Pixelation({
  el: '#hoodies-pixels',
  config: {
    picture: {
      srcset: 'dist/media/pixels.png'
    },
    steps: 11,
    rows: 11
  }
})
