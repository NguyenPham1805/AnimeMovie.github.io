import data from "./data.js"

const searchInputLG = document.querySelector('#input-lg')
const searchInputSM = document.querySelector('#input-sm')
const suggestFrame = document.querySelector('.suggest-frame')
const searchBtn = document.querySelector('.search-btn')
const suggestList = document.querySelector('.suggest-list')
const btnClose = document.querySelector('.suggest-frame .btn-close')

searchBtn.onclick = e => e.preventDefault()
searchInputLG.onkeyup = e => serchInputLG(e)
searchInputSM.onkeyup = e => serchInputLG(e)
btnClose.onclick = () => {
    suggestFrame.style.display = 'none'
    searchInputLG.value = ''
    searchInputSM.value = ''
}

function serchInputLG(e) {
    let userData = e.target.value
    let arrData = []

    if (userData && userData.length > 2) {
        suggestFrame.style.display = 'block'
        arrData = data.filter(value => value.title.toLocaleLowerCase().includes(userData.toLocaleLowerCase()))
        arrData = arrData.map(value => {
            return `<li class="suggest-item">
                <a href="${value.link_info}">
                    <div class="image"><img src="${value.image_title}" alt="${value.title}"></div>
                    <div class="title-mv">
                        <p>${value.title}</p>
                        <span class="last-ep">${value.episodes}/</span>
                    </div>
                </a>
            </li>`
        })
    } else suggestFrame.style.display = 'none'
    render(arrData)
}

function render(list) {
    let listSuggest
    if (!list.length) listSuggest = '<li class="not-found-item">Không tìm thấy kết quả!</li>'
    else  listSuggest = list.join('')
    suggestList.innerHTML = listSuggest
}