import data from "./data.js"

const sliderList = document.getElementById('owl-carousel')

$(document).ready(function () {
    var owl = $('.owl-carousel')

    owl.owlCarousel({
        loop: true,
        autoplay: true,
        navigator: true,
        navAnimation: true,
        margin: 15,
        center: true,
        responsive: {
            1200: {
                items: 5
            },
            800: {
                items: 4
            },
            400: {
                items: 3
            },
            0: {
                items: 2
            }
        }
    })
})

export default function renderSlider() {
    let sliderArr = []
    sliderArr = data.map((value, index) => {
        if (value.status && index < 11) {
            return `<div class="item">
                        <div class="item-content">
                            <a href="${value.link_info}">
                                <img src="${value.image_title}">
                                <div class="title-shadow-hover"></div>
                                <div class="title-movie">
                                    <p>${value.title}</p>
                                </div>
                            </a>
                            <div class="ep-last">
                                <span>${value.episode_lastes} / ${value.episodes}</span>
                            </div>
                        </div>
                    </div>`
        }
    })
    sliderList.innerHTML = sliderArr.join('')
}