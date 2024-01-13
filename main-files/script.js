const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page4Animation() {
    let elemC = document.querySelector("#elem-container")
    let fixedImage = document.querySelector("#fixed-image")
    let isImageDisplayed = false;

    elemC.addEventListener("mouseover", function () {
        if (!isImageDisplayed) {
            fixedImage.style.display = "block";
            isImageDisplayed = true;
        }
    });

    elemC.addEventListener("mouseleave", function (event) {
        // Check if the mouse is leaving the container or entering the fixed image
        if (
            !fixedImage.contains(event.relatedTarget) &&
            !elemC.contains(event.relatedTarget)
        ) {
            fixedImage.style.display = "none";
            isImageDisplayed = false;
        }
    });

    fixedImage.addEventListener("mouseleave", function (event) {
        // Check if the mouse is leaving the fixed image or entering the container
        if (
            !fixedImage.contains(event.relatedTarget) &&
            !elemC.contains(event.relatedTarget)
        ) {
            fixedImage.style.display = "none";
            isImageDisplayed = false;
        }
    });


    // let elems = document.querySelectorAll("#elem")
    // elems.addEventListener("mouseenter", function () {
    //     let image = elem1.getAttribute("data-image")
    //     fixedImage.style.backgroundImage = `url(${image})`
    // })

    let elems = document.querySelectorAll("#elem")
    elems.forEach(function (e) {
        console.log(e);
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute("data-image")
            fixedImage.style.backgroundImage = `url(${ image })`
        })
    })
}

function swiperAnimation() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,

    });
}


function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            console.log("hyyy");
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {

    let loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)

}


swiperAnimation();
page4Animation();
menuAnimation();

loaderAnimation();
