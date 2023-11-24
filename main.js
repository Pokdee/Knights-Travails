/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 80%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 0rem;
  background-color: #ffc5c5;
}

.form {
  width: 80%;
  height: 10rem;
  border-radius: 1.5rem;
  background-color: #c7dca7;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 1rem;
  align-items: center;
  justify-items: center;
  font-size: 1rem;
}

.btnStart,
.btnEnd {
  font-size: inherit;
  width: 80%;
  height: 100%;
  cursor: pointer;
  background-color: #ffebd8;
}

.btnMove {
  font-size: inherit;
  width: 80%;
  height: 100%;
  grid-area: 2/1/3/3;
  cursor: pointer;
  background-color: #89b9ad;
}

.button {
  border-radius: 1rem;
}

.gameBoard {
  height: 60dvh;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  border: 3px solid;
}

.cell {
  width: auto;
  height: auto;
  transform: transition;
}

.cell-black {
  background-color: black;
}

.cell-white {
  background-color: white;
}

.knightOn {
  position: relative;
}

.knight {
  position: absolute;
  font-size: 2.1rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgb(18, 156, 151);
  transition: all 0.5s;
}

.on {
  background-color: green;
}

.off {
  background-color: #ffebd8;
}

.path {
  background-color: green;
}

.endPoint {
  background-color: red;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


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

})();

/******/ })()
;