// Array Methods
let items = [2,5 ,"sweet", false,45];

//push adds an item at the end of an array
items.push(62);
console.log(items);

//unshifts adds an item at the start of an array
items.unshift(6.5);
console.log(items);

//removes an item from the end of an array
items.pop();
console.log(items);

//removes an item from the start of an array
items.shift();
console.log(items);

//array sorting
let num = [1, 9, 34, 12, 25, 30];
let sorted = num.sort((a,b)=> a -b);
console.log(sorted);

//given an array of x element , return an array with each element in x multiplied by 2
//create an array of x, go through every element in an array,multiply every element by 2
const result = num.map(
(item)=>{
    return item * 2
}

)
console.log(result)

let newArray = []
const result2 = num.forEach((item,index)=>{newArray.push(items*2)});
console.log(newArray);
console.log({result2})


//concatenation method
let a = [1,2,3];
let b = [4,5,6];

let joined1 = a.concat(b);
console.log({joined1});

//destructuring-storing new arrays element into new variables
let c = [1,40, ...a, ...b];
console.log({c});
let [z,x, ...e] = c;
console.log({z});
console.log({x});
console.log({e});    

