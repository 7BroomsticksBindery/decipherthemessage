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
    var translateDistance = "-50%";

    if (window.innerHeight > window.innerWidth) {
        contentPortrait.style.display = "block";
        contentLandscape.style.display = "none";
        translateDistance = "-50%";
    } else {
        contentPortrait.style.display = "none";
        contentLandscape.style.display = "block";
        translateDistance = "-20%";
    }

    buttonLeft.addEventListener("click", function() {
        angleDeg = angleDeg - 13.846153846153846;
        imageInner.style.transform = "translate(-50%, " + translateDistance + ") rotate(" + angleDeg + "deg)";
        console.log("angle = " + angleDeg);
    });
    buttonRight.addEventListener("click", function() {
        angleDeg = angleDeg + 13.846153846153846;
        imageInner.style.transform = "translate(-50%, " + translateDistance + ") rotate(" + angleDeg + "deg)";
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
            translateDistance = "-50%";
            imageInner.style.transform = "translate(-50%, " + translateDistance + ") rotate(" + angleDeg + "deg)";
        } else {
            contentPortrait.style.display = "none";
            contentLandscape.style.display = "block";
            translateDistance = "-20%";
            imageInner.style.transform = "translate(-50%, " + translateDistance + ") rotate(" + angleDeg + "deg)";
        }
    });

    window.addEventListener("resize", function() {
        if (window.innerHeight > window.innerWidth) {
            contentPortrait.style.display = "block";
            contentLandscape.style.display = "none";
            translateDistance = "-50%";
            imageInner.style.transform = "translate(-50%, " + translateDistance + ") rotate(" + angleDeg + "deg)";
        } else {
            contentPortrait.style.display = "none";
            contentLandscape.style.display = "block";
            translateDistance = "-20%";
            imageInner.style.transform = "translate(-50%, " + translateDistance + ") rotate(" + angleDeg + "deg)";
        }
    });

});

