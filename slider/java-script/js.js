var slideIndex = 0;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex = slideIndex+1);
}

function minusSlide(n){
    showSlide(slideIndex = slideIndex-1);
}

function currentSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].classList.remove("active");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].classList.add("active");
}
