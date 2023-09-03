$(document).on("scroll", function () {
    if (window.scrollY < 1210)
        $(".bg-mount").css(
            "top",
            Math.max(-.3 * window.scrollY) + "px"
        );
});
$(document).on("scroll", function () {
    if (window.scrollY < 1210)
        $(".bg-fount").css(
            "top",
            Math.max(-.6 * window.scrollY) + "px"
        );
});
$(document).on("scroll", function () {
    if (window.scrollY < 1210)
        $(".bg-river").css(
            "top",
            Math.max(-.2 * window.scrollY) + "px"
        );
});
$(document).on("scroll", function () {
    if (window.scrollY < 1210)
        $(".bg-sky").css(
            "top",
            Math.max(-.1 * window.scrollY) + "px"
        );
});

$(document).on("scroll", function () {
    if (window.scrollY < 1210)
        $(".bg-star").css(
            "left",
            Math.max(-400 - .5 * window.scrollY) + "px"
        );
});
$(document).on("scroll", function () {
    if (window.scrollY < 1210)
        $(".main-title").css(
            "top",
            Math.max(380 - .7 * window.scrollY) + "px"
        );
});
$(document).on("scroll", function () {
    if (window.scrollY < 1210){
        $(".main-title-2").css(
            "top",
            Math.max(270 + .5 * window.scrollY) + "px"
        );
        // $(".main-title-2").css(
        //     "left",
        //     Math.max(0 + 6 * window.scrollY) + "px"
        // );
    }
});
$(document).on("scroll", function () {
    if (window.scrollY < 1210)
        $(".main-bg").css(
            "top",
            Math.max(-.4 * window.scrollY) + "px"
        );
});
$(document).on("scroll", function () {
    if (window.scrollY > 70){
        $(".bg-sky").css(
            "filter",
            "grayscale()"
        );
        $(".slider").css(
            "opacity",
            0
        );
        $(".slider").css(
            "top",
            "110%"
        );
    }
    else{
        $(".bg-sky").css(
            "filter",
            "none"
        );
        $(".slider").css(
            "opacity",
            1
        );
        $(".slider").css(
            "top",
            "90%"
        );
    }
});

$(document).on("scroll", function () {
    if (window.scrollY > 550){
        $(".nav-header").css(
            "opacity",
            1
        );
        $(".nav-header").css(
            "top",
            0
        );
    }
    else{
        $(".nav-header").css(
            "opacity",
            0
        );
        $(".nav-header").css(
            "top",
            "-8vh"
        );
    }
});
$(document).on("scroll", function () {
    if (window.scrollY > 350){
        
        $(".overview").css(
            "left",
            0
        );
        
    }
    else{
        $(".overview").css(
            "left",
            "-100vw"
        );
        
    }
});
$(document).on("scroll", function () {
    if (window.scrollY > 1100){
        
        $(".digi-mark").css(
            "right",
            0
        );
    }
    else{
        
        $(".digi-mark").css(
            "right",
            "-100vw"
        );
    }
});
$(document).on("scroll", function () {
    if (window.scrollY > 1750){
        $(".freelancing").css(
            "left",
            0
        );
    }
    else{
        $(".freelancing").css(
            "left",
            "-100vw"
        );
    }
});

$(document).on("scroll", function () {
    if (window.scrollY > 2650)
        $(".founder").css(
            "opacity",
            1
        );
    else
        $(".founder").css(
            "opacity",
            0
        );
});


// LOADING

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if(load>99){
        clearInterval(int);
    }
    loadText.innerHTML = load +"%";
    // other way
    // loadText.innerHTML = `${load}%`;

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.backdropFilter = `blur(${scale(load, 0, 100, 30, 0)}px)`

    
}
setTimeout(()=>{
    $(".bg").css(
        "z-index",
        1
    )
    $(".loading-text").css(
        "z-index",
        1
    )
},4000);
// USED A FUNCTION FROM HERE:-
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

