/**
 * Toggle Button
 *
 * Usage:
 *
 * Add the data-toggle-control attribute to the button you
 * want to trigger the toogle, passing the element's id
 * you want to control as value.
 *
 * <button
 *   data-toggle-control="site-navigation"
 *   data-nav-group="navigation-dropdowns" [optional]
 * >Text</button>
 */

const TOGGLE_CLOSE_EVENT = 'close'
const TOGGLE_OPEN_EVENT = 'open'
const TARGET_ACTIVE_CLASS = 'active'

const ToggleButton = (( el: Element) => {

  const getToggleTarget = (button: HTMLButtonElement): string => {
    return button.dataset.toggleControl || ''
  }

  const getTargetEl = (selector: string): HTMLElement | null => {
    const targetEl = document.getElementById(selector)
    if (targetEl === null) throw new Error('[ToggleButton] The target element does not exist')
    return targetEl
  }

  const registerOutsiteClickHandler = (
    button: HTMLButtonElement,
  ) => {

    const targetEl = getTargetEl(getToggleTarget(button))

    if (targetEl) {

      document.body.onclick = null

      const closeIfClickOutside = (e: Event) => {
        if (e.target instanceof Element) {

          const eventTarget = e.target as Element

          const isClosest = eventTarget.closest(`#${targetEl.id}`)

          if (
            !isClosest
            && targetEl.classList.contains(TARGET_ACTIVE_CLASS)
          ) {
            button.dispatchEvent(new Event(TOGGLE_CLOSE_EVENT))
            document.body.onclick = null
          }
        }
      }

      setTimeout(() => {
        document.body.onclick = closeIfClickOutside
      }, 100)
    }
  }

  const updateNavButtons = (buttons: Element[], callback: (button: Element) => Element) => {
    buttons = buttons.map(button => callback(button))
  }

  const closeGrouppedTargets = (thisButton: HTMLButtonElement) => {
    const buttons = document.querySelectorAll(`button[data-nav-group="${thisButton.dataset.navGroup || ''}"]`)

    updateNavButtons(Array.from(buttons), (button) => {
      if (button !== thisButton) {
        button.dispatchEvent(new Event(TOGGLE_CLOSE_EVENT))
      } else {
        registerOutsiteClickHandler(button as HTMLButtonElement)
      }
      return button
    })

  }

  const handleButtonState = (button: HTMLButtonElement, btnState: boolean) => {
    button.setAttribute('aria-expanded', btnState.toString())
    const targetEl = getTargetEl(getToggleTarget(button))
    if (btnState) {
      closeGrouppedTargets(button)
      return targetEl?.classList.add(TARGET_ACTIVE_CLASS)
    }
    return targetEl?.classList.remove(TARGET_ACTIVE_CLASS)
  }

  /**
   * Toggle the active variable boolean value and update
   * the ui state
   */
  const handleClick = (e: Event) => {
    e.stopImmediatePropagation()
    const button = e.currentTarget as HTMLButtonElement
    const isExpanded = button.getAttribute('aria-expanded') === 'true'
    button.dispatchEvent(
      new Event(isExpanded ? TOGGLE_CLOSE_EVENT : TOGGLE_OPEN_EVENT)
    )
  }

  const init = ( btnEl: Element ) => {

    if (!(btnEl instanceof HTMLButtonElement)) return

    btnEl.setAttribute('aria-expanded', 'false')
    btnEl.setAttribute('aria-controls', getToggleTarget(btnEl))
    btnEl.addEventListener(TOGGLE_OPEN_EVENT, (e: Event) => handleButtonState(
      e.currentTarget as HTMLButtonElement,
      true
    ))
    btnEl.addEventListener(TOGGLE_CLOSE_EVENT, (e: Event) => handleButtonState(
      e.currentTarget as HTMLButtonElement,
      false
    ))
    btnEl.addEventListener('click', handleClick)
  }

  init(el)
})


const toggleControlButton = (() => {

  const init = ( btnSelector: string ) => {
    const buttons = document.querySelectorAll( btnSelector );
    buttons.forEach(button => {
      ToggleButton(button);
    });
  }

  init('[data-toggle-control]')

})();

export default toggleControlButton
