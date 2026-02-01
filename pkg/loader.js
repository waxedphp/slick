
// npm install --save ...

//import "slick-carousel-master/slick/slick.js";

let x = require('slick-carousel-master');
//console.log('SLICK ', x, typeof(x));
if (typeof(x) == 'function') {
  globalThis.$ = x(null, globalThis.$);
};

import "slick-carousel-master/slick/slick.css";
import "./plugin.js";
import "./style.css";
