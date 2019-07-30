const slider = document.querySelector('.slider-bar')
// const box = document.querySelector('.box')
const container = document.querySelector('.container')
const hexText = document.querySelector('.hex-text')
let redNumber = `00`
let greenNumber = `00`
let blueNumber = `00`

// document.body.style.backgroundColor = '#000';

function hexNumber() {
  let content = ``

  // console.log(event.target.id)
  switch (event.target.className) {
    case 'red':
      redNumber = Number(event.srcElement.value).toString(16)
      while (redNumber.length < 2) {
        redNumber = '0' + redNumber
      } break
    case 'green':
      greenNumber = Number(event.srcElement.value).toString(16)
      while (greenNumber.length < 2) {
        greenNumber = '0' + greenNumber
      } break
    case 'blue':
      blueNumber = Number(event.srcElement.value).toString(16)
      while (blueNumber.length < 2) {
        blueNumber = '0' + blueNumber
      } break
    default:
      redNumber = `00`
      greenNumber = `00`
      blueNumber = `00`
  }
  content = `#` + redNumber + greenNumber + blueNumber
  hexText.innerHTML = content

  return content
}


container.addEventListener('input', function () {

  let numberRight = event.srcElement.value
  let numberPlace = event.srcElement.nextElementSibling
  numberPlace.innerHTML = `${numberRight}`
  // console.log(event.srcElement.value)
  // console.log(event.srcElement.nextElementSibling.innerHTML)
  hexNumber()

  document.body.style.backgroundColor = hexNumber()
})




