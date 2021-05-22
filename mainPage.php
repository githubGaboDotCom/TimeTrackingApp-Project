<!DOCTYPE html>
<html>
    <head>
        <title>TrackYourTime</title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width= device-width, initial-scale=1.0">
        <script type="text/javascript" src="stopwatchForMainPage.js"></script> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers">
    </head>
    <body onload="stopwatch()">
        <video autoplay muted loop id="purpleSeaVideo">
            <source src="backgroundPurpleSea.mp4" type="video/mp4">
        </video>
        <div class="menu">
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">Instructions</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        <h1>Track Your Time</h1>
        <p id="stopwatch"></p>
        <br>
        <p id="mainText">Time tracking is key to understanding how you spend your time, personally and in business.
            Enjoy a quality experience when using our website to improve the wise use of your time. Go ahead and 
            sign up to create an account, or if you already have one, log in and start tracking your time.</p>
        <br>
        <br>
        <button id="signUpButton" onclick="document.location='signUp.php'">Sign Up</button>
        <br>
        <button id="logInButton" onclick="document.location='trackerPage.php'">Log in</button>

        <script type="text/javascript" src="stopwatchForMainPage.js"></script> 






    </body>
</html>