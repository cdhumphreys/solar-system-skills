'use strict';

var rocket = document.getElementById('rocket');
var container = document.getElementById('container');

var initialRocketProps = rocket.getBoundingClientRect();
var initialRocketMidX = initialRocketProps.left + initialRocketProps.width / 2;
var initialRocketMidY = initialRocketProps.top + initialRocketProps.height / 2;

container.addEventListener('click', clickHandler);

var currentAngle = 0;
function clickHandler(event) {

  var clickX = event.pageX;
  var clickY = event.pageY;

  var angle = getAngle(initialRocketMidX, initialRocketMidY, clickX, clickY);

  // rocket.style.transform = 'translate(' + (clickX-initialRocketMidX) + 'px,' + (clickY-initialRocketMidY) +'px) rotate(' + currentAngle + 'deg)';
  rocket.style.transform = 'rotate(' + angle + 'deg)';
  // rocket.style.transform = 'translate(' + 0 + 'px,' + 0 +'px)';
}

function getAngle(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  // let theta = Math.atan2(dx, dy);
  var theta = Math.atan2(dy, dx);
  return 180 / Math.PI * theta + 90;
}