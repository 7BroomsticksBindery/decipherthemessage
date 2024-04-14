document.addEventListener("DOMContentLoaded", function() {
    var angleDeg = 0;
    const buttonLeft = document.getElementById("buttonLeft");
    const buttonRight = document.getElementById("buttonRight");
    const imageOuter = document.getElementById("imageOuter");
    const imageLogo = document.getElementById("imageLogo");
    const imageInner = document.getElementById("imageInner");
  
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
});

