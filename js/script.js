$(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true
            }
        },
        {
            breakpoint: 340,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: false
            }
        },
    ]

})

let headerBurger = document.querySelector('.burger')
let headerNav = document.querySelector(".header__nav")

headerBurger.addEventListener("click", function () {
    headerNav.classList.add("header--menu")

})
headerBurger.addEventListener("click", function () {
    headerNav.style.display = 'block'

})






