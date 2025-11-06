function repeatMessage(message, times){
    let messageIntervalID=setInterval(()=>{
        console.log(message);
        times--;
        if(times==0){
            clearInterval(messageIntervalID);
        }
    },1000);
}
repeatMessage("Practice makes perfect!",3);