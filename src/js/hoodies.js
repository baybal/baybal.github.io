import Pixelation from 'modules/pixelation.js'

class App {

  constructor() {
    this.options = {
      SIGN: {
        el: '.h-sign',
        throttle: 100
      },
      PIXELS: {
        el: '#hoodies-pixels',
        config: {
          picture: {
            srcset: 'dist/media/pixels.png'
          },
          steps: 11,
          rows: 11
        }
      }
    }
  }

  init() {
    if (this.is_iOS()) {
      this.updateSignStyle()
    }
    this.initPixels()
  }

  /**
   * Fixing content shaking on iOS during scroll
   * It's caused by '100% height' of the signElement
   */
  updateSignStyle() {
    let signElement = document.querySelector(this.options.SIGN.el);

    if (signElement) {
      signElement.setAttribute('style', '')
      signElement.style.height = window.getComputedStyle(signElement).getPropertyValue('height');
    }
  }

  initPixels() {
    new Pixelation({
      el: this.options.PIXELS.el,
      config: this.options.PIXELS.config
    })
  }

  is_iOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
}

new App().init()
