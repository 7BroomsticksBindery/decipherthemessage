const degrees = ["13.8462deg",
"27.6923deg",
"41.5385deg",
"55.3846deg",
"69.2308deg",
"83.0769deg",
"96.9231deg",
"110.7692deg",
"124.6154deg",
"138.4615deg",
"152.3077deg",
"166.1538deg",
"180.0000deg",
"193.8462deg",
"207.6923deg",
"221.5385deg",
"235.3846deg",
"249.2308deg",
"263.0769deg",
"276.9231deg",
"290.7692deg",
"304.6154deg",
"318.4615deg",
"332.3077deg",
"346.1538deg"];


document.addEventListener("DOMContentLoaded", function() {
    var angle = 0;
    const buttonLeft = document.getElementById("buttonLeft");
    const buttonRight = document.getElementById("buttonRight");
    const imageInner = document.getElementById("imageInner");
  
    buttonLeft.addEventListener("click", function() {
        angle = angle - 13.846153846153846;
        imageInner.style.transform = "rotate(" + angle + "deg)";
        console.log("angle = " + angle);
    });
    buttonRight.addEventListener("click", function() {
        angle = angle + 13.846153846153846;
        imageInner.style.transform = "rotate(" + angle + "deg)";
        console.log("angle = " + angle);
    });
});

