let stars1 = document.getElementById("stars1");
let moon2=document.getElementById("moon2");
let mountains3=document.getElementById("mountains3");
let mountains4=document.getElementById("mountains4");
let river5=document.getElementById("river5");
let boat6=document.getElementById("boat6");
let mountains7=document.getElementById("mountains7");
let w=document.querySelector(".w");
window.onscroll = function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top=value*4+'px';
    mountains3.style.top=value*1.5+"px";
    mountains4.style.top=value*1+"px";
    river5.style.top=value*0.5+"px";
    boat6.style.top=value+"px";
    boat6.style.left=value*11+"px";
    // mountains7.style.top=value*2.2+"px"
    w.style.fontSize=value+"px";
    w.style.top=value+"px";
    if(scrollY>=51.29999923706055){
        w.style.fontSize=51.29999923706055+"px";
        w.style.position="fixed"+"px";
       
    }
   
    if(scrollY>=94.75){
        document.querySelector('.main').style.background="linear-gradient(rgba(21, 27, 62, 0.92),rgba(78, 107, 145, 0.91))";
    }else{
        document.querySelector('.main').style.background="linear-gradient(rgba(48, 16, 46, 0.918),rgba(51, 30, 39, 0.911))";
    }

}
