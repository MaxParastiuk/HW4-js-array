console.log('--------------------- # 1')


let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
};
ask(
    "Вы согласны?",
    () => { console.log("Вы согласились."); },
    () => { console.log("Вы отменили выполнение."); }
);

console.log('--------------------- # 2')

let stringText = "my-short-string";
let arr = stringText.split("-");
console.log(arr);

console.log('--------------------- # 3')

let arr2 = ['JavaScript', 2015];
let result = arr2.join(' ');
console.log(result)

console.log('--------------------- # 4')

let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];

let userCollection = users.filter(item => item.age < 20);
console.log(userCollection)


console.log('--------------------- # 5')

let users1 = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let names = users1.map((item) => item.name);
console.log(names)


console.log('--------------------- # 6')

let arr3 = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num < a || b < num) {
            arr.splice(i, 1);
            i--;
        }
    }
}
filterRangeInPlace(arr3,1,4);
console.log(arr3)

console.log('--------------------- # 7')

let str = "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек"
console.log(interpreterToArr(str,","))

function interpreterToArr(str,separator) {
    return str.split(separator);
}

console.log('--------------------- # 8')

let arr4 = [5, 3, 8, 1];
let range = slArray(arr4, 1, 4);
console.log(range);
console.log(arr4)


function slArray(arr, startIndex, endIndex) {
    return arr.slice(startIndex,endIndex);
}

console.log('--------------------- # 9')

function sumAll(...args) {
    let sum = 0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}

console.log(sumAll(4,5,6))