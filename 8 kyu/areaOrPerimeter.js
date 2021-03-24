/**
 * You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
 * If it is a square, return its area. If it is a rectangle, return its perimeter.
 * 
 * @param {integer} l 
 * @param {integer} w 
 */
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    let area = l * w;
    return area;
  } else {
    let perimeter = 2 * (l + w);
    return perimeter;
  }
};

console.log(areaOrPerimeter(6, 10));