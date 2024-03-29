const headingh1 = document.querySelectorAll(".heading h1");
console.log(headingh1)
headingh1.forEach(function(e){
    var string = "";
    var test = e.textContent;
    var cluttter = test.split("");
    cluttter.forEach(function(e){
        console.log(e);
        string += `<span>${e}</span>`;
    })
    e.innerHTML = string;
})


gsap.to(".heading h1 span",{
    color:"white",
    // duration:2,
    stagger:.25,
    scrollTrigger:{
        start :"center 50%",
        end:"center 30%",
        // markers:true,
        scrub:true
    }
})
