const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

let check;

class Field {
  constructor(customField) {
    this.customField = customField;
    this.vPosition = 0;
    this.hPosition = 0;
    this.rows = 6;
    this.columns = 6;
  }
  print() {
    let stringArray = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        stringArray.push(this.customField[i][j]);
      }
      stringArray.push("\n");
    }
    return stringArray.join("");
  }
  move() {
    while (!this.hat() && !this.hole()) {
      const move = prompt("Choose your next move:");
      switch (move) {
        case "w":
          if (this.vPosition - 1 < 0) {
            return "You lost: position out of the field.";
          } else {
            check = this.customField[this.vPosition - 1][this.hPosition];
            check === "*" &&
              (this.customField[this.vPosition][this.hPosition] =
                fieldCharacter);
            this.customField[this.vPosition - 1][this.hPosition] =
              pathCharacter;
            this.vPosition -= 1;
          }
          break;
        case "a":
          if (this.hPosition - 1 < 0) {
            return "You lost: position out of the field.";
          } else {
            check = this.customField[this.vPosition][this.hPosition - 1];
            check === "*" &&
              (this.customField[this.vPosition][this.hPosition] =
                fieldCharacter);
            this.customField[this.vPosition][this.hPosition - 1] =
              pathCharacter;
            this.hPosition -= 1;
          }
          break;
        case "s":
          if (this.vPosition + 1 > this.rows - 1) {
            return "You lost: position out of the field.";
          } else {
            check = this.customField[this.vPosition + 1][this.hPosition];
            check === "*" &&
              (this.customField[this.vPosition][this.hPosition] =
                fieldCharacter);
            this.customField[this.vPosition + 1][this.hPosition] =
              pathCharacter;
            this.vPosition += 1;
          }
          break;
        case "d":
          if (this.hPosition + 1 > this.columns - 1) {
            return "You lost: position out of the field.";
          } else {
            check = this.customField[this.vPosition][this.hPosition + 1];
            check === "*" &&
              (this.customField[this.vPosition][this.hPosition] =
                fieldCharacter);
            this.customField[this.vPosition][this.hPosition + 1] =
              pathCharacter;
            this.hPosition += 1;
          }
          break;
      }
      console.log(myField.print());
    }
    if (this.hat() === true) {
      return "Congrats! You won!";
    }
    if (this.hole() === true) {
      return "You lost: landed on a hole.";
    }
  }
  hat() {
    if (check === hat) {
      return true;
    } else {
      return false;
    }
  }
  hole() {
    if (check === hole) {
      return true;
    } else {
      return false;
    }
  }
  logic() {
    console.log(myField.print());
    console.log(myField.move());
  }
}

const myField = new Field([
  ["*", "O", "░", "O", "O", "O"],
  ["░", "░", "░", "O", "^", "░"],
  ["░", "O", "░", "░", "O", "░"],
  ["░", "O", "O", "░", "░", "░"],
  ["░", "░", "O", "░", "O", "O"],
  ["O", "░", "░", "░", "O", "░"],
]);

myField.logic();
