$(document).ready(function () {
    const tabletime = document.querySelectorAll(".timetable");
    const tabletimeDoctor = document.querySelectorAll(".timetable__doctor");
    const tabletimeButton = document.querySelector("#tabletime-btn");
    
    screen_check();
    $(window).on('resize', function(){
        screen_check();
    });

    tabletimeButton.addEventListener("click", function() {
        tabletime.forEach( function(item, index){
            item.classList.remove("none")
            tabletimeDoctor[index].classList.remove("none");
            tabletimeButton.classList.add("none");
        })
    })
   
    function screen_check(){
        tabletime.forEach( function(item, index){
            if ( $(window).width() < 768 && index > 0 ) { 
                item.classList.add("none");
                tabletimeDoctor[index].classList.add("none");
                tabletimeButton.classList.remove("none");
            } else if (index > 1) {
                item.classList.add("none");
                tabletimeDoctor[index].classList.add("none");
                tabletimeButton.classList.remove("none"); 
            } else{
                item.classList.remove("none")
                tabletimeDoctor[index].classList.remove("none");
                tabletimeButton.classList.remove("none");
            }
        })

    }
})