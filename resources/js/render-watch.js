import data from "./data.js"

function titleDocument(reuslt) {
    document.title =`Anime Movie | Xem phim | ${reuslt.title}`
}

function renderTitleVideo(reuslt) {
    document.querySelector('.content .title-video h3').innerHTML
    = `<i class="far fa-film"></i>${reuslt.title}`
}

function renderVideo(reuslt) {
    document.querySelector('.content #video').src
    = `${reuslt.video}`
}

function renderListEp(reuslt) {
    let numberEp = ''
    if (reuslt.episodes === 1) numberEp = `<a href="${reuslt.link_watch}" class="active">Full</a>`
    else {
        for (let i = 0; i < reuslt.episode_lastes; i++) {
            numberEp += `<a href="#" class=${i === 0 ? "active" : ''}>${i + 1}</a>`
        }
    }
    document.querySelector('.content .list-ep-item').innerHTML = numberEp
}


export default function renderWatch(id) {
    const reuslt = data.find(value => {
        return value.id === id
    })
    titleDocument(reuslt)
    renderTitleVideo(reuslt)
    renderVideo(reuslt)
    renderListEp(reuslt)
}