'use strict';

const rocket = document.getElementById('rocket');
const container = document.getElementById('container');

const initialRocketProps = rocket.getBoundingClientRect();
const initialRocketMidX = initialRocketProps.left + (initialRocketProps.width/2);
const initialRocketMidY = initialRocketProps.top + (initialRocketProps.height/2);

container.addEventListener('click', clickHandler);

let currentAngle = 0;
function clickHandler(event) {

  let clickX = event.pageX;
  let clickY = event.pageY;

  const angle = getAngle(initialRocketMidX, initialRocketMidY, clickX, clickY);

  // rocket.style.transform = 'translate(' + (clickX-initialRocketMidX) + 'px,' + (clickY-initialRocketMidY) +'px) rotate(' + currentAngle + 'deg)';
  rocket.style.transform = 'rotate(' + angle + 'deg)';
  // rocket.style.transform = 'translate(' + 0 + 'px,' + 0 +'px)';
}

function getAngle(x1,y1, x2,y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  // let theta = Math.atan2(dx, dy);
  const theta = Math.atan2(dy, dx);
  return ((180/Math.PI) * theta)+90;
}
