let nums = 1234567890;
console.log(`input ${nums}`);
let arr = nums.toString().split('').map(num => parseInt(num));
console.log(arr);