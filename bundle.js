/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\r\n\r\nconst apiKey = '38bec0f55837f761dea9a8f1cb3f670f';\r\n\r\n// Event listener for the search button\r\n\r\nfunction handleSearch() {\r\n  const searchBtn = document.querySelector('#search-btn');\r\n\r\n  searchBtn.addEventListener('click', async (event) => {\r\n    event.preventDefault();\r\n\r\n    const cityName = document.querySelector('#city-name').value;\r\n\r\n    handleFetchedData(cityName);\r\n  });\r\n}\r\n\r\nasync function handleFetchedData(cityName) {\r\n  try {\r\n    const weatherData = await getWeatherData(cityName);\r\n    displayWeather(weatherData);\r\n  } catch (error) {\r\n    document.querySelector(\r\n      '.display-weather'\r\n    ).textContent = `Sever Error: ${error.message}`;\r\n  }\r\n}\r\n\r\nasync function getWeatherData(city) {\r\n  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;\r\n\r\n  const response = await fetch(apiURL);\r\n  if (!response.ok) throw new Error('Failed to fetch weather data.');\r\n\r\n  const data = await response.json();\r\n  return data;\r\n}\r\n\r\nfunction displayWeather(data) {\r\n  const card = document.querySelector('.display-weather');\r\n  card.textContent = '';\r\n\r\n  const degree = document.createElement('p');\r\n  degree.classList.add('display-degree');\r\n  degree.textContent = `${data.main.temp}°C`;\r\n\r\n  const city = document.createElement('p');\r\n  city.classList.add('display-city');\r\n  city.textContent = `${data.name}, ${data.sys.country}`;\r\n\r\n  const info = document.createElement('p');\r\n  info.classList.add('display-info');\r\n  info.textContent = `${data.weather[0].description}`;\r\n\r\n  const otherInfos = document.createElement('div');\r\n  otherInfos.classList.add('other-info-card');\r\n\r\n  otherInfos.innerHTML = `\r\n    <span>Feels Like: ${data.main.feels_like}°C</span>\r\n     <span>Max Temperature: ${data.main.temp_max}°C</span>\r\n    <span>Min Temperature: ${data.main.temp_min}°C</span>\r\n    <span>Humidity: ${data.main.humidity}</span>\r\n    <span>Wind Speed: ${data.wind.speed}</span>\r\n  `;\r\n\r\n  card.append(degree, city, info, otherInfos);\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  handleFetchedData('London'); //default on load\r\n  handleSearch(); //listen for search\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;