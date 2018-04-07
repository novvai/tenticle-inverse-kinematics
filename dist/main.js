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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar canvas_1 = __webpack_require__(/*! ../vendor/canvas */ \"./vendor/canvas.ts\");\nvar TenticlePart_1 = __webpack_require__(/*! ./TenticlePart */ \"./src/TenticlePart.ts\");\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game(el) {\n        var _this = _super.call(this, el, 1396, 800) || this;\n        _this.elements = [];\n        _this.setFrames(60);\n        _this.head = new TenticlePart_1.TenticlePart(0, 20, _this.context, 0, 0);\n        _this.elements.push(_this.head);\n        for (var index = 0; index < 20; index++) {\n            _this.elements.push(new TenticlePart_1.TenticlePart(0, 40, _this.context));\n        }\n        return _this;\n    }\n    Game.prototype.draw = function () {\n        this.context.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);\n        this.head.to(this.mouseX, this.mouseY);\n        for (var index = 1; index < this.elements.length; index++) {\n            this.elements[index].to(this.elements[index - 1].pointA.x, this.elements[index - 1].pointA.y);\n            this.elements[index].update();\n            this.elements[index].draw();\n        }\n    };\n    return Game;\n}(canvas_1.Canvas));\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/TenticlePart.ts":
/*!*****************************!*\
  !*** ./src/TenticlePart.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Vector_1 = __webpack_require__(/*! ../vendor/Vector */ \"./vendor/Vector.ts\");\nvar TenticlePart = /** @class */ (function () {\n    function TenticlePart(angle, ln, contex, x, y) {\n        this.pointA = new Vector_1.Vector();\n        this.b = {\n            x: 0,\n            y: 0\n        };\n        this.contex = contex;\n        if (y != null) {\n            this.pointA.x = x;\n            this.pointA.y = y;\n        }\n        this.angle = angle;\n        this.lenght = ln;\n    }\n    /**\n     * to\n     */\n    TenticlePart.prototype.to = function (targetX, targetY) {\n        var tg = new Vector_1.Vector(targetX | 0, targetY | 0);\n        var dir = Vector_1.Vector.subtract(tg, this.pointA);\n        this.angle = dir.heading();\n        dir.setMagnitude(-this.lenght);\n        this.pointA = Vector_1.Vector.add(tg, dir);\n    };\n    /**\n     * update\n     */\n    TenticlePart.prototype.update = function () {\n        this.calculate();\n    };\n    /**\n     * calculat`e\n     */\n    TenticlePart.prototype.calculate = function () {\n        var dx = this.lenght * Math.cos(this.angle);\n        var dy = this.lenght * Math.sin(this.angle);\n        var dXY = new Vector_1.Vector(dx, dy);\n        this.b = Vector_1.Vector.add(this.pointA, dXY);\n    };\n    /**\n     * draw\n     */\n    TenticlePart.prototype.draw = function () {\n        this.contex.beginPath();\n        this.contex.moveTo(this.pointA.x, this.pointA.y);\n        this.contex.lineTo(this.b.x, this.b.y);\n        this.contex.stroke();\n        this.contex.beginPath();\n        this.contex.fillStyle = 'red';\n        this.contex.fill();\n        this.contex.arc(this.pointA.x, this.pointA.y, 2, 0, Math.PI * 2);\n        this.contex.stroke();\n        this.contex.beginPath();\n        this.contex.arc(this.b.x, this.b.y, 2, 0, Math.PI * 2);\n        this.contex.fill();\n        this.contex.stroke();\n    };\n    return TenticlePart;\n}());\nexports.TenticlePart = TenticlePart;\n\n\n//# sourceURL=webpack:///./src/TenticlePart.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nwindow.onload = function () {\n    var tenticles = new Game_1.Game('app-canvas');\n};\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./vendor/Vector.ts":
/*!**************************!*\
  !*** ./vendor/Vector.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Vector = /** @class */ (function () {\n    function Vector(x, y) {\n        this.setX(x);\n        this.setY(y);\n    }\n    Vector.prototype.setX = function (x) {\n        if (x === void 0) { x = 0; }\n        this.x = x;\n    };\n    Vector.prototype.setY = function (y) {\n        if (y === void 0) { y = 0; }\n        this.y = y;\n    };\n    /**\n     * Retrieves the magnitude/lenght of the magnitude;\n     */\n    Vector.prototype.magnitude = function () {\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    };\n    /**\n     * Normilizes the vector by dividing it by its magnitude\n     */\n    Vector.prototype.normilize = function () {\n        var magnitude = this.magnitude();\n        if (magnitude != 0 && magnitude != 1) {\n            this.x = this.x / magnitude;\n            this.y = this.y / magnitude;\n        }\n        return this;\n    };\n    /**\n     * Retrieves radian representation of an angle\n     */\n    Vector.prototype.heading = function () {\n        return Math.atan2(this.y, this.x);\n    };\n    /**\n     * Adds two vectors together\n     */\n    Vector.prototype.add = function (vec, y) {\n        if (y !== undefined) {\n            this.x += vec;\n            this.y += y;\n        }\n        else {\n            this.x += vec.x;\n            this.y += vec.y;\n        }\n        return this;\n    };\n    /**\n     * Subtract two Vectors\n     */\n    Vector.prototype.subtract = function (vec, y) {\n        if (y !== undefined) {\n            this.x -= vec;\n            this.y -= y;\n        }\n        else {\n            this.x -= vec.x;\n            this.y -= vec.y;\n        }\n        return this;\n    };\n    /**\n     * Sets the lenght of Vector\n     */\n    Vector.prototype.setMagnitude = function (magnitude) {\n        this.normilize();\n        this.multiply(magnitude);\n        return this;\n    };\n    /**\n     * Multiplies the Vector by given values\n     *\n     * @param num : number\n     */\n    Vector.prototype.multiply = function (num) {\n        this.x *= num;\n        this.y *= num;\n        return this;\n    };\n    Vector.prototype.magnitudeNorm = function () {\n        return (Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    };\n    Vector.prototype.limit = function (lim) {\n        if (this.magnitudeNorm() > lim * lim) {\n            this.normilize();\n            this.multiply(lim);\n        }\n        return this;\n    };\n    /**\n     * creates new Vector from two other as they are subtracted from each other\n     *\n     * @param base {Vector}\n     * @param sub {Vector}\n     */\n    Vector.subtract = function (base, sub) {\n        return new Vector(base.x - sub.x, base.y - sub.y);\n    };\n    /**\n     * creates new Vector from two other as they are added to each other\n     *\n     * @param base {Vector}\n     * @param sub {Vector}\n     */\n    Vector.add = function (base, add) {\n        return new Vector(base.x + add.x, base.y + add.y);\n    };\n    return Vector;\n}());\nexports.Vector = Vector;\n\n\n//# sourceURL=webpack:///./vendor/Vector.ts?");

/***/ }),

/***/ "./vendor/canvas.ts":
/*!**************************!*\
  !*** ./vendor/canvas.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Canvas = /** @class */ (function () {\n    function Canvas(elId, width, height) {\n        this.frames = 60;\n        this.element = document.getElementById(elId);\n        this.width = width;\n        this.height = height;\n        this.createCanvas(width, height);\n        this.setAnimation();\n    }\n    Canvas.prototype.setFrames = function (fr) {\n        this.frames = fr;\n        this.resetAnimation();\n    };\n    Canvas.prototype.resetAnimation = function () {\n        clearInterval(this.anim);\n        this.setAnimation();\n    };\n    Canvas.prototype.createCanvas = function (width, height) {\n        var _this = this;\n        var canvas = document.createElement(\"canvas\");\n        canvas.setAttribute(\"width\", \"\" + width);\n        canvas.setAttribute(\"height\", \"\" + height);\n        canvas.setAttribute(\"style\", \"border:1px solid #000000\");\n        var context = canvas.getContext(\"2d\");\n        this.element.appendChild(canvas);\n        this.context = context;\n        this.canvas = canvas;\n        this.context.translate(this.width / 2, this.height / 2);\n        this.canvas.addEventListener(\"mousemove\", function (e) {\n            _this.mouseX = e.clientX - _this.width / 2 - 10;\n            _this.mouseY = e.clientY - _this.height / 2 - 10;\n        });\n    };\n    Canvas.prototype.setAnimation = function () {\n        var _this = this;\n        this.anim = setInterval(function () {\n            _this.draw();\n        }, 1000 / this.frames);\n    };\n    return Canvas;\n}());\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./vendor/canvas.ts?");

/***/ })

/******/ });