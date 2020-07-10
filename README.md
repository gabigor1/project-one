# sei-project-one

General Assembly Project 1 : Make a game - Space Invaders

## Goal: 
To create a game with HTML5, CSS and Javascript

Timeframe: 8 days

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Process](#process)
- [Challenges](#challenges)
- [Bugs](#bugs)

## Overview

Space invaders is a classic arcade game, the main objective it's to destroy all the aliens before they reach the tank.

## Technologies

- JavaScript 
- HTML5 and CSS
- Git / GitHub

## How to use it

At the top of the screen, you have a button with Start Game, if you press it the game start, you can move the tank only horizontally with the arrow keys and shoot the laser with the space bar.

## Process

Before I started to code, I decided to do some research about the game. I decided to use a large grid to have more aliens and give the player more time to destroy the aliens.

The starting point was creating a basic grid in which the aliens could move in a certain period of time, and the player could shoot and move the tank. This was created using a list of divs in the HTML. Each cell has an individual value, which I used to move the aliens, the tank, and the laser.


```
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

```

I created the aliens as objects in which each alien contains his position if his status is dead or alive. All the aliens have the same image. The tank has only the value of his initial position.
 
![Game](/assets/Game.png)
 
While the game is running, a function runs through aliens moves each alien with the corresponding movement patterns. Also, there is another function to check if a laser hits an alien to remove it and give 100 points to the player.
 
![Game](/assets/Alienmove.png)
 
In addition, there's a function that controls the horizontal movement of the tank with arrow keys. Also, there is a function that each time you press the spacebar the tank shoots (creates) a laser that moves vertically.

![Game](/assets/Laser.png)

## Win 

Making the logic for the aliens was a big win for me. I got a lot of problems trying to build it, in particular with the movement and when laser collisions remove one.

```
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
```


## Challenges

This was the first project for the course. In this project, I have to find resources and use my knowledge to design and create the Space Invaders game, it was a hard task. One of my first problems was the logic of the movement of the aliens. I got problems when they reach a corner and try to go down, they moved down and later go up again. I spent a lot of time with logic.
 
 
## Bugs
 
* If you press too fast the spacebar the laser overlap.
* Sometimes laser destroys the next alien.
 
## Resources
 
I used images of invaders, the laser, and the tank from Sprites Resources. The sound and music are from Classic Gaming.
 
* [Sprites Resources] (https://www.spriters-resource.com/)
* [Classic Gaming Sounds] (https://www.classicgaming.cc/classics/space-invaders/sounds)
 
## Learnings
 
This was my first project, I learn some much about functions how they work, how they can communicate with other’s functions. Also, I learn a lot about lopping and conditionals to make events happened.
