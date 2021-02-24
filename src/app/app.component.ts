import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  board = [[]];
  user = 1;
  turn = 0;

  constructor() {
    this.initBoard();
  }

  initBoard() {
    //first init
    for (var i = 0; i < 8; i++) {
      this.board[i] = [];
      for (var j = 0; j < 8; j++) {
        this.board[i][j] = 0;
      }
    }
    console.log(this.board);
    //init soldier
    for (var i = 0; i < 8; i++) {
      this.board[1][i] = 1;
      this.board[6][i] = 1;
    }

    //init fortress
    this.board[0][0] = 2;
    this.board[0][7] = 2;
    this.board[7][0] = 2;
    this.board[7][7] = 2;

    //init horses
    this.board[0][1] = 3;
    this.board[0][6] = 3;
    this.board[7][1] = 3;
    this.board[7][6] = 3;

    //init minister
    this.board[0][2] = 4;
    this.board[0][5] = 4;
    this.board[7][2] = 4;
    this.board[7][5] = 4;

    //init king and queen
    this.board[0][3] = 5;
    this.board[0][4] = 6;
    this.board[7][3] = 6;
    this.board[7][4] = 5;
  }

  select(item,i,j) {
    alert(item+" "+i+" "+j)
  }

  move(i,j) {

  }
}
