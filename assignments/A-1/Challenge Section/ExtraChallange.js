function wakeUp(callback){
    setTimeout(()=>{
    console.log("Wake up");
    callback();
    },1000);
}
function brushTeeth(callback){
    setTimeout(()=>{
    console.log("Brush Teeth");
    callback();
    },2000);

}
function eatBreakfast(callback){
    setTimeout(()=>{
    console.log("Eat breakfast");
    callback();
    },3000);
}
function leaveForCollege(){
    setTimeout(()=>{
    console.log("Leave for college");
    },1000);
}
wakeUp(()=>{
    brushTeeth(()=>{
        eatBreakfast(()=>{
            leaveForCollege();
        })
    })
});
