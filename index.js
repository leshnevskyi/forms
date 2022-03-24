import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const {owlyForm} = document.forms

  owlyForm.addEventListener('submit', event => {
    event.preventDefault()

    const entries = new FormData(owlyForm)
   
    for (const [key, value] of entries) {
      localStorage.setItem(key, value)
    }

    window.alert('The form has been sent. Thank you!')
  })
})
