let paintbox = document.getElementById('paintbox')
let context = paintbox.getContext('2d')

let gameOn = true

let playerSpeed = 5

class Box {
  constructor(size, color) {
    this.size = size
    this.color = color
    this.x = 0
    this.y = 0
  }
}

class Player extends Box {
  constructor() {
    super(50, 'blue')
    this.x = 0
    this.y = 225
    this.speed = 0
  }
  move() {
    this.x += this.speed
  }
}

class Enemy extends Box {
  constructor(speed) {
    super(50, 'red')
    this.speed = speed
  }

  move() {
    this.y += this.speed
    if (this.y + this.size > 500) {
      this.speed = -Math.abs(this.speed)
    }
    if (this.y < 0) {
      this.speed = Math.abs(this.speed)
    }
  }
}

let player = new Player()
let e1 = new Enemy(4)
let e2 = new Enemy(8)
let e3 = new Enemy(12)
e1.x = 100
e2.x = 233
e3.x = 366

function isCollided(box1, box2) {
var plleft = box2.x;
    var plright = box2.x + (box2.size);
    var pltop = box2.y;
    var plbottom = box2.y + (box2.size);
    var enleft = box1.x;
    var enright = box1.x + (box1.size);
    var entop = box1.y;
    var enbottom = box1.y + (box1.size);
    var crash = true;
    if ((plbottom < entop) ||
    (pltop > enbottom) ||
    (plright < enleft) ||
    (plleft > enright)) {


      crash = false;
    }

    return crash;
    
}

function drawBox(box) {
  context.fillStyle = box.color
  context.fillRect(box.x, box.y, box.size, box.size)
}
function moveup()
{
    player.y += -10;
}
function movedown() {
    player.y += 10; 
}

function moveleft() {
    player.x += -10; 
    player.speed = -playerSpeed
}

function moveright() {
    player.x += 10; 
    player.speed = playerSpeed
}
function clearmove() {
    player.x += 0; 
    player.y += 0; 
    

}


paintbox.addEventListener('mousedown', () => {
  player.speed = playerSpeed
})

paintbox.addEventListener('mouseup', () => {
  player.speed = 0
})

setInterval(() => {
    playerSpeed =  5 + parseInt(Math.random() * 10)
    
}, 2000)

function gameLoop() {
  if (!gameOn) return  
  console.log('frame update')
  context.clearRect(0, 0, 500, 500)
  e1.move()
  e2.move()
  e3.move()
  player.move()

  if (isCollided(e1, player) || isCollided(e2, player) || isCollided(e3, player)) {
    gameOn = false  
    window.alert('Game Over')
  }

  drawBox(player)
  drawBox(e1)
  drawBox(e2)
  drawBox(e3)


  window.requestAnimationFrame(gameLoop)
}

gameLoop()
