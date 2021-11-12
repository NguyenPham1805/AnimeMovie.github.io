import data from "./data.js"

function titleDocument(reuslt) {
    document.title =`Anime Movie | Thông tin | ${reuslt.title}`
}

function renderBanner(reuslt) {
    const banner = document.querySelector('.body .banner-info')
    banner.style.background = `linear-gradient(to left,#1b1b1bde, #b6b6b636,#1b1b1bde), url(${reuslt.image_banner}) center center`
    banner.style.backgroundSize = 'cover'
    document.querySelector('#body .banner-info').innerHTML = `<div class="title">
                        <h1>${reuslt.title}</h1>
                        <ul class="list-param">
                            <li><span><i class="far fa-eye"></i>&ensp;${reuslt.view}</span></li>
                            <li><span><i class="far fa-star"></i>&ensp;${reuslt.rating} / ${reuslt.user_rating}</span></li>
                            <li><span><i class="far fa-heart"></i>&ensp;${reuslt.love}</span></li>
                        </ul>
                        <ul class="list-status">
                            <li>Phát hành<span> ${reuslt.year}</span></li>
                            <li>Studio<span> ${reuslt.studio}</span></li>
                            <li>Độ tuổi<span> ${reuslt.age_limit}</span></li>
                        </ul>
                        <div class="type">
                            ${reuslt.type.map(value => {
                                return `<a href="#">${value}</a>`
                            }).join('')}
                        </div>
                    </div>
                    <a class="play-now" href="${reuslt.link_watch}">
                        <span>Xem ngay</span>
                        <i class="fas fa-play-circle"></i>
                    </a>`
}

function bannerItem(reuslt) {
    document.querySelector('#body .content .banner-item').innerHTML
        = `<img src="${reuslt.image_title}" alt="${reuslt.title}">`
}

function contentInfo(reuslt) {
    let numberEp = ''
    if (reuslt.episodes === 1) numberEp = `<a href="${reuslt.link_watch}" class="active">Full</a>`
    else {
        for (let i = 0; i < reuslt.episode_lastes; i++) {
            numberEp += `<a href="#" class=${i === 0 ? "active" : ''}>${i + 1}</a>`
        }
    }
    document.querySelector('#body .content .content-info').innerHTML
        = `<div class="list-ep col-lg-6 col-md-6">
        <div class="title">
            <h3>Số tập</h3>
        </div>
        <div class="list-ep-item">${numberEp}</div>
    </div>

    <div class="info-content col-lg-6 col-md-6">
        <div class="title">
            <h3>Nội dung</h3>
        </div>
        <div class="info-content-item">
            <p>${reuslt.description}</p>
        </div>
    </div>`
}

export default function renderInfo(id) {
    const reuslt = data.find(value => {
        return value.id === id
    })
    titleDocument(reuslt)
    renderBanner(reuslt)
    bannerItem(reuslt)
    contentInfo(reuslt)
}

