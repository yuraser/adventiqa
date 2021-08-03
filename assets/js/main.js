import Glide, { Controls, Breakpoints } from '@glidejs/glide'

let glideStories = new Glide('.glide', {
    type: 'carousel',
    startAt: 1,
    perView: 4,
    focusAt: 'center',
    breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
})

glideStories.mount({ Controls, Breakpoints })