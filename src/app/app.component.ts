import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  // white: 1, black: 2
  turn = 1
  
  ngOnInit() {
  }

  getCellClass(cell: number) {
    const cellClass = {
      0: "",
      1: "white",
      2: "black"
    }

    return cellClass[cell]
  }

  onClickCell(i: number, j: number) {
    let currCell = this.board[i][j]  

    if (currCell !== 0) {
      return
    }
  
    if (this.flip(i, j, this.turn)) {
      this.board[i][j] = this.turn
      this.turn = 3 - this.turn 
    }
  }

  private flip(y: number, x: number, myColor: number) {
    let canFlip = false

    for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i == 0 && j == 0) {
        continue
      }

      let _y = y + i
      let _x = x + j

      if (_y < 0 || _y >= 8 || _x < 0 || _x >= 8) {
        continue
      }

      if (this.board[_y][_x] !== 3 - myColor) {
        continue
      }

      if (this.checkFlip(_y, _x, i, j, myColor)) {
        canFlip = true
        while(this.board[_y][_x] == 3 - myColor) {
          this.board[_y][_x] = myColor

          _y += i
          _x += j
        }
      }
    }
    }

    return canFlip
  }

  private checkFlip(y: number, x: number, i: number, j: number, myColor: number) {

    if (y < 0 || y >= 8 || x < 0 || x >= 8) {
      return false
    }

    if (this.board[y][x] == 0) {
      return false
    }
    if (this.board[y][x] == myColor) {
      return true
    }
    if (this.board[y][x] == 3 - myColor) {
      return this.checkFlip(y + i, x + j, i, j, myColor)
    }
  }
}
