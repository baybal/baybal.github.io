import Pixelation from 'modules/pixelation.js'

class App {
  constructor() {
    this.options = {
      SIGN: {
        el: '.h-sign',
        update_timeout: 200
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

    this.init()
  }

  init() {
    if (this.isMobile()) {
      this.updateSignStyle()
    }
    this.initPixels()
    this.bindUIActions()
  }

  bindUIActions() {
    window.addEventListener("orientationchange", this.updateSignStyle.bind(this), false)
  }

  /**
   * Fixing content shaking on mobile devices caused by
   * scroll changing viewport height (browsers toolbars sliding)
   */
  updateSignStyle() {
    let signElement = document.querySelector(this.options.SIGN.el);

    if (signElement) {
      signElement.setAttribute('style', '')
      // making sure that previous value has been removed and then setting the new one
      setTimeout(() => {
        signElement.style.height = window.getComputedStyle(signElement).getPropertyValue('height')
      }, this.options.SIGN.update_timeout)
    }
  }

  initPixels() {
    new Pixelation({
      el: this.options.PIXELS.el,
      config: this.options.PIXELS.config
    })
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) && !window.MSStream;
  }
}

new App()
