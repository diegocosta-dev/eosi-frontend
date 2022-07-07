import { tns, TinySliderInfo } from 'tiny-slider'

import 'tiny-slider/dist/tiny-slider.css'

declare global {
  var EOSiCarousel: any;
}

global.EOSiCarousel = ((selector: string) => {
  // options?: CommonOptions
  const carouselEl = document.querySelector(selector)

  if (!carouselEl || carouselEl.querySelector('.carousel-slides') === null) return


  const carousel = tns({
    mode: 'gallery',
    container: `${selector} .carousel-slides`,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    navPosition: 'bottom',
    controlsText: [
      '<svg><use href="#svg-icon-arrow-left" /></svg>',
      '<svg class="rotate-180"><use href="#svg-icon-arrow-left" /></svg>'
    ],
  });

  const carouselIconButtons = document.querySelectorAll(`${selector} .carousel-icon--item`)

  Array.from(carouselIconButtons).forEach((el, index) => el.addEventListener('click', () => {
    if (el instanceof HTMLElement) {
      carousel.goTo(index)
    }
  }))

  carousel.events.on('indexChanged', (info: TinySliderInfo) => {
    Array.from(carouselIconButtons).forEach((el) => el.classList.remove('active'))

    const index = info.index + 1 > 3 ? 1 : info.index + 1

    const icon = carouselEl.querySelector(`.carousel-icon--item-${index}`)
    icon?.classList.add('active')
  })
})

