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
      path.unshift(desti);
      desti = origin;
      origin = visited.pop();
    }
  }
  path.unshift(origin, desti);
  return path;
};

let knightMoves = function (start, end) {
  let startVtex = graph.nodes.get(start.join(":"));
  let endVtex = graph.nodes.get(end.join(":"));

  return breadthFirst(startVtex, endVtex);
};
