
document.querySelector('#thanks button').addEventListener('click', function yowchAlert () {
  window.alert('yowch! don\'t click me so hard!')
})

document.querySelector('#double button').addEventListener('click', function doubleNum () {
  var num = document.getElementById('compoundInvestment').innerHTML
  document.getElementById('compoundInvestment').innerHTML = num * 2
})

document.querySelector('#color-circle button').addEventListener('click', function circleSwitchColor () {
  var color = document.getElementById('circle-bw')
  if (color.style.background === 'rgb(255, 255, 255)') {
    color.style.background = 'rgb(0, 0, 0)'
  } else {
    color.style.background = 'rgb(255, 255, 255)'
  }
})

document.querySelector('#blow-up button').addEventListener('click', function doubleCircleDiameter () {
  var circle = document.querySelector('.circle-red')

  var circleWidth = window.getComputedStyle(circle, null).getPropertyValue('width')

  var circleWidthParsed = parseInt(circleWidth, 10)
  console.log(circleWidthParsed)

  if (circleWidthParsed < 320) {
    circleWidthParsed *= 2
    document.querySelector('.circle-red').style.width = circleWidthParsed + 'px'
    document.querySelector('.circle-red').style.height = circleWidthParsed + 'px'
  } else {
    document.querySelector('.circle-red').style.width = '40px'
    document.querySelector('.circle-red').style.height = '40px'
  }
})

document.querySelector('#remove button').addEventListener('click', function removeInactiveLiEl () {
  var inactiveLiEls = document.getElementsByClassName('inactive')
  while (inactiveLiEls.length > 0) {
    inactiveLiEls[0].parentNode.removeChild(inactiveLiEls[0])
  }
})

document.querySelector('#reverse-squares button').addEventListener('click', function reverseTheSquares () {
  var squareList = document.querySelectorAll('span, .square')
  console.log(squareList)
  var divParent = document.querySelector('#reverse-squares .answer-box')

  var squareArr = Array.from(squareList)
  var squareArrReversed = squareArr.reverse()
  console.log(squareArrReversed)
  for (var i = 0; i < squareArrReversed.length; i++) {
    divParent.appendChild(squareArrReversed[i])
  }
})

document.querySelector('#pig-latin button').addEventListener('click', function reverseTheTasks () {
  var tasks = document.getElementById('tasks')
  for (var i = 0; i < tasks.childNodes.length; i++) {
    tasks.insertBefore(tasks.childNodes[i], tasks.firstChild)
  }
})

document.querySelector('#cycle-image button').addEventListener('click', function cycleThruPhotos () {
  console.log(document.getElementById('city-img').src)
  setInterval(function () {
    var source = document.getElementById('city-img').src
    var srcNum = source.charAt(source.length - 1)
    source.substring(0, source.length - 1) + srcNum
    srcNum++
    if (srcNum > 7) {
      srcNum = 1
    }
    document.getElementById('city-img').src = source.substring(0, source.length - 1) + srcNum
    console.log(document.getElementById('city-img').src)
  }, 2000)
})
