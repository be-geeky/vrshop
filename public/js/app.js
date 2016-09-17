/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("$('document').ready(function(){\n    /**\n     * Google analytics\n     */\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n    ga('create', 'UA-69792155-9', 'auto');\n    ga('send', 'pageview');\n\n    /**\n     * Toggle tooltip function\n     */\n    $('[data-toggle=\"tooltip\"]').tooltip();\n\n    /**\n     * Filter menu toggling function\n     */\n    $('.side_bar_header').on('click', function () {\n        $(this).parent().children('.panel-body').slideToggle();\n    });\n\n    /**\n     * Init collapse filter menu on small screens\n     */\n    $(function() {\n        if ($(window).width() < 768) {\n            $('.side_bar_header').parent().children('.panel-body').slideToggle();\n        }\n    });\n\n    /**\n     * Price range slider\n     */\n    $(\"#price_slider\").slider({\r\n        range: true,\r\n        step: 5,\r\n        min: $(\"#price_slider\").data('price-filter-min'),\r\n        max: $(\"#price_slider\").data('price-filter-max'),\r\n        values: [\r\n            $(\"#price_slider_min\").val(),\r\n            $(\"#price_slider_max\").val(),\r\n        ],\r\n        slide: function(event, ui) {\r\n            $(\"#price_slider_min\").val(ui.values[0]);\r\n            $(\"#price_slider_max\").val(ui.values[1]);\r\n            $('#filter_price_field').text('$' + ui.values[0] + ' - $' + ui.values[1]);\r\n        }\r\n    });\r\n\r\n    /**\n    * Init price range slider\n    */\n    $(\"#price_slider_min\").val($(\"#price_slider\").slider(\"values\", 0));\n    $(\"#price_slider_max\").val($(\"#price_slider\").slider(\"values\", 1));\n    $('#filter_price_field').text('$' + $('#price_slider').slider(\"values\", 0) + ' - $' + $('#price_slider').slider(\"values\", 1));\n\n    /**\n     * Star rating function\n     */\n    $('.article_rating').each(function(){\n        var this$1 = this;\n\n        var rating = $(this).data('rating');\n        $(this).empty();\n\n        // Add not rated icon\n        if (rating === 'Not rated yet') {\n            $(this).append('<span class=\"glyphicon glyphicon glyphicon-remove-sign glyphicon-star-grey\" aria-hidden=\"true\"></span>');\n            return true;\n        }\n\n\n        rating = parseInt(rating);\n        rating = Math.round(rating/20);\n\n        // Add green stars\n        for (var i = 0; i < rating; i++) {\n            $(this$1).append('<span class=\"glyphicon glyphicon-star glyphicon-star-green\" aria-hidden=\"true\"></span>');\n        }\n\n        // Add grey stars\n        for (var i = 0; i < 5 - rating; i++) {\n            $(this$1).append('<span class=\"glyphicon glyphicon-star glyphicon-star-grey\" aria-hidden=\"true\"></span>');\n        }\n\n    });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIiQoJ2RvY3VtZW50JykucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAvKipcbiAgICAgKiBHb29nbGUgYW5hbHl0aWNzXG4gICAgICovXG4gICAgKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuICAgICAgICAoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcbiAgICAgICAgbT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxuICAgIH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTtcblxuICAgIGdhKCdjcmVhdGUnLCAnVUEtNjk3OTIxNTUtOScsICdhdXRvJyk7XG4gICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0b29sdGlwIGZ1bmN0aW9uXG4gICAgICovXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuICAgIC8qKlxuICAgICAqIEZpbHRlciBtZW51IHRvZ2dsaW5nIGZ1bmN0aW9uXG4gICAgICovXG4gICAgJCgnLnNpZGVfYmFyX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignLnBhbmVsLWJvZHknKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSW5pdCBjb2xsYXBzZSBmaWx0ZXIgbWVudSBvbiBzbWFsbCBzY3JlZW5zXG4gICAgICovXG4gICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAkKCcuc2lkZV9iYXJfaGVhZGVyJykucGFyZW50KCkuY2hpbGRyZW4oJy5wYW5lbC1ib2R5Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUHJpY2UgcmFuZ2Ugc2xpZGVyXG4gICAgICovXG4gICAgJChcIiNwcmljZV9zbGlkZXJcIikuc2xpZGVyKHtcclxuICAgICAgICByYW5nZTogdHJ1ZSxcclxuICAgICAgICBzdGVwOiA1LFxyXG4gICAgICAgIG1pbjogJChcIiNwcmljZV9zbGlkZXJcIikuZGF0YSgncHJpY2UtZmlsdGVyLW1pbicpLFxyXG4gICAgICAgIG1heDogJChcIiNwcmljZV9zbGlkZXJcIikuZGF0YSgncHJpY2UtZmlsdGVyLW1heCcpLFxyXG4gICAgICAgIHZhbHVlczogW1xyXG4gICAgICAgICAgICAkKFwiI3ByaWNlX3NsaWRlcl9taW5cIikudmFsKCksXHJcbiAgICAgICAgICAgICQoXCIjcHJpY2Vfc2xpZGVyX21heFwiKS52YWwoKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNsaWRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgJChcIiNwcmljZV9zbGlkZXJfbWluXCIpLnZhbCh1aS52YWx1ZXNbMF0pO1xyXG4gICAgICAgICAgICAkKFwiI3ByaWNlX3NsaWRlcl9tYXhcIikudmFsKHVpLnZhbHVlc1sxXSk7XHJcbiAgICAgICAgICAgICQoJyNmaWx0ZXJfcHJpY2VfZmllbGQnKS50ZXh0KCckJyArIHVpLnZhbHVlc1swXSArICcgLSAkJyArIHVpLnZhbHVlc1sxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXG4gICAgKiBJbml0IHByaWNlIHJhbmdlIHNsaWRlclxuICAgICovXG4gICAgJChcIiNwcmljZV9zbGlkZXJfbWluXCIpLnZhbCgkKFwiI3ByaWNlX3NsaWRlclwiKS5zbGlkZXIoXCJ2YWx1ZXNcIiwgMCkpO1xuICAgICQoXCIjcHJpY2Vfc2xpZGVyX21heFwiKS52YWwoJChcIiNwcmljZV9zbGlkZXJcIikuc2xpZGVyKFwidmFsdWVzXCIsIDEpKTtcbiAgICAkKCcjZmlsdGVyX3ByaWNlX2ZpZWxkJykudGV4dCgnJCcgKyAkKCcjcHJpY2Vfc2xpZGVyJykuc2xpZGVyKFwidmFsdWVzXCIsIDApICsgJyAtICQnICsgJCgnI3ByaWNlX3NsaWRlcicpLnNsaWRlcihcInZhbHVlc1wiLCAxKSk7XG5cbiAgICAvKipcbiAgICAgKiBTdGFyIHJhdGluZyBmdW5jdGlvblxuICAgICAqL1xuICAgICQoJy5hcnRpY2xlX3JhdGluZycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHJhdGluZyA9ICQodGhpcykuZGF0YSgncmF0aW5nJyk7XG4gICAgICAgICQodGhpcykuZW1wdHkoKTtcblxuICAgICAgICAvLyBBZGQgbm90IHJhdGVkIGljb25cbiAgICAgICAgaWYgKHJhdGluZyA9PT0gJ05vdCByYXRlZCB5ZXQnKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtc2lnbiBnbHlwaGljb24tc3Rhci1ncmV5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPicpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJhdGluZyA9IHBhcnNlSW50KHJhdGluZyk7XG4gICAgICAgIHJhdGluZyA9IE1hdGgucm91bmQocmF0aW5nLzIwKTtcblxuICAgICAgICAvLyBBZGQgZ3JlZW4gc3RhcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXRpbmc7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyIGdseXBoaWNvbi1zdGFyLWdyZWVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGdyZXkgc3RhcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1IC0gcmF0aW5nOyBpKyspIHtcbiAgICAgICAgICAgICQodGhpcykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhciBnbHlwaGljb24tc3Rhci1ncmV5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPicpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);