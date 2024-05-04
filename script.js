var images = [], x = 0, y = 5, yWait = 11, xWait = 42, zWait = 21;
var hovering = false, z = false, a = false;

//setting values of images
images[0] = "Images/cat0.png";
images[1] = "Images/cat1.png";
images[2] = "Images/cat2.png";
images[3] = "Images/cat3.png";
images[4] = "Images/cat4.png";
images[5] = "Images/cat5.png";

function blink() {
    //blinking animation
    if(hovering == false) { //mouse is not hovering over logo
        if(z == true) {
            x = images.length - 1;
            yWait = 11;
            xWait = 42;
            zWait = 21;

            z = false;
        }

        if(a == true) {
            x = images.length - 1;
            
            a = false;
        }

        if(x != images.length - 1) { //eyes have not finished closing
            x++
            document.getElementById("logo").src = images[x];
        } else { //eyes have finished closing
            if(y == 5) { //eyes havn't started opening
                if(yWait != 0) {
                    yWait--;
                } else {
                    y--;
                    document.getElementById("logo").src = images[y];
                }
            } else { //eyes are being opened
                if(y != 0) { //eyes have not finished opening
                    y--;
                    document.getElementById("logo").src = images[y];
                } else {
                    //eyes are open
                    if(xWait != 0) {
                        xWait--;
                    } else {
                        //reset values & loop
                        x = 0;
                        y = 5;
                        yWait = 11;
                        xWait = 42;
                    }
                }
            }
        }    
    } else { //mouse is hovering over logo
        if(z == true) { //eyes are half way
            a = false;
            if(zWait != 0) {
                zWait--;
            } else { //finished waiting
                if(x != images.length - 1) { //eyes are closing
                    x++
                    document.getElementById("logo").src = images[x];
                }
            }
        } else { //eyes are not halfway
            //opening or closing eyes halfway
            if(y == 0 && x == 5) {
                x = 0;
                y = 5;

                a = true;
            }

            if(a == true) { //eyes are fully open (cat0)
                //skips xWait & resets values
                if(x < 3) {
                    x++;
                    document.getElementById("logo").src = images[x];
                } else {
                    a = false;
                }
            } else {
                if(x == 0 && y == 5) { //eyes are fully open (cat0)
                    //runs once (cat0 --> cat1)
                    x++
                    document.getElementById("logo").src = images[x];
                } else { //eyes are not open
                    if(x == 0) { //eyes are opening (cat4 --> cat0)
                        if(y > 2) { //eyes closed --> halfway (cat5 --> cat3)
                            y--;
                            document.getElementById("logo").src = images[y];
                        } else {
                            if(y == 2) { //eyes are halfway (cat2)
                                x = 2;
                                z = true;
                            } else { //eyes halfway --> open (cat1 --> cat0)
                                x = y;
                                y = 5;
                            }
                        }
                    } else if(y == images.length - 1) { //eyes are closing (cat1 --> cat5)
                        if(x < 2) { //eyes are open or closing (cat0 --> cat1)
                            x++
                            document.getElementById("logo").src = images[x];
                        } else {
                            if(x == 2) { //eyes are halfway (cat2)
                                y = 2;
                                z = true;
                            } else { //eyes are more than halfway (cat3 --> cat5)
                                y = x;
                                x = 0;
                            }
                        }
                    }
                }
            }
        }
    }
}

var logo = document.getElementById("logo");
if(logo != null) {
    logo.addEventListener("mouseover", function() { //hovering over logo
        hovering = true;
    });

    logo.addEventListener("mouseleave", function() { //no longer hovering over logo
        hovering = false;
    });
}

function startTimer() {
    if(x != images.length) {
        setInterval(blink, 70);
    }
}