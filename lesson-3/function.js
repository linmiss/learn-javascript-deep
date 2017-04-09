function sayHi(name, message) {
    return {
        'name': name,
        'message': message,
    }
};

//console.log(sayHi('linmiss', 'i love syou!'));


//变量的提升：
let add = (num1, num2) => {
    var sum = num1 + num2; //sum 是局部变量
    return sum;
};

//console.log(add(1, 2));
//console.log(sum); //sum is undefined

let add1 = (num1, num2) => {
    sum = num1 + num2;
    return sum;
}

//console.log(add1(1, 2));
//console.log(sum);//3



/**
 * 变量的查询机制：
 * 			先从函数内部查，如果有此变量到此为止
 * 			如果没有那么从window全句中向下查
 */


const color = 'red'

function getColor() {
    return color;
}

console.log(getColor()); //red




const color1 = 'blue';

function getColor1() {
    var color1 = 'red';
    return color1;
}
console.log(getColor1()); // red