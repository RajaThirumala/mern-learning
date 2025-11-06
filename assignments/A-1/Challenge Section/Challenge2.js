function countDown(startNumber){
    let count=startNumber
    let id=setInterval(()=>{
        console.log(count--);
        if(count==0){
            console.log("Happy New Year!")
            clearInterval(id);
        }
    },1000);
}

countDown(10);