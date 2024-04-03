var userInfo = document.querySelector(".user-card");
var userInfoPosi = userInfo.getBoundingClientRect();
var userInfoCurrPosiX = userInfoPosi.x;
var userInfoCurrPosiY = userInfoPosi.y;

let currPosi;
userInfo.addEventListener('mousedown', (e)=>{
    userInfo.style.transition =  "";
    console.log("Hii")
    currPosi = e.clientX;
    document.addEventListener("mousemove", move)
})
userInfo.addEventListener('mouseup', (e)=>{
    userInfo.style.transition =  ".3s linear";
    userInfo.style.left = 50 + "%";
    userInfo.style.top = 50 + "%";
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mousemove", moveImg)
})


function move(e){
    // console.log(e.clientX, currPosi)
    // document.addEventListener("mousemove", moveImg)
    // document.removeEventListener("mousemove", moveImg);
    document.addEventListener("mousemove", moveImg);
    if(e.clientX > currPosi + 200){
        userInfo.style.display = "none";
        alert("Right")
        document.removeEventListener("mousemove", move);
    }
    else if(e.clientX  < currPosi - 200){
       alert("left")
       userInfo.style.display = "none";

        document.removeEventListener("mousemove", move);
    }
}

function moveImg(e){
    userInfo.style.left = e.clientX + "px";
    userInfo.style.top = e.clientY + "px";
    userInfo.style.transform = "translate(-50%, -50%)"
}