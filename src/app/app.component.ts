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

    this.board[i][j] = this.turn

    this.turn = 3 - this.turn 
  }
}
