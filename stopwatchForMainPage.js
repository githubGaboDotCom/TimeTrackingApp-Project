function stopwatch() {

    var second = 0, minute = 0, hour = 0, day = 0; 
    setInterval(function seconds()
    {
        document.getElementById("stopwatch").innerHTML = day + "d " + hour + "h " + minute + "m " + second + "s ";
        
        if (second <= 59)
        {
            second += 1;
        }
        
        if (second > 59)
        {
            minute += 1;
            second = 0;

        }
        
        if (minute > 59)
        {
            hour += 1;
            minute = 0;
        }
        
        if (hour > 23)
        {
            day += 1;
            hour = 0; 
        }
        

    } ,1000);
}

function button_checked(){
    // var checked = document.getElementById("check").checked;
    // if (checked){
    //     document.querySelector("h1").style.position = "unset";
    //     document.querySelector(".stopWatch_Container").style.position = "unset";
    //     document.querySelector(".MainText_Container").style.position = "unset";
    //     document.querySelector("#signUpButton").style.position = "unset";
    //     document.querySelector("#logInButton").style.position = "unset";
    // }else{
    //     document.querySelector("h1").style.position = "absolute";
    //     document.querySelector(".stopWatch_Container").style.position = "absolute";
    //     document.querySelector(".MainText_Container").style.position = "absolute";
    //     document.querySelector("#signUpButton").style.position = "absolute";
    //     document.querySelector("#logInButton").style.position = "absolute";
    // }

}