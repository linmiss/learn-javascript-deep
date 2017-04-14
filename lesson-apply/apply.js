function avg() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum/arguments.length;
};

console.log(avg(1,2,3,4.5));

let ap = avg.apply(null, [1,2,3,4,5]);

console.log(ap);


//可以隐藏会计作用域
var a = 1;
var b = 2;
(function() {
    var b = 3;
    a += b;
})();

console.log(a); // 4
console.log(b); // 2

//闭包：
function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}
var x = makeAdder(5);
var y = makeAdder(20);
console.log(x(6)); //11
console.log(y(7)); // 27
