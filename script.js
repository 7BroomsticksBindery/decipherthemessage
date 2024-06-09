document.addEventListener("DOMContentLoaded", function() {
    var angleDeg = 0;
    const buttonLeft = document.getElementById("buttonLeft");
    const buttonRight = document.getElementById("buttonRight");
    const imageInner = document.getElementById("imageInner");
    const information = document.getElementById("information");
    const wheel = document.getElementById("wheel");
    const buttonInfo = document.getElementById("buttonInfo");
    const buttonOK = document.getElementById("buttonOK");
    const contentPortrait = document.getElementById("contentPortrait");
    const contentLandscape = document.getElementById("contentLandscape");

    if (window.innerHeight > window.innerWidth) {
        contentPortrait.style.display = "block";
        contentLandscape.style.display = "none";
    } else {
        contentPortrait.style.display = "none";
        contentLandscape.style.display = "block";
    }

    buttonLeft.addEventListener("click", function() {
        angleDeg = angleDeg - 13.846153846153846;
        imageInner.style.transform = "translate(-50%, -50%) rotate(" + angleDeg + "deg)";
        console.log("angle = " + angleDeg);
    });
    buttonRight.addEventListener("click", function() {
        angleDeg = angleDeg + 13.846153846153846;
        imageInner.style.transform = "translate(-50%, -50%) rotate(" + angleDeg + "deg)";
        console.log("angle = " + angleDeg);
    });
    buttonInfo.addEventListener("click", function() {
        wheel.style.display = "none";
        information.style.display = "block";
    });
    buttonOK.addEventListener("click", function() {
        wheel.style.display = "block";
        information.style.display = "none";
    });

    window.addEventListener("orientationchange", function() {
        if (window.innerHeight > window.innerWidth) {
            contentPortrait.style.display = "block";
            contentLandscape.style.display = "none";
        } else {
            contentPortrait.style.display = "none";
            contentLandscape.style.display = "block";
        }
    });

    window.addEventListener("resize", function() {
        if (window.innerHeight > window.innerWidth) {
            contentPortrait.style.display = "block";
            contentLandscape.style.display = "none";
        } else {
            contentPortrait.style.display = "none";
            contentLandscape.style.display = "block";
        }
    });

});

