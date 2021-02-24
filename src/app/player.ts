export class Player {
  num: number;
  chessArr = [];

  initPlayer(number) {
    this.num = number;
  }

  initChess(chessArr) {
    this.chessArr = chessArr;
  }
}
