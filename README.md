# sei-project-one

General Assembly Project 1 : Make a game - Space Invaders

## Goal: 
To create a game with HTML5, CSS and Javascript

Timeframe: 8 days

## Table of Contents

- [Overview](#overview)
- [Process](#process)
- [Challenges](#challenges)
- [Technologies](#technologies)

## Overview

Space invaders is a classic arcade game, the main objective it's to destroy all the aliens before they reach the tank.

## How to use it

At the top of the screen you have a button with Start Game, if you press it the game start, you can move the tank only horizontally with the arrow keys and shoot the laser with the space bar.

## Process

The starting point was creating a basic grid which the aliens could move in a certain period of time, and the player could shoot and move the tank. This was created using a list of divs in the HTML. Each cell have an individual value, which I used to move the aliens, the tank and the laser. 

I created the aliens as objects which each alien contain his position if his status is dead or alive. All the aliens have the same image. The tank have only the value of his initial position.

![Game](/assets/Game.png)

While the game is running, a function runs through aliens moves each alien with the corresponding movement patterns. Also there is another function to check if a laser hits an alien to remove it and give 100 points to the player.

![Game](/assets/Alienmove.png)

In addition there's a function which controls the horizontally movement of the tank with arrow keys. Also there is a function that each time you press the spacebar the tank shoots (creates) a laser that moves vertically.

![Game](/assets/Laser.png)

## Challenges

This was the first project for the course. In this proyect, I have to find resources and use my knowledge to design and create the Space Invaders game, it was a hard task. One of my first problems was the logic of the movement of the aliens. I got problems when they reach a corner and try to go down, they moved down and later go up again. I spent a lot of time with the logic.

## Technologies

- JavaScript 
- HTML5 and CSS
- Git / GitHub


## Resources

I used images of invaders, the laser and the tank from Sprites Resources. The sound and music is from Classic Gaming.

* [Sprites Resources] (https://www.spriters-resource.com/)
* [Classic Gaming Sounds] (https://www.classicgaming.cc/classics/space-invaders/sounds)

