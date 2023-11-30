let a = "10";
//implicit coersion-forcefully change the data type internally/automatic
let b = a *10;
console.log(b);
console.log(typeof(b));
console.log(a * 1);
console.log(typeof(+a));

//explicit coersion --turn the type externally--doing it ourselves
//use js methods
let c = Number(a);
console.log("c", typeof(c));

let d = String(c);
console.log("d", typeof(d))

let e = new Array(d);
console.log(e);