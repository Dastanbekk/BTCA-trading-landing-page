const key = document.getElementById('key')
const keyCode = document.getElementById('keyCode')
const newKey = document.getElementById('newKey')


document.addEventListener('keydown', function(event) {
    key.textContent = `
    ${event.keyCode===32?'Space':event.key}
    `
    keyCode.textContent = `
    ${event.keyCode}
    `
    newKey.textContent = `
    ${event.keyCode===32?'Space':event.key}
    `
  });