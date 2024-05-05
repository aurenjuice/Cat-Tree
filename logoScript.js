//elements
var logo = document.getElementById("logo");

//integers
var index = 0;
var wait = 0;

//booleans
var isHovering = false;
var eyesClosed = false;
var eyesOpen = true;
var sleep = false;
var blinkEnd = true;
var skipped = false;

//arrays
var images = [];
//setting values of images
images[0] = "Images/cat0.png";
images[1] = "Images/cat1.png";
images[2] = "Images/cat2.png";
images[3] = "Images/cat3.png";
images[4] = "Images/cat4.png";
images[5] = "Images/cat5.png";

function StartBlink() {
    if(eyesOpen && sleep == false) { //eyes open to closed
        if(index == 0) {
            logo.src = images[index];
            if(isHovering) { //hovering
                //skip waiting time
                index = 1;
                wait = 0;
                skipped = true;
            } else { //not hovering
                if(wait < 40) {
                    wait++;
                } else {
                    index = 1;
                    wait = 0;
                }
            }
        } else if(index == 1) {
            logo.src = images[index];
            index = 2;
        } else if(index == 2) {
            logo.src = images[index];
            if(isHovering) { //hovering
                index = 2;
                eyesClosed = true;
                eyesOpen = false;
                skipped = false;
            } else { //not hovering
                if(skipped) {
                    index = 2;
                    eyesClosed = true;
                    eyesOpen = false;
                    skipped = false;
                } else {
                    index++;
                }
            }
        } else if(index > 2 && index < 6) { // halfway to closed (3 --> 5)
            logo.src = images[index];
            index++;
        } else if(index == 6) {
            index = 5;
            eyesClosed = true;
            eyesOpen = false;
        }
    }

    if(eyesClosed && sleep == false) { //eyes closed to open
        if(index == 5) { //eyes closed
            logo.src = images[index];
            if(wait < 5) {
                wait++;
            } else {
                wait = 0;
                index--;
            }
        } else if(index < 5 && index > 2) { //between closed and halfway (4 --> 3)
            logo.src = images[index];
            index--;
        } else if(index == 2) {
            logo.src = images[index];
            if(isHovering) { //hovering
                if(wait < 20) {
                    wait++
                } else {
                    //start closing eyes
                    sleep = true;
                }
            } else {
                wait = 0;
                index--;
            }
        } else if(index == 1) {
            logo.src = images[index];
            index--;
        } else if(index == 0) {
            logo.src = images[index];
            index = 0;
            eyesOpen = true;
            eyesClosed = false;
        }
    }

    if(sleep) {
        if(index < 6) { // halfway to closed (2 --> 5)
            logo.src = images[index];
            index++;
        }

        if(isHovering == false) {
            eyesClosed = true;
            eyesOpen = false;
            index = 5;

            sleep = false;
        }
    }

    blinkEnd = true;
}

if(logo != null) {
    logo.addEventListener("mouseover", function() { //hovering over logo
        isHovering = true;
    });

    logo.addEventListener("mouseleave", function() { //no longer hovering over logo
        isHovering = false;
    });
}

window.addEventListener('load', function() {
    if(blinkEnd) {
        setInterval(StartBlink, 70);
        blinkEnd = false;
    }
});