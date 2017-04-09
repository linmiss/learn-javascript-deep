const val = [1, 2, 3, 4, 5];
let sum = val.reduce((pre, curr, index, arr) => {
    return pre + curr ;
});
console.log(sum);