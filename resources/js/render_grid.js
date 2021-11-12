import data from "./data.js"

const grid = document.getElementById('grid')

export default function renderGrid() {
    let gridArr = []
    gridArr = data.map((value, index) => {
        if (index < 20) {
            return `<div class="mv-item">
                    <a href="${value.link_info}">
                        <div class="mv-head">
                            <div class="ep-latest">
                                <span>${value.episode_lastes}/${value.episodes}</span>
                            </div>
                        </div>

                        <div class="mv-body">
                            <img src="${value.image_title}"
                                alt="${value.title}">
                        </div>

                        <div class="mv-foot">
                            <div class="shadow-hover"></div>
                            <p>${value.title}</p>
                        </div>
                    </a>
                </div>`
        }
    })
    grid.innerHTML = gridArr.join('')
}