// let arr = [54, 546, 548, 60];
// console.log(arr.sort((a, b) => b - a).join(','));

// function _join(a, b) {

// }
var maxNumber = (a) => +(a.sort((x, y) => +("" + y + x) - +("" + x + y)).join(''));
var b = [54, 546, 548, 60];
console.log([b].map(maxNumber));