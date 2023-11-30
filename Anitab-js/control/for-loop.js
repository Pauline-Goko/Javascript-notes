let num = [10,20,3,8,7,9,12];
for(let i = 0; i<=num.length; i++){
    console.log(i);
    console.log(num[i]);
}


//break in a for loop to stop iliteration when a certain condition is met
for(let i = 0; i<= num.length; i++){
    console.log({ "break" : i});
    if(i===3){
        break;
    }
    
    }

//continue statement
    for(let i = 0; i<num.length; i++){
     
        if(i===3){
            continue;
        }
        console.log({"conntinue" :i});   //skips index 3
        }
