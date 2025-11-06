// function greet(name,a){
//     console.log("Hello "+name);
//    a(); 
// }
// greet("Raja",function a(){
//     console.log("Have a nice day");
// })

// //Callback with order
// function cookRice(callback){
//     console.log("Cooking rice...")
//     callback();
// }
// cookRice(()=>{setTimeout(()=>console.log("Eating now 🍚"),2000)});
//Countdown using setInterval
// function startCountdown(callback){
//     callback();
    
// }
// startCountdown(()=>{let intervalID=5;
// let timer=setInterval(()=>{console.log(intervalID);
//     intervalID--;
//     if(intervalID==0){
//         console.log("Time's up!");
//         clearInterval(timer);
//     }
// },1000);

// });
// setTimeout + callback chain

function washClothes(callback){
    console.log("Washing clothes...");
    setTimeout(()=>callback(),3000);
}

washClothes(()=>(console.log("Drying clothes...")));
