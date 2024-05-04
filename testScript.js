var test = document.getElementById("testLogo");
var index = 0, i = 5;
var isHovering = false;

var eyesClosed = false;
var eyesOpen = true;

var sleep = false;

var images = [];

var initRun = true;
var testEnd = true;

//setting values of images
images[0] = "Images/cat0.png";
images[1] = "Images/cat1.png";
images[2] = "Images/cat2.png";
images[3] = "Images/cat3.png";
images[4] = "Images/cat4.png";
images[5] = "Images/cat5.png";

function StartTest() {
    if(eyesOpen && sleep == false) {
        if(index == 0) {
            test.src = images[index];
            setTimeout(function() {
                index = 1;
            }, 280);
        } else if(index == 1) {
            test.src = images[index];
            index = 2;
            // setTimeout(function() {
            //     index = 2;
            // }, 70);
        } else if(index == 2) {
            test.src = images[index];
            if(isHovering) { //hovering
                setTimeout(function() {
                    if(isHovering) { //still hovering
                        //start closing eyes
                        sleep = true;
                    }
                }, 1500);
            } else {
                index++;
                // setTimeout(function() {
                //     index = 3;
                // }, 70);
            }
        } else if(index > 2 && index < 6) { // halfway to closed (3 --> 5)
            test.src = images[index];
            index++;
            // setTimeout(function() {
            //     index++;
            // }, 70);
        } else if(index == 6) {
            index = 5;
            eyesClosed = true;
            eyesOpen = false;
        }
    }

    if(eyesClosed && sleep == false) {
        if(index == 5) { //eyes closed
            test.src = images[index];
            setTimeout(function() {
                index--;
            }, 70);
        } else if(index < 5 && index > 2) { //between closed and halfway (4 --> 3)
            test.src = images[index];
            index--;
            // setTimeout(function() {
            //     index--;
            // }, 70);
        } else if(index == 2) {
            test.src = images[index];
            if(isHovering) { //hovering
                setTimeout(function() {
                    if(isHovering) { //still hovering
                        //start closing eyes
                        sleep = true;
                    }
                }, 1500);
            } else {
                index--;
                // setTimeout(function() {
                //     index--;
                // }, 70);
            }
        } else if(index == 1) {
            test.src = images[index];
            index--;
            // setTimeout(function() {
            //     index--;
            // }, 70);
        } else if(index == 0) {
            index = 0;
            eyesOpen = true;
            eyesClosed = false;
        }
    }

    if(sleep) {
        if(index < 6) { // halfway to closed (2 --> 5)
            test.src = images[index];
            index++;
            // setTimeout(function() {
            //     index++;
            // }, 70);
        }

        if(isHovering == false) {
            eyesClosed = true;
            eyesOpen = false;
            index = 5;

            sleep = false;
        }
    }

    testEnd = true;
}

if(test != null) {
    test.addEventListener("mouseover", function() { //hovering over logo
        isHovering = true;
    });

    test.addEventListener("mouseleave", function() { //no longer hovering over logo
        isHovering = false;
    });
}

window.addEventListener('load', function() {
    if(testEnd) {
        setInterval(StartTest, 70);
        testEnd = false;
    }
});