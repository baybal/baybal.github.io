import Spritz from 'spritz.js'
import throttle from 'lodash/throttle.js'
import { extend } from 'modules/utils.js'

/**
 * Pixelation.
 * Module that consistently changes sprite frames on the given HTMLElement
 * as it scrolls through the page.
 */

export default class Pixelation {
  constructor(options = {}) {
    let defaults = {
          el: '',
          throttle: 100
        };

    this.options = extend(defaults, options);

    if (!this.options.el || !(this.el = document.querySelector(this.options.el))) {
      throw new Error('Pixelation Element (options.el) not found.')
    }

    if (!this.options.config) {
      throw new Error('Pixelation Config (options.config) shouldn`t be empty.')
    }

    this.handler = throttle(() => {
      let scrollPos = (document.documentElement.scrollTop || document.body.scrollTop),
          curElPos = getElementPosition(this.el),
          maxElPos = curElPos + scrollPos,
          scrolled = maxElPos - curElPos,
          frames_count = this.sprite.options.steps,
          acceleration = 1.5,
          p = scrolled / maxElPos * acceleration,
          nextFrame = Math.ceil(frames_count * p);

      if (nextFrame <= 0) {
        nextFrame = 1
      } else if (nextFrame > frames_count) {
        nextFrame = frames_count
      }

      this.sprite.step(nextFrame)

    }, this.options.throttle)

    this.init()
  }

  init() {
    this.sprite = Spritz(this.options.el, this.options.config)
    window.addEventListener('scroll', this.handler)
  }

  destroy() {
    window.removeEventListener('scroll', this.handler)
    if (this.sprite) {
      this.sprite.destroy()
    }
  }
}

const getElementPosition = (el = document.body) => {
  return Math.round(el.getBoundingClientRect().top)
}
