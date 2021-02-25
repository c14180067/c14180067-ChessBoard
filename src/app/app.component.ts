import { Component, VERSION } from "@angular/core";
import { Player } from "./player";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  board = [[]];
  idle = true;
  user = 1;
  turn = 0;

  tempI;
  tempJ;
  tempChess = 0;
  movingChess;

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

    // //init board letter & number
    // this.board[8] = [];
    // this.board[8][0] = 'A';
    // this.board[8][1] = 'B';
    // this.board[8][2] = 'C';
    // this.board[8][3] = 'D';
    // this.board[8][4] = 'E';
    // this.board[8][5] = 'F';
    // this.board[8][6] = 'G';
    // this.board[8][7] = 'H';

    // this.board[0][8] = '8';
    // this.board[1][8] = '7';
    // this.board[2][8] = '6';
    // this.board[3][8] = '5';
    // this.board[4][8] = '4';
    // this.board[5][8] = '3';
    // this.board[6][8] = '2';
    // this.board[7][8] = '1';

    //init soldier
    for (var i = 0; i < 8; i++) {
      this.board[1][i] = 7;
      this.board[6][i] = 1;
    }

    //init fortress
    this.board[0][0] = 8;
    this.board[0][7] = 8;
    this.board[7][0] = 2;
    this.board[7][7] = 2;

    //init horses
    this.board[0][1] = 9;
    this.board[0][6] = 9;
    this.board[7][1] = 3;
    this.board[7][6] = 3;

    //init minister
    this.board[0][2] = 10;
    this.board[0][5] = 10;
    this.board[7][2] = 4;
    this.board[7][5] = 4;

    //init king and queen
    this.board[0][3] = 11;
    this.board[0][4] = 12;
    this.board[7][3] = 6;
    this.board[7][4] = 5;
  }

  selectChess(item, i, j) {
    this.idle = false;
    this.movingChess = item;
    switch (item) {
      case 1:
        if (this.board[i - 1][j] != 0) {
          this.tempChess = this.board[i - 1][j];
        }
        this.board[i - 1][j] = 7;
        this.tempI = i - 1;
        this.tempJ = j;
        break;
      case 2:
        var step = 0;
        for(var n = i; n >= 0; n--) {
          if(this.board[n][j] == 0) {
            step++;
          }
          else if(this.board[n][j] < 7) {
            break;
          }
          else if(this.board[n][j] >= 7) {
            step++;
            break;
          }
        }
        for(n = 0; n < step; n++) {
          this.board[i-1][j] = 7;
        }
        break;
      case 3:
        //alert("kuda");
        break;
      case 4:
        //alert("menteri");
        break;
      case 5:
        //alert("raja");
        break;
      case 6:
        //alert("ratu");
        break;
      default:
        break;
    }
  }

  moveChess(i, j) {
    if (this.tempI != i && this.tempJ != j) {
      if (this.tempChess != 0) {
        this.board[this.tempI][this.tempJ] = this.tempChess;
        this.tempChess = 0;
      } else {
        this.board[this.tempI][this.tempJ] = 0;
      }
      this.idle = true;
      return this.selectChess(this.board[i][j], i, j);
    } else if (this.tempI + 1 == i && this.tempJ == j) {
      if (this.tempChess != 0) {
        this.board[this.tempI][this.tempJ] = this.tempChess;
        this.tempChess = 0;
      } else {
        this.board[this.tempI][this.tempJ] = 0;
      }
      this.idle = true;
      return;
    } else {
      switch (this.movingChess) {
        case 1:
          if (this.user == 1) {
            this.board[i][j] = this.movingChess;
            this.movingChess = 0;
            this.board[i + 1][j] = 0;
            this.idle = true;
          }
      }
    }
  }
}
