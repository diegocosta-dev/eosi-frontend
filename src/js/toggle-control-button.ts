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

const ToggleButton = (( el: Element) => {

  const isActive = (el: HTMLElement) => el.ariaExpanded === 'true'

  const getToggleTarget = (button: HTMLButtonElement): string => {
    return button.dataset.toggleControl || ''
  }

  const getTargetEl = (selector: string): HTMLElement | null => {
    const targetEl = document.getElementById(selector)
    if (targetEl === null) throw new Error('[ToggleButton] The target element does not exist')
    return targetEl
  }

  const updateNavButtons = (buttons: Element[], callback: (button: Element) => Element) => {
    buttons = buttons.map(button => callback(button))
  }

  const closeGrouppedTargets = (thisButton: HTMLButtonElement) => {
    const buttons = document.querySelectorAll(`button[data-nav-group="${thisButton.dataset.navGroup || ''}"]`)

    updateNavButtons(Array.from(buttons), (button) => {
      if (button !== thisButton) {
        button.dispatchEvent(new Event(TOGGLE_CLOSE_EVENT))
      }
      return button
    })

  }

  const handleButtonState = (button: HTMLButtonElement, btnState: boolean) => {
    button.setAttribute('aria-expanded', btnState.toString())
    const targetEl = getTargetEl(getToggleTarget(button))
    if (btnState) {
      closeGrouppedTargets(button)
      return targetEl?.classList.add('active')
    }
    return targetEl?.classList.remove('active')
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
