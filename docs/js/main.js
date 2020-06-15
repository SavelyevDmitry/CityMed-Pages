// Мобильное меню
$(document).ready(function () {
    // Отображение мобильного меню
    const mobileMenuIcon = document.querySelector(".mobile-menu__img");
    const mobileMenu = document.querySelector(".mobile-menu__text");
    const headerNavList = document.querySelector(".header-nav__list");
    const header = document.querySelector(".header");

    mobileMenuIcon.addEventListener('click', function(){
        headerNavList.classList.toggle('active');
    })

    mobileMenu.addEventListener('click', function(){
        headerNavList.classList.toggle('active');
    })

    headerNavList.addEventListener('click', function(){
        if(headerNavList.classList.contains('active')){
            headerNavList.classList.remove('active');
        }
    })

    window.addEventListener('scroll', function() {
        if(headerNavList.classList.contains('active')){
            headerNavList.classList.remove('active');
        }
    })

    window.addEventListener('resize', function(){
        headerNavList.classList.remove('active');        
    })
})

// Action-top
$(document).ready(function(){
    $('#owl-carousel-top').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 800,
        smartSpeed: 800,
        items: 1,
        responsive:{
            0:{

            },
            768:{

            },
            1280:{
                nav: true,
                navText: ['', ''],
                navSpeed: 800
            }
        }
    });
});

// slider-bot
$('.actions-bot__slider').flickity({
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
    // wrapAround: true,
    // groupCells: 2,
    autoPlay: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: true
  });
 
