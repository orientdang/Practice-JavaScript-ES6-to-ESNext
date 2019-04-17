let arr = [1, 4, 45, 76, 9, 98, 34, 3];
console.log(parseInt(arr.join('').split('').sort((a, b) => b - a).join('')));
