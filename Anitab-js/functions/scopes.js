let a = 20;  //Global variable-can be accessed everywhere


function add(b){
    console.log(a+b);
    let c = 30;  //Local variable -accessible in the scope defined
    console.log(a+b+c);
}
add(20);
console.log({a})



function greet(){
    let hello = "hey"
    function talk(){
        let greeting = "hello there";
        console.log(`${hello} ${greeting}`)
    }
    talk();
   
}
greet();

