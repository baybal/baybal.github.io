//require('viewport-units-buggyfill').init()
import Pixelation from 'modules/pixelation.js'

let h = window.getComputedStyle(document.querySelector('.h-sign')).getPropertyValue('height')

document.querySelector('.h-sign').style.height = h

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
