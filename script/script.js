import "../style.css";

const createGameBoard = function (knight = [0, 0]) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let cell = [i, j];
      board.push(cell);
    }
  }
  return board;
};

//Vertex aka Node

class node {
  constructor(data) {
    this.data = data;
    this.adjacent = [];
  }

  addAdjacent(node) {
    if (!this.adjacent.includes(node)) {
      this.adjacent.push(node);
    }
  }
}
///

/////

class Graph {
  constructor(edgeDir = Graph.unDir) {
    this.nodes = new Map();
    this.edgeDir = edgeDir;
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value.join(":"));
    }

    this.nodes.set(value.join(":"), new node(value));
  }

  setEdge(origin, destination) {
    if (!this.nodes.has(origin.join(":"))) {
      this.addVertex(origin);
    }
    if (!this.nodes.has(destination.join(":"))) {
      this.addVertex(destination);
    }
    let originVtex = this.nodes.get(origin.join(":"));
    let destiVtex = this.nodes.get(destination.join(":"));

    originVtex.addAdjacent(destiVtex);
    if (this.edgeDir === Graph.unDir) {
      destiVtex.addAdjacent(originVtex);
    }
  }
}
Graph.unDir = Symbol("Undirection Graph");
Graph.Dir = Symbol("Direction Graph");

/////
//setting graph of cells

let graph = new Graph();

let gameBoard = createGameBoard();

let buildTree = function (board) {
  if (graph.nodes.size === 0) {
    graph.addVertex(board[0]);
  }
  for (const node of graph.nodes.values()) {
    let vtex = node.data;
    for (let i = 0; i < board.length; i++) {
      let cell = board[i];
      let row = cell[0];
      let col = cell[1];

      if (vtex[0] === 0) {
        if (vtex[1] === 0) {
          if ((row === 2 && col === 1) || (row === 1 && col === 2)) {
            graph.setEdge(vtex, cell);
          }
        }
      }
      if (vtex[0] === 1) {
        if (vtex[1] >= 2) {
          if (
            (row === vtex[0] + 2 && col === vtex[1] - 1) ||
            (row === vtex[0] + 2 && col === vtex[1] + 1) ||
            (row === vtex[0] + 1 && col === vtex[1] + 2) ||
            (row === vtex[0] - 1 && col === vtex[1] + 2) ||
            (row === vtex[0] + 1 && col === vtex[1] - 2) ||
            (row === vtex[0] - 1 && col === vtex[1] - 2)
          ) {
            graph.setEdge(vtex, cell);
          }
        }
      }
      if (vtex[0] >= 2) {
        if (vtex[1] === 1) {
          if (
            (row === vtex[0] + 2 && col === vtex[1] - 1) ||
            (row === vtex[0] + 2 && col === vtex[1] + 1) ||
            (row === vtex[0] - 2 && col === vtex[1] - 1) ||
            (row === vtex[0] - 2 && col === vtex[1] + 1)
          ) {
            graph.setEdge(vtex, cell);
          }
        }
        if (vtex[1] >= 2) {
          if (
            (row === vtex[0] + 2 && col === vtex[1] - 1) ||
            (row === vtex[0] + 2 && col === vtex[1] + 1) ||
            (row === vtex[0] - 2 && col === vtex[1] - 1) ||
            (row === vtex[0] - 2 && col === vtex[1] + 1) ||
            (row === vtex[0] - 1 && col === vtex[1] + 2) ||
            (row === vtex[0] + 1 && col === vtex[1] + 2) ||
            (row === vtex[0] - 1 && col === vtex[1] - 2) ||
            (row === vtex[0] + 1 && col === vtex[1] - 2)
          ) {
            graph.setEdge(vtex, cell);
          }
        }
      }
    }
  }
};
buildTree(gameBoard);

////
const breadthFirst = function (startVtex, endVtex) {
  let queue = [];
  let visited = [];

  queue.push(startVtex);

  visited.push(startVtex);

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.data.join(":") === endVtex.data.join(":")) break;

    if (!visited.includes(node)) visited.push(node);

    node.adjacent.forEach((n) => {
      if (!visited.includes(n)) {
        queue.push(n);
      }
    });
  }

  let path = [];
  let origin = visited.pop();
  let desti = endVtex;

  while (origin.data.join(":") !== startVtex.data.join(":")) {
    if (!origin.adjacent.includes(desti)) {
      origin = visited.pop();
    } else {
      path.unshift(desti.data);

      desti = origin;
      origin = visited.pop();
    }
  }
  path.unshift(origin.data, desti.data);
  return path;
};

let knightMoves = function (start, end) {
  let startVtex = graph.nodes.get(start.join(":"));
  let endVtex = graph.nodes.get(end.join(":"));

  return breadthFirst(startVtex, endVtex);
};

////

const gameboard = document.querySelector(".gameBoard");
const form = document.querySelector(".form");
const markStartPoint = document.querySelector(".btnStart");
const markEndPoint = document.querySelector(".btnEnd");
const travel = document.querySelector(".btnMove");

const icon = document.createElement("i");
icon.classList.add("fa-solid");
icon.classList.add("fa-chess-knight");
icon.classList.add("knight");

//put on knight
const knightOn = function (ele) {
  ele.classList.add("knightOn");
  ele.insertAdjacentElement("afterbegin", icon);
};

//remove knight
const knightOff = function (ele) {
  ele.classList.remove("knightOn");
  ele.removeChild(icon);
};
///
(function () {
  for (let i = 7; i > -1; i--) {
    let color = i % 2 === 0 ? "black" : "white";

    for (let j = 0; j < 8; j++) {
      let ele = document.createElement("div");
      // if (i === 0 && j === 0) knightOn(ele);
      ele.classList.add("cell");
      ele.classList.add(`cell-${color}`);
      ele.setAttribute("cell", `${i},${j}`);
      gameboard.insertAdjacentElement("beforeend", ele);
      color = color === "white" ? "black" : "white";
    }
  }
})();

//function Mark Start

const markOn = function (ele) {
  if (ele.classList.contains("on")) {
    ele.classList.remove("on");
    ele.classList.add("off");
  } else {
    ele.classList.add("on");
    ele.classList.remove("off");
  }
};

//mark on board
let startCell, endCell;
const markOnBoard = function (btn) {
  gameboard.addEventListener("click", (e) => {
    let cell = e.target;
    //if start btn and cell
    if (cell.classList.contains("cell") && btn.classList.contains("btnStart")) {
      if (btn.classList.contains("off")) return;
      ///
      knightOn(cell);

      gameboard.classList.add("marked_start");
      markOn(btn);
      ///
      let cellNum = cell.getAttribute("cell");
      startCell = cellNum.split(",");
    }
    //if end btn and cell
    if (cell.classList.contains("cell") && btn.classList.contains("btnEnd")) {
      if (btn.classList.contains("off")) return;
      ///
      let cellNum = cell.getAttribute("cell");
      cell.classList.add("endPoint");
      gameboard.classList.add("marked_end");
      markOn(btn);

      endCell = cellNum.split(",");
    }
  });
};

//function Move knight on board
const travail = function (arr) {
  return new Promise((resolve, reject) => {
    let cells = [...gameboard.children];
    let road = [];
    arr.forEach((cell) => {
      cells.forEach((sq) => {
        if (sq.getAttribute("cell") === `${cell[0]},${cell[1]}`) {
          road.push(sq);
          return;
        }
      });
    });

    let endCell = road[road.length - 1];
    let timer = 1;
    while (road.length > 0) {
      let ele = road.shift();
      setTimeout(() => {
        knightOn(ele), ele.classList.add("path");
      }, timer * 1000);
      timer = timer + 0.4;
    }
    setTimeout(() => resolve(true), timer * 1000);
  });
};

///

//Clean board for new game
const boardClean = function () {
  startCell = endCell = "";
  gameboard.classList.remove("marked_start");
  gameboard.classList.remove("marked_end");
  let board = [...gameboard.children];
  board.forEach((cell) => {
    if (cell.classList.contains("knightOn")) {
      cell.classList.remove("knightOn");
      cell.classList.remove("path");
      cell.classList.remove("endPoint");
    }
    if ([...cell.children].length > 0) {
      cell.removeChild(icon);
    }
  });
};

///

form.addEventListener("click", (e) => {
  e.preventDefault();
  let btn = e.target;
  if (btn.classList.contains("btnStart")) {
    if (gameboard.classList.contains("marked_start")) {
      alert("please select ending point");
    } else {
      markOn(btn);
      markOnBoard(btn);
    }
  }
  if (btn.classList.contains("btnEnd")) {
    if (gameboard.classList.contains("marked_end")) {
      alert("travails to mark again");
    } else {
      markOn(btn);
      markOnBoard(btn);
    }
  }
  if (btn.classList.contains("btnMove")) {
    if (!startCell || !endCell) alert("Please mark starting and ending point");

    if (startCell && endCell) {
      let path = knightMoves(startCell, endCell);

      travail(path).then((v) => {
        if (v) {
          setTimeout(() => boardClean(), 2000);
        }
      });
    }
  }
});
