const crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 8+"px";
    crsr.style.top = dets.y - 8+ "px";
})


const box = document.querySelector(".box");
box.addEventListener("mouseenter", function(dets){
    crsr.style.scale = 6;
    crsr.style.border = '.5px solid red'
    crsr.style.backgroundColor = 'transparent';
})
box.addEventListener("mouseleave", function(dets){
    crsr.style.scale = 1;
    crsr.style.backgroundColor = 'red';
    crsr.style.border = '0px solid red'
})

console.log(crsr)