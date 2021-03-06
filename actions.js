(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./router.js"));
	else if(typeof define === 'function' && define.amd)
		define(["./router.js"], factory);
	else if(typeof exports === 'object')
		exports["actions.js"] = factory(require("./router.js"));
	else
		root["actions.js"] = factory(root["./router.js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setStatus = exports.activateClient = exports.reroutePage = exports.setShell = exports.navigateToUrl = exports.gotoPageIndex = exports.setPage = exports.REROUTE_PAGE = exports.SET_SHELL = exports.NAVIGATE_TO_URL = exports.GOTO_PAGE_INDEX = exports.SET_STATUS = exports.SET_PAGE = undefined;

	var _router = __webpack_require__(15);

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var SET_PAGE = exports.SET_PAGE = 'PLATFORM__SET_PAGE';
	var SET_STATUS = exports.SET_STATUS = 'PLATFORM__SET_STATUS';
	var GOTO_PAGE_INDEX = exports.GOTO_PAGE_INDEX = 'PLATFORM__GOTO_PAGE_INDEX';
	var NAVIGATE_TO_URL = exports.NAVIGATE_TO_URL = 'PLATFORM__NAVIGATE_TO_URL';
	var SET_SHELL = exports.SET_SHELL = 'PLATFORM__SET_SHELL';
	var REROUTE_PAGE = exports.REROUTE_PAGE = 'PLATFORM__REROUTE_PAGE';

	var setPage = exports.setPage = function setPage(url) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _ref$urlParams = _ref.urlParams;
	  var urlParams = _ref$urlParams === undefined ? {} : _ref$urlParams;
	  var _ref$queryParams = _ref.queryParams;
	  var queryParams = _ref$queryParams === undefined ? {} : _ref$queryParams;
	  var _ref$hashParams = _ref.hashParams;
	  var hashParams = _ref$hashParams === undefined ? {} : _ref$hashParams;
	  var _ref$referrer = _ref.referrer;
	  var referrer = _ref$referrer === undefined ? '' : _ref$referrer;
	  return {
	    type: SET_PAGE,
	    payload: { url: url, urlParams: urlParams, queryParams: queryParams, hashParams: hashParams, referrer: referrer }
	  };
	};

	var gotoPageIndex = exports.gotoPageIndex = function gotoPageIndex(pageIndex, pathName) {
	  var _ref2 = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var _ref2$queryParams = _ref2.queryParams;
	  var queryParams = _ref2$queryParams === undefined ? {} : _ref2$queryParams;
	  var _ref2$hashParams = _ref2.hashParams;
	  var hashParams = _ref2$hashParams === undefined ? {} : _ref2$hashParams;
	  var _ref2$referrer = _ref2.referrer;
	  var referrer = _ref2$referrer === undefined ? '' : _ref2$referrer;
	  return {
	    type: GOTO_PAGE_INDEX,
	    payload: { pageIndex: pageIndex, pathName: pathName, queryParams: queryParams, hashParams: hashParams, referrer: referrer }
	  };
	};

	var navigateToUrl = exports.navigateToUrl = function navigateToUrl(method, pathName) {
	  var _ref3 = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var _ref3$queryParams = _ref3.queryParams;
	  var queryParams = _ref3$queryParams === undefined ? {} : _ref3$queryParams;
	  var _ref3$hashParams = _ref3.hashParams;
	  var hashParams = _ref3$hashParams === undefined ? {} : _ref3$hashParams;
	  var _ref3$bodyParams = _ref3.bodyParams;
	  var bodyParams = _ref3$bodyParams === undefined ? {} : _ref3$bodyParams;
	  var _ref3$referrer = _ref3.referrer;
	  var referrer = _ref3$referrer === undefined ? '' : _ref3$referrer;
	  return {
	    type: NAVIGATE_TO_URL,
	    payload: { method: method, pathName: pathName, queryParams: queryParams, hashParams: hashParams, bodyParams: bodyParams, referrer: referrer }
	  };
	};

	var setShell = exports.setShell = function setShell(shell) {
	  return { type: SET_SHELL, shell: shell };
	};

	var reroutePage = exports.reroutePage = function reroutePage() {
	  return function () {
	    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch, getState) {
	      var currentPage;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              currentPage = getState().platform.currentPage;


	              dispatch(navigateToUrl(_router.METHODS.GET, currentPage.url, {
	                queryParams: currentPage.queryParams,
	                hashParams: currentPage.hashParams,
	                bodyParams: {},
	                referrer: currentPage.referrer
	              }));

	            case 2:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined);
	    }));

	    return function (_x4, _x5) {
	      return _ref4.apply(this, arguments);
	    };
	  }();
	};

	var activateClient = exports.activateClient = function activateClient() {
	  return function () {
	    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch, getState) {
	      var _getState, platform;

	      return regeneratorRuntime.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _getState = getState();
	              platform = _getState.platform;

	              if (platform.shell) {
	                _context2.next = 4;
	                break;
	              }

	              return _context2.abrupt('return');

	            case 4:

	              dispatch(setShell(false));
	              dispatch(reroutePage());

	            case 6:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, undefined);
	    }));

	    return function (_x6, _x7) {
	      return _ref5.apply(this, arguments);
	    };
	  }();
	};

	var setStatus = exports.setStatus = function setStatus(status) {
	  return {
	    type: SET_STATUS,
	    payload: { status: status }
	  };
	};

	exports.default = {
	  SET_PAGE: SET_PAGE,
	  SET_STATUS: SET_STATUS,
	  GOTO_PAGE_INDEX: GOTO_PAGE_INDEX,
	  NAVIGATE_TO_URL: NAVIGATE_TO_URL,
	  SET_SHELL: SET_SHELL,
	  REROUTE_PAGE: REROUTE_PAGE,
	  setPage: setPage,
	  setStatus: setStatus,
	  gotoPageIndex: gotoPageIndex,
	  navigateToUrl: navigateToUrl,
	  setShell: setShell,
	  reroutePage: reroutePage
	};

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }

/******/ })
});
;