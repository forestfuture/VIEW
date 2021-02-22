// header animation
window.addEventListener("load", function(){
    let headerTitle = document.getElementById("headerTitle");
    function fadeIn(){
        headerTitle.style.transition = "5s";
        headerTitle.style.opacity = 1;
        headerTitle.style.top = "150px";   
    }
    fadeIn();
    function fadeOut() {
        headerTitle.style.opacity = 0;
        headerTitle.style.top = "300px";
    }
    setTimeout(fadeOut,4000);
    function reset(){
        headerTitle.style.transition = "0s";
        headerTitle.style.top = "0px";
    }
    setTimeout(reset,10000);
    function loop(){
        fadeIn(); 
        setTimeout(fadeOut,4000); 
        setTimeout(reset,10000);
    }
    setInterval(loop,11000);
});


// scrollEvent
let imgSelect = document.getElementsByClassName("imgSelect");
let showImg = document.getElementsByClassName("showImg");

window.addEventListener("load", function(){
    let imgScroll = document.getElementsByClassName("imgScroll");
    for(var i = 0; i < showImg.length; i++){
            let rect = showImg[i].clientWidth;
        imgScroll[0].onscroll = function(){
            var $scrollLeft = imgScroll[0].scrollLeft;
            document.getElementsByClassName("scroll")[0].innerHTML = $scrollLeft;
            
            if($scrollLeft < (rect/2)){
                imgSelect[0].classList.add("bg-dark");
                imgSelect[1].classList.remove("bg-dark");
                imgSelect[2].classList.remove("bg-dark");
                imgSelect[3].classList.remove("bg-dark");
            }else if($scrollLeft > (rect/2) && $scrollLeft <(rect/2)+rect){
                imgSelect[0].classList.remove("bg-dark");
                imgSelect[1].classList.add("bg-dark");
                imgSelect[2].classList.remove("bg-dark");
                imgSelect[3].classList.remove("bg-dark");
            }else if($scrollLeft > (rect/2)+rect && $scrollLeft < (rect/2)+(rect*2)){
                imgSelect[0].classList.remove("bg-dark");
                imgSelect[1].classList.remove("bg-dark");
                imgSelect[2].classList.add("bg-dark");
                imgSelect[3].classList.remove("bg-dark");
            }else if($scrollLeft >  (rect/2)+(rect*2)){
                imgSelect[0].classList.remove("bg-dark");
                imgSelect[1].classList.remove("bg-dark");
                imgSelect[2].classList.remove("bg-dark");
                imgSelect[3].classList.add("bg-dark");
                
            }
        };
        imgScroll[1].onscroll = function(){
            var $scrollLeft = imgScroll[1].scrollLeft;
            document.getElementsByClassName("scroll")[1].innerHTML = $scrollLeft;
            if($scrollLeft < (rect/2)){
                imgSelect[4].classList.add("SelectBg");
                imgSelect[5].classList.remove("SelectBg");
                imgSelect[6].classList.remove("SelectBg");
                imgSelect[7].classList.remove("SelectBg");
                imgSelect[8].classList.remove("SelectBg");
            }else if($scrollLeft > (rect/2) && $scrollLeft < (rect/2)+rect){
                imgSelect[4].classList.remove("SelectBg");
                imgSelect[5].classList.add("SelectBg");
                imgSelect[6].classList.remove("SelectBg");
                imgSelect[7].classList.remove("SelectBg");
                imgSelect[8].classList.remove("SelectBg");
            }else if($scrollLeft > (rect/2)+rect && $scrollLeft < (rect/2)+(rect*2)){
                imgSelect[4].classList.remove("SelectBg");
                imgSelect[5].classList.remove("SelectBg");
                imgSelect[6].classList.add("SelectBg");
                imgSelect[7].classList.remove("SelectBg");
                imgSelect[8].classList.remove("SelectBg");
            }else if($scrollLeft > (rect/2)+(rect*2) && $scrollLeft < (rect/2)+(rect*3)){
                imgSelect[4].classList.remove("SelectBg");
                imgSelect[5].classList.remove("SelectBg");
                imgSelect[6].classList.remove("SelectBg");
                imgSelect[7].classList.add("SelectBg");
                imgSelect[8].classList.remove("SelectBg");
            }else if($scrollLeft > (rect/2)+(rect*3)){
                imgSelect[4].classList.remove("SelectBg");
                imgSelect[5].classList.remove("SelectBg");
                imgSelect[6].classList.remove("SelectBg");
                imgSelect[7].classList.remove("SelectBg");
                imgSelect[8].classList.add("SelectBg");
            }
        } 
    };    
});


// clickScrollEvent
let imgScroll1 = document.getElementById("imgScroll1");
let imgScroll2 = document.getElementById("imgScroll2");
let imgScroll = document.getElementsByClassName("imgScroll");
for(var s = 0; s < imgScroll.length; s++){

    // console.log(imgScroll[s].children);    

    for(var i = 0; i < imgSelect.length; i++){
        btnAction(imgSelect[i],i);
    }

    function btnAction(imgSelectDOM,imgSelectId){

        imgSelectDOM.addEventListener("click", function(){
            if(imgSelectId < 4){
                imgScroll[0].children[imgSelectId].scrollIntoView
                (
                    {
                        behavior:"smooth",
                    }
                );    
            }
            else if(imgSelectId >= 4){
                imgScroll[1].children[imgSelectId - 4].scrollIntoView
                (
                    {
                        behavior:"smooth",
                    }
                ); 
            }
        });
    };
}




