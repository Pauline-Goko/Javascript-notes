let success = true;
let promise = new Promise((resolve,reject) =>{
    if(success){
        setTimeout(() =>{resolve("I succeeded")}, 5000)
        
    }
    else{
        setTimeout(() =>{reject("I am still looking for a job")}, 5000 )
      
    }
});


  const student = async () =>{
    let result = await promise;
    console.log({result});
  }

  student();