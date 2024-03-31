var hire = document.querySelector("p");
var main = document.querySelector(".main");
var circle = document.querySelector(".circle");
var heading = document.querySelector(".heading");
const lert = (x, y, a) => x * (1 - a) + y * a;
main.addEventListener("mousemove",function(dets){
    var dims = circle.getBoundingClientRect();
    var dimsMain = main.getBoundingClientRect();
    var xStart = dims.x;
    var xEnd = dims.x+dims.width;
    var yStart = dims.y;
    var yEnd = dims.y+dims.height;
    var xMainStart = dimsMain.x;
    var xMainEnd = dimsMain.x+dimsMain.width;
    var yMainStart = dimsMain.y;
    var yMainEnd = dimsMain.y+dimsMain.height;

    var oneTwo = gsap.utils.mapRange(xStart, xEnd, 0, 1, dets.clientX);
    var oneTwo1 = gsap.utils.mapRange(yStart, yEnd, 0, 1, dets.clientY);
    
    
    var oneTwoMain = gsap.utils.mapRange(xStart, xEnd, 0, 1, dets.clientX);
    var oneTwo1Main = gsap.utils.mapRange(yStart, yEnd, 0, 1, dets.clientY);
    gsap.to("p",{
        x:lert(-40, 40, oneTwo),
        y:lert(-20, 20, oneTwo1),
        duration:.1,
        ease:Expo.InOut,
    })
    gsap.to(".circle",{
        x:lert(-80, 80, oneTwoMain),
        y:lert(-60, 60, oneTwo1Main),
        background: "linear-gradient(to right, rgb(85, 0, 255), rgb(1, 117, 248))",
        duration:.1,
        ease:Expo.InOut,
    })
})
main.addEventListener("mouseleave", function(){
    gsap.to("p",{
        x:0,
        y:0,
        ease:Expo.InOut,
        duration:.1
    })
    gsap.to(".circle",{
        x:0,
        y:0,
        background: "",
        transition: "",
        duration:.1,
        ease:Expo.InOut,
    })
})
console.log(heading)