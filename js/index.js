var slider = document.getElementById("sliders");
console.log(slider);
var slider01=slider.getElementsByTagName("div");
console.log(slider01);
var slider02=0;
var slider03=slider01.length;
setInterval(function(){
    if(slider02<slider03-1){
        var next = slider02+1;
    }
    else{
        var next = 0;
    }
    slider01[slider02].style.opacity="0";
    slider01[next].style.opacity="1";
    slider02=next;
},2000);