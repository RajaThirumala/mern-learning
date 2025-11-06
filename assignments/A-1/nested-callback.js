function makeTea(callback){
    setTimeout(()=>{
        console.log("Tea ready!");
        callback();
    },2000);
}

function serveTea(callback){
    setTimeout(()=>{
        console.log("Serving tea...");
        callback();
    },1000);
}

function drinkTea(){
    console.log("Drinking tea");
}

makeTea(function() {
  serveTea(function() {
    drinkTea();
  });
});

// makeTea(()=>{serveTea(()=>{drinkTea();})});
