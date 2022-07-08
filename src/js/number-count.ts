const inViewport = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.dispatchEvent(new Event('playCountUp'))
      // Stop watching and remove the element from the observer
      observer.unobserve(entry.target)
    }
  });
};

const observer = new IntersectionObserver(inViewport);

const easeOut = (t: number) => 1 - Math.pow(1 - t, 1.675)

const animateNumberCount = (element: Element) => {

  observer.observe(element)

  element.addEventListener('playCountUp', (event) => {

    const el = event.target as HTMLElement;

    const end = +(el.dataset.countNumber || 0);

    const config = {
      countStart: 0,
      duration: 1500,
      separator: ",",
      decimalSeparator: "."
    }

    el.innerHTML = config.countStart.toString();

    let startTimestamp = 0

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp

      const progress = Math.min((timestamp - startTimestamp) / config.duration, 1)

      el.innerHTML = Math.floor(easeOut(progress) * (end - config.countStart) + config.countStart).toLocaleString() + '+'

      if (progress < 1) return window.requestAnimationFrame(step)
    }

    window.requestAnimationFrame(step)

  })

}

window.addEventListener('load', () => {

  document.querySelectorAll("[data-count-number]").forEach(animateNumberCount)

}, false)



