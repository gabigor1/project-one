/* eslint-disable no-inner-declarations */
function init() {

  // * Dom Elements
  const resultDisplay = document.querySelector('#result')
  const starBtn = document.querySelector('#start')
  const grid = document.querySelector('.grid')
  const audioCanon = document.querySelector('#sound-canon')
  const audioBang = document.querySelector('#sound-bang')
  const audioMusic = document.querySelector('#music')
  const cells = []

  // * Grid Elements
  const width = 11
  const cellCount = width * width

  // * Game Variables
  let tankPosition = 115
  //* initial position of ther aliens
  let objectAliens = [
    {
      alienIndex: 0,
      dead: false
    },
    {
      alienIndex: 1,
      dead: false
    },
    {
      alienIndex: 2,
      dead: false
    },
    {
      alienIndex: 3,
      dead: false
    },
    {
      alienIndex: 4,
      dead: false
    },
    {
      alienIndex: 11,
      dead: false
    },
    {
      alienIndex: 12,
      dead: false
    },
    {
      alienIndex: 13,
      dead: false
    },
    {
      alienIndex: 14,
      dead: false
    },
    {
      alienIndex: 15,
      dead: false
    },
    {
      alienIndex: 22,
      dead: false
    },
    {
      alienIndex: 23,
      dead: false
    },
    {
      alienIndex: 24,
      dead: false
    },
    {
      alienIndex: 25,
      dead: false
    },
    {
      alienIndex: 26,
      dead: false
    },
    {
      alienIndex: 33,
      dead: false
    },
    {
      alienIndex: 34,
      dead: false
    },
    {
      alienIndex: 35,
      dead: false
    },
    {
      alienIndex: 36,
      dead: false
    },
    {
      alienIndex: 37,
      dead: false
    }
    
  ]
  let result = 0
  let isPlaying = false


  function createdGrid(startingPosition1) { // * creates the grip and the initial position of the aliens and the tank
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    objectAliens.forEach(alien => {
      console.log('alien adding class', alien )
      cells[alien.alienIndex].classList.add('alien1')
    })
    console.log('objectAliens', objectAliens)
    cells[startingPosition1].classList.add('tank')
  }

  function startGame() { // * when you click the start game button the game starts
    // console.log('the start button was clicked')
    if (isPlaying) return
    // console.log('and was allowed to start a timer')
    isPlaying = true
    const alienTime = setInterval(alienMove, 400)
    const source = './sounds/spaceinvaders1.mpeg'
    audioMusic.src = source
    audioMusic.play()
  

    function tankControls(event) { // * function to move horizontally the tank at the botton
      console.log(event.keyCode)

      const x = tankPosition % width

      switch (event.keyCode) { // * calculate the new index position of the tank, activates the laser

        case 37: // * move the tank to the left each time you press the left key
          cells[tankPosition].classList.remove('tank')
          // console.log('should move left')
          if (x > 0) tankPosition = tankPosition - 1
          cells[tankPosition].classList.add('tank')
          break
        case 39:
          console.log('should move right') // * move the tank to the left each time you press the right key
          cells[tankPosition].classList.remove('tank')
          if (x < width - 1) tankPosition = tankPosition + 1
          cells[tankPosition].classList.add('tank')
          // console.log(tankPosition)
          break
        default:
          // console.log('invalid key do nothing')
      }
      // * add the class back at the new position
      // console.log(tankPosition)

    }

    function alienMove() { // * function to move the aliens with their logic
      objectAliens.forEach(alien => {
        // console.log('alien move foreach', alien)
        // console.log('cells[alien.alienIndex]', cells[alien.alienIndex])
        cells[alien.alienIndex].classList.remove('alien1')
      })
      // console.log('objectAliens', objectAliens)

      if (objectAliens[0].alienIndex < 6 || objectAliens[4].alienIndex >= 22 && objectAliens[4].alienIndex < 32 || objectAliens[4].alienIndex >= 44 && objectAliens[4].alienIndex < 54 || objectAliens[4].alienIndex >= 66 && objectAliens[4].alienIndex < 76 || objectAliens[4].alienIndex >= 88 && objectAliens[4].alienIndex < 98) { // * The alien move to the right condition
        // console.log('alien is moving right')
        objectAliens.forEach(alien => {
          // console.log('alien moving', alien)
          alien.alienIndex = alien.alienIndex + 1
        })
        // console.log('object aliens in move right', objectAliens)
      } else if (objectAliens[0].alienIndex === 6 || objectAliens[0].alienIndex === 11 || objectAliens[0].alienIndex === 28 || objectAliens[0].alienIndex === 33 || objectAliens[0].alienIndex === 50 || objectAliens[0].alienIndex === 55 || objectAliens[0].alienIndex === 72 || objectAliens[0].alienIndex === 77 ) { // * The alien move down condition
        // console.log('alien move down')
        objectAliens.forEach(alien => {
          alien.alienIndex = alien.alienIndex + 11
        })
      } else if (objectAliens[0].alienIndex < 22 && objectAliens[0].alienIndex > 10 || objectAliens[0].alienIndex < 48 && objectAliens[0].alienIndex > 32 || objectAliens[0].alienIndex < 70 && objectAliens[0].alienIndex > 54 || objectAliens[0].alienIndex < 92 && objectAliens[0].alienIndex > 76) { // * The alien move to the left condition
        // console.log('alien move left')
        objectAliens.forEach(alien => {
          alien.alienIndex = alien.alienIndex - 1
        })
      }
      if (objectAliens[14].alienIndex >= 99 || objectAliens[0].alienIndex < 0){ // * The interval stop and the game should finish as Game Over
        clearInterval(alienTime)
        alert('Game Over')
        audioMusic.pause()
      }
      console.log(objectAliens)
      
      if (result === 2000) {
        clearInterval(alienTime)
        alert('You Win')
        audioMusic.pause()
      }
      objectAliens.forEach(alien => {
        // console.log('alien to add back in new position', alien.alienIndex)
        if (!alien.dead){
          cells[alien.alienIndex].classList.add('alien1')
        }
        
      }) // * add the class back at the new position
      // console.log('objectAliens end of movement function', objectAliens)
      
    }

    function laserShoot(event) { // * function to create the laser and move to the top
      let lasers = tankPosition
      let laserTime
      if (event.keyCode === 32) { // * if the space button is pressed creates a laser and goes up
        const source = './sounds/shoot.wav'
        audioCanon.src = source
        audioCanon.play()
        laserTime = setInterval(laserMove, 100)
        function laserMove() {
          cells[lasers].classList.remove('tankLaser')
          lasers -= width
          // console.log(lasers)
          cells[lasers].classList.add('tankLaser')
          if (cells[lasers].classList.contains('alien1')) { // * if the laser is in the same cell as an alien, it stops the laser and remove both images
            clearInterval(laserTime)
            cells[lasers].classList.remove('tankLaser') 
            cells[lasers].classList.remove('alien1')
            const alienBeingShot = objectAliens.find(alien => alien.alienIndex === lasers)
            alienBeingShot.dead = true
            console.log('alienBeingShot', alienBeingShot)
            cells[lasers].classList.add('bang')
            setTimeout(() => cells[lasers].classList.remove('bang'), 200)
            result = result + 100
            resultDisplay.textContent = result
            const source = './sounds/invaderkilled.wav'
            audioBang.src = source
            audioBang.play()
          }
          if (lasers < width) { // * if the laser cell is less than the width of the grip it removes the laser (bug)
            cells[lasers].classList.remove('tankLaser')
            clearInterval(laserTime   )
          }
        }
      }
    }
      



    document.addEventListener('keyup', tankControls) // * We have to have here this event listeners to work only when the game starts
    document.addEventListener('keyup', laserShoot)
  }
  createdGrid(tankPosition)
  // * Event Listener
  starBtn.addEventListener('click', startGame)
}



window.addEventListener('DOMContentLoaded', init)