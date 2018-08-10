(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = load_carousel;

var _carousel = require("../modules/carousel");

var _carousel2 = _interopRequireDefault(_carousel);

var _slider = require("../data/slider");

var _slider2 = _interopRequireDefault(_slider);

var _carousel3 = require("../data/carousel");

var _carousel4 = _interopRequireDefault(_carousel3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validar_count_items = function validar_count_items(count) {
	var repeat = 0;

	if (count == 1) {
		repeat = 5;
	} else if (count == 2) {
		repeat = 2;
	} else if (count >= 3 && count < 6) {
		repeat = 1;
	} else {
		repeat = 0;
	}
	return repeat;
};

var loadCarousel = function loadCarousel(ancho, alto, containerElem, itemsElems) {
	var count_items = itemsElems.length;
	var repeat = validar_count_items(count_items);

	if (ancho >= 468 & ancho < 640) {
		(0, _carousel2.default)(containerElem, itemsElems, repeat, false);
	} else if (ancho >= 640 & ancho < 1024) {
		(0, _carousel2.default)(containerElem, itemsElems, repeat, false);
	} else if (ancho >= 1024) {
		(0, _carousel2.default)(containerElem, itemsElems, repeat, false);
	} else {
		(0, _carousel2.default)(containerElem, itemsElems, repeat, false);
	}
};

function load_carousel() {
	var d = document,
	    ancho = d.body.clientWidth,
	    alto = d.body.clientHeight;

	var items_html_slider = [];
	_slider2.default.map(function (item, i) {
		var child = d.createElement('div');
		child.classList.add('carousel-item');

		var child_content = "\n\t    <a class=\"carousel-item__link hover-dark\" href=\"#" + i + "\">\n\t      <img class=\"img-cover item-lightbox\" src=\"" + item.img + "\" alt=\"" + item.name + "\"/>\n\t      <div class=\"carousel-item__content\">\n\t        <div class=\"carousel-item__data\">\n\t        \t<span>" + item.name + "</span>\n\t        </div>\n\t      </div>\n\t    </a>\n      ";

		child.innerHTML = child_content;
		items_html_slider.push(child);
	});

	var items_html_carousel = [];
	_carousel4.default.map(function (item, i) {
		var child = d.createElement('div');
		child.classList.add('carousel-item');

		var child_content = "\n\t    <a class=\"carousel-item__link hover-dark\" href=\"#" + i + "\">\n\t      <img class=\"img-cover item-lightbox\" src=\"" + item.img + "\" alt=\"" + item.name + "\"/>\n\t      <div class=\"carousel-item__content\">\n\t        <div class=\"carousel-item__data\">\n\t        \t<span>" + item.name + "</span>\n\t        </div>\n\t        <div class=\"carousel-item__tags\">\n\t        \t<span class=\"icon-link\"></span>\n\t        </div>\n\t      </div>\n\t    </a>\n      ";

		child.innerHTML = child_content;
		items_html_carousel.push(child);
	});

	var containerSlider = d.querySelector('#slider'),
	    containerCarousel = d.querySelector('#carousel'),
	    itemsElemsSlider = items_html_slider,
	    itemsElemsCarousel = items_html_carousel;

	// loadCarousel(ancho, alto, containerSlider, itemsElemsSlider);
	loadCarousel(ancho, alto, containerCarousel, itemsElemsCarousel);
}

},{"../data/carousel":4,"../data/slider":6,"../modules/carousel":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = load_carousel;

var _lightbox = require("../modules/lightbox");

var _lightbox2 = _interopRequireDefault(_lightbox);

var _gallery = require("../data/gallery");

var _gallery2 = _interopRequireDefault(_gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load_carousel() {

	var containerElem = document.querySelector('#gallery-2');
	(0, _lightbox2.default)(containerElem, _gallery2.default);
}

},{"../data/gallery":5,"../modules/lightbox":9}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = load_masonry_layout;

var _masonryLayout = require("../modules/masonry-layout");

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _gallery = require("../data/gallery");

var _gallery2 = _interopRequireDefault(_gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadMasonryLayout = function loadMasonryLayout(ancho, alto, containerElem, itemsElems) {
	if (ancho >= 468 & ancho < 640) {
		(0, _masonryLayout2.default)(containerElem, itemsElems, 2);
	} else if (ancho >= 640 & ancho < 1024) {
		(0, _masonryLayout2.default)(containerElem, itemsElems, 3);
	} else if (ancho >= 1024) {
		(0, _masonryLayout2.default)(containerElem, itemsElems, 4);
	} else {
		(0, _masonryLayout2.default)(containerElem, itemsElems, 1);
	}
};

function load_masonry_layout() {
	var d = document,
	    ancho = d.body.clientWidth,
	    alto = d.body.clientHeight;

	var items_html = [];
	_gallery2.default.map(function (item, i) {
		var child = document.createElement('div');
		child.classList.add('gallery-item', 'masonry-item');
		child.classList.add('hover-dark', 'hover-dark--h-auto');

		var child_content = "\n\t      <img class=\"img-lightbox\" data-lightbox-key=\"" + (i + 1) + "\" src=\"" + item.img + "\" alt=\"" + item.name + "\"/>\n\t      <div class=\"gallery-item__content\">\n\t        <div class=\"gallery-item__data\">\n\t        \t" + item.name + "\n\t        </div>\n\t        <div class=\"gallery-item__tags\">\n\t        </div>\n\t      </div>\n      ";

		child.innerHTML = child_content;
		items_html.push(child);
	});

	var containerElem = d.querySelector('#gallery-2'),

	// itemsElems= items,
	itemsElems = items_html;

	loadMasonryLayout(ancho, alto, containerElem, itemsElems);

	window.addEventListener("resize", function (event) {
		var d2 = document,
		    ancho2 = d2.body.clientWidth,
		    alto2 = d2.body.clientHeight;
		loadMasonryLayout(ancho2, alto2, containerElem, itemsElems);
	});
}

},{"../data/gallery":5,"../modules/masonry-layout":10}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{ name: 'Mi imagen #1', img: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=333&q=80' }, { name: 'Mi imagen #2', img: 'https://images.unsplash.com/photo-1433588641602-7c1083c4f0e2?ixlib=rb-0.3.5&s=5a2042a633c31af1371fed35bf004ef3&auto=format&fit=crop&w=750&q=80' }, { name: 'Mi imagen #3', img: 'https://images.unsplash.com/photo-1511365019140-00ce2774d906?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2666d7daeebc6db3567ae210bb54e6&auto=format&fit=crop&w=334&q=80' }, { name: 'Mi imagen #4', img: 'https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-0.3.5&s=a664daaac0787f177df35f4c46d0b15c&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #5', img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=164d6f8e945f1b5012d4da77cc864586&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #6', img: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=46a1d7bc1b621e78b65bcd999429c169&auto=format&fit=crop&w=500&q=60' }];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{ name: 'Mi imagen #1', img: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=333&q=80' }, { name: 'Mi imagen #2', img: 'https://images.unsplash.com/photo-1433588641602-7c1083c4f0e2?ixlib=rb-0.3.5&s=5a2042a633c31af1371fed35bf004ef3&auto=format&fit=crop&w=750&q=80' }, { name: 'Mi imagen #3', img: 'https://images.unsplash.com/photo-1511365019140-00ce2774d906?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2666d7daeebc6db3567ae210bb54e6&auto=format&fit=crop&w=334&q=80' }, { name: 'Mi imagen #4', img: 'https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-0.3.5&s=a664daaac0787f177df35f4c46d0b15c&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #5', img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=164d6f8e945f1b5012d4da77cc864586&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #6', img: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=46a1d7bc1b621e78b65bcd999429c169&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #1', img: 'https://images.unsplash.com/photo-1524511858955-5d3bf3afd42e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b85630faf9345cddb3622056bb2a5fa&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #2', img: 'https://images.unsplash.com/photo-1492581654245-5a258fbbecce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1897f3133ab6bfdaf27379d2f39e01f7&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #3', img: 'https://images.unsplash.com/photo-1517382738648-6544f2e0d47a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f10eedc57cd3d79310c5b3a92c93a018&auto=format&fit=crop&w=1350&q=80' }, { name: 'Mi imagen #5', img: 'https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=456245a5bd2285aab008f61a9c3ba5ed&auto=format&fit=crop&w=634&q=80' }, { name: 'Mi imagen #4', img: 'https://images.unsplash.com/photo-1513715124404-39c7a1a6ddc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53c0fb93fbcbf5725bd031f698ea9857&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #6', img: 'https://images.unsplash.com/photo-1521844951825-11a44040b513?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29ba5a5b8eff22fe5db121568360ff02&auto=format&fit=crop&w=679&q=80' }, { name: 'Mi imagen #6', img: 'https://images.unsplash.com/photo-1450297756549-a553121ddff2?ixlib=rb-0.3.5&s=94440e0dbb1f589552aa80655aa5d983&auto=format&fit=crop&w=500&q=60' }, { name: 'Mi imagen #6', img: 'https://images.unsplash.com/photo-1476901720811-381e9d6f29c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d937deef161b28bfa800922197e3418d&auto=format&fit=crop&w=500&q=60' }];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{ name: 'Mi imagen #1', img: 'https://images.unsplash.com/photo-1520110594912-8c0c80561889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=52561e7e725247a89ef35a8a4dd2e7c0&auto=format&fit=crop&w=634&q=80' }, { name: 'Mi imagen #2', img: 'https://images.unsplash.com/photo-1519838804353-8f76f7a85588?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64580d693f91c82feec03cac83e8af08&auto=format&fit=crop&w=1350&q=80' }, { name: 'Mi imagen #3', img: 'https://images.unsplash.com/photo-1517382738648-6544f2e0d47a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f10eedc57cd3d79310c5b3a92c93a018&auto=format&fit=crop&w=1350&q=80' }, { name: 'Mi imagen #4', img: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80' }, { name: 'Mi imagen #5', img: 'https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=456245a5bd2285aab008f61a9c3ba5ed&auto=format&fit=crop&w=634&q=80' }];

},{}],7:[function(require,module,exports){
"use strict";

var _loadMasonryLayout = require("./config/load-masonry-layout");

var _loadMasonryLayout2 = _interopRequireDefault(_loadMasonryLayout);

var _loadCarousel = require("./config/load-carousel");

var _loadCarousel2 = _interopRequireDefault(_loadCarousel);

var _loadLightbox = require("./config/load-lightbox");

var _loadLightbox2 = _interopRequireDefault(_loadLightbox);

var _menu = require("./modules/menu");

var _menu2 = _interopRequireDefault(_menu);

var _masonryLayout = require("./modules/masonry-layout");

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _carousel = require("./modules/carousel");

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config
(0, _menu2.default)();

// modules

(0, _loadMasonryLayout2.default)();
(0, _loadCarousel2.default)();
(0, _loadLightbox2.default)();

var main_menu = document.querySelector("#main-menu");

var itemsMenuAll = Array.prototype.slice.apply(document.querySelectorAll('.main-menu__item'));

var activeItemMenu = function activeItemMenu(elemItem) {
	var itemsMenuNotActive = Array.prototype.slice.apply(document.querySelectorAll('.main-menu > .main-menu__item:not(.open)'));
	var menu = elemItem.parentNode;

	if (menu.classList.contains('sub-menu')) {
		itemsMenuNotActive.map(function (item) {
			return item.classList.remove('open');
		});
		elemItem.classList.toggle('open');
	} else {
		if (elemItem.classList.contains('open')) {
			if (elemItem.parentNode.classList.contains('main-menu')) {
				// console.log(elemItem);
				elemItem.classList.toggle('open');
			}
			// console.log('padre');
		} else {
			itemsMenuAll.map(function (item) {
				return item.classList.remove('open');
			});
			elemItem.classList.toggle('open');
		}
	}
};

main_menu.addEventListener("click", function (e) {
	var elem = e.target;

	if (elem.classList.contains('main-menu__link') || elem.classList.contains('sub-menu__link')) {
		var elemItem = elem.parentNode;
		activeItemMenu(elemItem);
	} else if (elem.classList.contains('i-link')) {
		var _elemItem = elem.parentNode.parentNode;
		activeItemMenu(_elemItem);
	}
});

},{"./config/load-carousel":1,"./config/load-lightbox":2,"./config/load-masonry-layout":3,"./modules/carousel":8,"./modules/masonry-layout":10,"./modules/menu":11}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = carousel;
function carousel(containerElem, itemsElems) {
  var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var automatic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


  // let parent = containerElem;
  var containerElemParent = containerElem.parentNode;
  // console.log(itemsElems);
  // console.log(containerElemParent);

  var first = void 0,
      last = void 0;

  var items = itemsElems;

  containerElem.innerHTML = '';

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var clone_item = item.cloneNode(true);

    containerElem.appendChild(clone_item);

    if (i == 0) {
      first = clone_item;
    } else if (i == items.length - 1) {
      last = clone_item;
    }
  }

  if (items.length == 2) {
    items = items.reverse();
    containerElem.insertBefore(last, first);
  } else if (items.length > 2) {
    containerElem.insertBefore(last, first);
  }

  for (var c = 0; c < repeat; c++) {
    var items_new = containerElem.querySelectorAll('.carousel-item');
    Array.prototype.forEach.call(items_new, function (el, i) {
      var nuevo = el.cloneNode(true);
      containerElem.appendChild(nuevo);
    });
  }

  // console.log(parent);

  containerElemParent.addEventListener('click', function (e) {
    // NAVEGACIÓN CAROUSEL
    var first = void 0,
        last = void 0;
    first = containerElem.querySelector('.carousel-item');
    last = containerElem.querySelector('.carousel-item:last-child');

    if (e.target.classList.contains('arrow-right')) {
      containerElem.appendChild(first);
    } else if (e.target.classList.contains('arrow-left')) {
      containerElem.insertBefore(last, first);
    }
  });

  if (automatic) {
    setInterval(function () {
      var first = containerElem.querySelector('.carousel-item');
      containerElem.appendChild(first);
    }, 8000);
  }
}

// export default function carousel(){
//   let carousel_module= document.querySelector('.carousel-module');

//   let first, last, parent;
//   parent = document.querySelector('.img-container');
//   first = parent.querySelector('.item-img');
//   last = parent.querySelector('.item-img:last-child');

//   parent.insertBefore(last, first);

//   // var nuevo= first.cloneNode(true);
//   // console.log(nuevo);
//   // parent.appendChild(nuevo);
//   // console.log(parent);


//   for(let i = 1; i <= 2; i++){
//     let items = parent.querySelectorAll('.item-img');
//       Array.prototype.forEach.call(items, function(el, i){
//       var nuevo= el.cloneNode(true);
//       // console.log(nuevo);
//       parent.appendChild(nuevo);
//     });
//   }

//   carousel_module.addEventListener('click', (e)=> {
//     let first, last;
//     // parent = document.querySelector('.img-container');
//     first = parent.querySelector('.item-img');
//     last = parent.querySelector('.item-img:last-child');

//     if (e.target.classList.contains('arrow-right')) {
//       parent.appendChild(first);
//     }
//     if (e.target.classList.contains('arrow-left')) {
//       parent.insertBefore(last, first);
//     }
//   });
// }

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lightbox;

var _gallery = require('../data/gallery');

var _gallery2 = _interopRequireDefault(_gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var closeLightBox = function closeLightBox(containerElem) {
  var body = document.body;
  var closeElement = containerElem.querySelector('.lightbox-close');
  closeElement.addEventListener('click', function (e) {
    body.removeChild(containerElem);
    body.classList.toggle('not-scroll-v');
    console.log("close");
  });
};

function lightbox(containerElem, itemsElems) {
  var body = document.body;
  containerElem.addEventListener('click', function (e) {
    if (e.target.classList.contains('img-lightbox')) {
      var lightboxKey = e.target.dataset.lightboxKey,
          item = itemsElems[lightboxKey - 1];

      var lightboxElement = document.createElement('div');
      lightboxElement.id = "lightbox";

      lightboxElement.innerHTML = '\n      <div class="lightbox-overlay">\n        <div class="lightbox-close icon-cancel"></div>\n        <div id="lightbox-container" class="lightbox-container">\n          <div class="lightbox-item">\n            <img class="lightbox-item__img" src="' + item.img + '" alt="' + item.name + '"/>\n            <div class="lightbox-item__data">\n              <span>' + item.name + '</span>\n            </div>\n          </div>\n        </div>\n        <div class="lightbox-arrow-left icon-angle-left"></div>\n        <div class="lightbox-arrow-right icon-angle-right"></div>\n      </div>';

      body.appendChild(lightboxElement);
      closeLightBox(lightboxElement);
      // body.setAttribute('style','overflow-y: hidden');
      body.classList.toggle('not-scroll-v');

      lightboxElement.addEventListener('click', function (e) {
        // console.log(e.target);
        if (e.target.classList.contains("lightbox-overlay")) {
          body.removeChild(lightboxElement);
          body.classList.toggle('not-scroll-v');
        } else if (e.target.classList.contains("lightbox-arrow-left")) {
          console.log("left");

          if (lightboxKey > 0) {
            lightboxKey--;
          } else {
            lightboxKey = itemsElems.length;
          }

          var lightboxContainer = lightboxElement.querySelector("#lightbox-container");
          lightboxContainer.innerHTML = '';

          var indice = lightboxKey - 1;

          if (indice < 0) {
            indice = itemsElems.length - 1;
            lightboxKey = itemsElems.length;
          }

          var _item = itemsElems[indice];

          lightboxContainer.innerHTML = '\n            <div class="lightbox-item">\n              <img class="lightbox-item__img" src="' + _item.img + '" alt="' + _item.name + '"/>\n              <div class="lightbox-item__data">\n                <span>' + _item.name + '</span>\n              </div>\n            </div>\n            ';
        } else if (e.target.classList.contains("lightbox-arrow-right")) {
          console.log("right");

          if (lightboxKey < itemsElems.length) {
            lightboxKey++;
          } else {
            lightboxKey = 0;
          }

          var _lightboxContainer = lightboxElement.querySelector("#lightbox-container");
          _lightboxContainer.innerHTML = '';

          var _indice = lightboxKey - 1;

          if (_indice < 0) {
            _indice = 0;
            lightboxKey = 1;
          }

          var _item2 = itemsElems[_indice];

          _lightboxContainer.innerHTML = '\n            <div class="lightbox-item">\n              <img class="lightbox-item__img" src="' + _item2.img + '" alt="' + _item2.name + '"/>\n              <div class="lightbox-item__data">\n                <span>' + _item2.name + '</span>\n              </div>\n            </div>\n            ';
        }
      });
    }
  });
}

},{"../data/gallery":5}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = masonry_layout;
function masonry_layout(containerElem, itemsElems, columns) {
  containerElem.innerHTML = '';
  containerElem.className = '';

  containerElem.classList.add('masonry-layout', 'columns-' + columns);
  var containerElemParent = containerElem.parentNode,
      columnsElements = [];
  // console.log(containerElemParent);

  setTimeout(function () {
    containerElemParent.setAttribute('style', 'display: block');
  }, 250);

  for (var i = 1; i <= columns; i++) {
    var column = document.createElement('div');
    column.classList.add('masonry-column', 'column-' + i);
    containerElem.appendChild(column);
    columnsElements.push(column);
  }

  for (var m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
    for (var n = 0; n < columns; n++) {
      var item = itemsElems[m * columns + n];
      if (item !== undefined) {
        // CLONAR NODOS PARA USAR EN VARIOS CONTENEDORES
        var clone_item = item.cloneNode(true);
        columnsElements[n].appendChild(clone_item);
      }
    }
  }

  // for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
  //   for(let n = 0; n < columns; n++){
  //     let item = itemsElems[m * columns + n];
  //     if(item !== undefined){ 
  //       let child = document.createElement('div'),
  //           elemImg= document.createElement('img');

  //       child.classList.add('gallery-item','masonry-item');
  //       elemImg.setAttribute('alt', item.name);
  //       elemImg.setAttribute('src', item.img);
  //       child.appendChild(elemImg);

  //       columnsElements[n].appendChild(child);
  //     }
  //   }
  // }

  // -------------------------------------
  // // Con elementos e items del DOM
  // for( let i = 1; i <= columns; i++){
  //   let column = document.createElement('div');
  //   column.classList.add('masonry-column', `column-${i}`);
  //   containerElem.appendChild(column);
  //   columnsElements.push(column);
  // }

  // for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
  //   for(let n = 0; n < columns; n++){
  //     let item = itemsElems[m * columns + n];
  //     if(item !== undefined){      
  //       columnsElements[n].appendChild(item);
  //       item.classList.add('masonry-item');
  //     }
  //   }
  // }
}

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = toggle_menu;
function toggle_menu() {
	// console.log("menu");

	var d = document;
	// let body= d.body;
	var btn_menu = d.getElementById("toggle-menu"),
	    menu = d.getElementById("main-menu"),
	    off_canvas_layer = d.getElementById("off-canvas-layer");

	var toggle = function toggle() {
		btn_menu.classList.toggle("menu-close");
		menu.classList.toggle("show");
		off_canvas_layer.classList.toggle("show");
	};

	btn_menu.addEventListener("click", function () {
		toggle();
	});

	off_canvas_layer.addEventListener("click", function () {
		toggle();
	});
}

},{}]},{},[7]);

//# sourceMappingURL=scripts.js.map
