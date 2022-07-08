import Headroom from 'headroom.js'
import './number-count'
import './video-modal'
import { toggleControlButton, TOGGLE_CLOSE_EVENT } from './toggle-control-button'

toggleControlButton();

const siteHeaderEl = document.getElementById("site-header");

const siteHeader = new Headroom(siteHeaderEl, {
  offset: 144,
  tolerance: { up: 20, down: 10 },
  onUnpin: () => {
    const hamburger = document.getElementById("hamburger-menu-button");
    hamburger?.dispatchEvent(new Event(TOGGLE_CLOSE_EVENT));

    document.body.click()
  }
});
siteHeader.init();
