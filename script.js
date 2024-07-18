$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer","Front-End Developer", "Back-End Developer", "Engineer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer","Front-End Developer", "Back-End Developer", "Engineer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.owl-carousel').owlCarousel({
        margin: 10, /* Reduced margin */
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// Dark mode toggle script
$('#dark-mode-toggle').click(function(){
    $('body').toggleClass('dark-mode');
});

document.oncontextmenu = () => {
    return false;
}

document.onekeydown = e => {
    if(e.key == "F12") {
        return false;
    }
    if(e.ctrlKey && e.key == "u") {
        return false;
    }
    if(e.ctrlKey && e.key == "c") {
        return false;
    }
    if(e.ctrlKey && e.key == "v") {
        return false;
    }
    
}
var loader =  document.getElementById("preloader")

document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("preloader");
    var mainContent = document.getElementById("main-content");

    // Set a timeout to hide the preloader after 3 seconds
    setTimeout(function() {
        loader.style.display = "none";
        mainContent.style.display = "block";
    }, 3000); // 3000 milliseconds = 3 seconds
});
