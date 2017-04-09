//字面量
let person = {
    name: 'linmiss',
    age: 25,
    message: 'handsome'
};

//console.log(person.name);

let colors = ['red', 'green', 'pink', 'white', 'yellow'];
//console.log(colors.toString());
//console.log(colors.toLocaleString());


let colors2 = colors.slice(1, 2)
//console.log(colors2); //['green']



/**
 * splice的三个用法：
 */

/**
 * 删除  出入两个参数  第一个是起始位置 第二个是个数
 */
//let colors1 = colors.splice(1, 2);
//console.log(colors1); //['grenn','pink']


/**
 * 插入 3个参数 起始位置 ， 0(要删除的项数) 和 要插入的项
 */

//let colors3 = colors.splice(2, 0, 'red', 'green');
//console.log(colors);//[ 'red', 'white', 'red', 'green', 'yellow' ]
//console.log(colors3); //[]


/**
 *  替换 3个参数 
 */

let colors4 = colors.splice(2,1,'red','green');
console.log(colors);//[ 'red', 'green', 'red', 'green', 'white', 'yellow' ]
console.log(colors4);//[ 'pink' ]