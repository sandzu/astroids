/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asteroids.js":
/*!**********************!*\
  !*** ./asteroids.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./game/moving_object.js */ \"./game/moving_object.js\");\nvar canvas = document.getElementById('game-canvas');\n\nif(canvas.getContext){\n\n  var ctx = canvas.getContext('2d');\n  const options ={\n    pos: [10,10],\n    vel: 2,\n    radius: 10,\n    color: \"#00FF00\"\n  };\n  const testObj = new MovingObject(options);\n  // debugger\n  testObj.draw(ctx);\n\n} else{\n  console.log('canvas.getContext failed');\n}\n\n\n//# sourceURL=webpack:///./asteroids.js?");

/***/ }),

/***/ "./game/moving_object.js":
/*!*******************************!*\
  !*** ./game/moving_object.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass MovingObject {\n  constructor(options = { pos: [30, 30], vel: [10, 10], radius: 5, color: \"#00FF00\"}){\n    this.pos = options.pos;\n    this.vel= options.vel;\n    this.radius = options.radius;\n    this.color= options.color;\n  }\n\n  draw(ctx){\n    debugger\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    let x, y;\n    [x,y]=this.pos;\n    ctx.arc(\n      x,\n      y,\n      this.radius,\n      0 ,\n      2* Math.PI,\n      false);\n\n    ctx.fill();\n  }\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./game/moving_object.js?");

/***/ })

/******/ });