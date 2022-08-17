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

function switch_feedbackTab_to_contactusTab() {
    document.getElementById("feedback_tab_container").style.display = "none";
    document.getElementById("contactUs_tab_container").style.display = "block";
    document.querySelector(".submit_contactus_button").style.display = "block";
    
}

function switch_contactusTab_to_feedbackTab() {
    document.getElementById("feedback_tab_container").style.display = "block";
    document.getElementById("contactUs_tab_container").style.display = "none";
    document.querySelector(".submit_contactus_button").style.display = "none";
    
}