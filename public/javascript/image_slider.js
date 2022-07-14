let slideIndex=2;
showAutoSlides();

//First function for auto slide show
function showAutoSlides(){
    let slides=document.getElementsByClassName("mySlides");
    let dots=document.getElementsByClassName("dot");
    let i;
    for(i=0;i<slides.length;i++){
        slides[i].style.display= "none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className= dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className=dots[slideIndex-1].className + " active";
    setTimeout(showAutoSlides, 5000);
}


// javascript from index
let slideIndexs=1;
showSlides(slideIndexs);
// next/previous controls
function plusSlides(n){
    showSlides(slideIndexs=slideIndexs + n);
}
//thumnail image controls
function currentSlide(n){
    showSlides(slideIndexs = n);
}
//second function for manual slide show
function showSlides(n){
    let i;
    let slides=document.getElementsByClassName("mySlides");
    let dots=document.getElementsByClassName("dot");
    if(n>slides.length){
        slideIndexs=1;
    }
    if(n<1){
        slideIndexs=slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
       dots[i].className= dots[i].className.replace(" active", "");
    }
    slides[slideIndexs-1].style.display="block";
    dots[slideIndexs-1].className=dots[slideIndexs-1].className + " active";
}
