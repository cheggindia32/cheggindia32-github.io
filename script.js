let yesSize = 20; 
let noSize = 20; 
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

function shrinkNo() {
    noSize -= 2; 
    yesSize += 10; 
    
    if (noSize <= 0) {
        noBtn.style.display = "none"; // Hide the No button
    } else {
        noBtn.style.fontSize = noSize + "px";
    }

    yesBtn.style.fontSize = yesSize + "px";
}

function confirmChoice() {
    document.body.style.backgroundImage = "url('C:/Users/afeef/Desktop/adil/background.jpg')";
    document.body.style.backgroundSize = "contain"; // or "cover"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    alert("okda kutta!");
}