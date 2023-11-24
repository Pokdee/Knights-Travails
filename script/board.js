const gameboard = document.querySelector(".gameBoard");
const form = document.querySelector(".form");
const markStartPoint = document.querySelector(".btnStart");
const markEndPoint = document.querySelector(".btnEnd");
const travel = document.querySelector(".btnMove");

const icon = document.createElement("i");
icon.classList.add("fa-solid");
icon.classList.add("fa-chess-knight");
icon.classList.add("knight");

(function () {
  for (let i = 7; i > -1; i--) {
    let color = i % 2 === 0 ? "black" : "white";

    for (let j = 0; j < 8; j++) {
      let ele = document.createElement("div");
      ele.classList.add("cell");
      ele.classList.add(`cell-${color}`);
      // ele.classList.add(`[${i},${j}]`);
      ele.setAttribute("cell", `[${i},${j}]`);
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
let start, end;
const markOnBoard = function (btn) {
  gameboard.addEventListener("click", (e) => {
    let cell = e.target;
    //if start btn and cell
    if (cell.classList.contains("cell") && btn.classList.contains("btnStart")) {
      if (btn.classList.contains("off")) return;
      ///

      cell.classList.add("knightOn");
      cell.insertAdjacentElement("afterbegin", icon);
      gameboard.classList.add("marked_start");
      markOn(btn);
      ///
      let cellNum = cell.getAttribute("cell");
      start = cellNum;
    }
    //if end btn and cell
    if (cell.classList.contains("cell") && btn.classList.contains("btnEnd")) {
      if (btn.classList.contains("off")) return;
      ///
      let cellNum = cell.getAttribute("cell");
      cell.classList.add("endPoint");
      gameboard.classList.add("marked_end");
      markOn(btn);

      end = cellNum;
    }
  });
};

//function Mark End
const markOff = function (ele) {};

///

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
    if (!start || !end) alert("Please mark starting and ending point");

    if (start && end) {
      console.log(knightMoves(start, end));
    }
  }
});
