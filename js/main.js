

window.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        $("#loader").addClass("hidden")
    }, 2000)
});

$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    //toggleDarkMode
    $("#toggleTheme").click(function () {
        $("body").toggleClass("light dark")
        $("#toggleTheme").toggleClass("fa-moon fa-sun")

        $("#mobile-menu").toggleClass("menu-mobile-dark menu-mobile-light")
        $("#fixed-nav").toggleClass("menu-mobile-dark menu-mobile-light")
    });

    //open menu 
    $("#open-menu").click(function () {
        $("#mobile-menu").toggleClass("-translate-x-full translate-x-0");
    });

    //close menu
    $("#close-menu").click(function () {
        $("#mobile-menu").toggleClass("translate-x-0 -translate-x-full");
    });

    $(".menu-item").click(function () {
        $("#mobile-menu").toggleClass("translate-x-0 -translate-x-full");
    });

    // let currentDistanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;
    // let totalHeightOfWebPage = document.documentElement.scrollHeight || document.body.scrollHeight;
    // let windowHeight = window.innerHeight;

    // let fullHeight = (windowHeight + currentDistanceFromTop) / 5;

    //scrollTop
    $("#scrollTop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, '300');
    })

    
    function scrollProgress() {

        let currentDistanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;
        let totalHeightOfWebPage = document.documentElement.scrollHeight || document.body.scrollHeight;
        let windowHeight = window.innerHeight;

        let scrolledP = currentDistanceFromTop / (totalHeightOfWebPage - windowHeight) * 100;

        // console.log("totalHeightOfWebPage => " + totalHeightOfWebPage)
        // console.log("currentDistanceFromTop => " + currentDistanceFromTop)
        // console.log("windowHeight => " + windowHeight)
        // console.log("scrolledP => " + scrolledP)

        document.getElementById("scrollStat").style.width = Math.round(scrolledP) + "%";
        document.getElementById("section-number").innerHTML = "0" + Math.round(scrolledP / 20)

        if ($(window).scrollTop() < 600) {
            $("#scrollTop").addClass("hidden");
        } else {
            $("#scrollTop").removeClass('hidden');
        }
    }

    document.addEventListener("scroll", scrollProgress)

    AOS.init();

})

//status scrolling


