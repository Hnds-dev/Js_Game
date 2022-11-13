//create the main class
class Item {
  constructor(shape, x, y) {
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.shape.style.left = x + "px";
    this.shape.style.top = y + "px";
  }
}

// class of food
class Food extends Item {
  constructor(shape, x, y) {
    super(shape, x, y);
  }
  // to count the player score
  static conunt = 0;
  // if the player get the food the postion will change
  changePlace() {
    this.x = randomChange(window.innerWidth - 20);
    this.y = randomChange(window.innerHeight - 20);
    this.shape.style.left = this.x + "px";
    this.shape.style.top = this.y + "px";
    Food.conunt += 10;
  }

  showScore() {
    document.querySelector(".score").textContent = `Score ${Food.conunt}`;
  }
}

class Player extends Item {
  constructor(shape, x, y) {
    super(shape, x, y);
  }
  //moves function
  moveUp() {
    // update the position of player and change it in style too
    this.y -= 20;
    this.shape.style.top = this.y + "px";
  }
  moveDown() {
    this.y += 20;
    this.shape.style.top = this.y + "px";
  }
  moveleft() {
    this.x -= 20;
    this.shape.style.left = this.x + "px";
  }
  moveRight() {
    this.x += 20;
    this.shape.style.left = this.x + "px";
  }
}

let player = new Player(
  document.querySelector("#player"),
  randomChange(window.innerWidth - 20),
  randomChange(window.innerHeight - 20)
);
let food = new Food(
  document.querySelector("#food"),
  randomChange(window.innerWidth - 20),
  randomChange(window.innerHeight - 20)
);

// to give you random positions
function randomChange(data) {
  let value = Math.round(Math.random() * data);
  return value - (value % 20);
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (player.x > 0) player.moveleft();
      break;
    case "ArrowUp":
      if (player.y > 0) player.moveUp();
      break;
    case "ArrowRight":
      if (player.x < window.innerWidth - 30) player.moveRight();
      break;
    case "ArrowDown":
      if (player.y < window.innerHeight - 30) player.moveDown();

      break;
  }

  // if the player get the food it will call these functions
  if (player.x === food.x && player.y === food.y) {
    food.changePlace();
    food.showScore();
  }
});
