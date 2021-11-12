const videoPlayer = document.getElementById('video-player')
const video = document.getElementById('video')
const progressAreaTime = videoPlayer.querySelector('.progress-time')
const controls = videoPlayer.querySelector('.controls')
const progressArea = videoPlayer.querySelector('.progress-area')
const progressBar = videoPlayer.querySelector('.progress-bar')
const fastRewind = videoPlayer.querySelector('.fast-rewind')
const playPause = videoPlayer.querySelector('.play')
const fastForward = videoPlayer.querySelector('.fast-forward')
const volume = videoPlayer.querySelector('.volume')
const volumeRange = videoPlayer.querySelector('.volume-range')
const current = videoPlayer.querySelector('.current')
const duration = videoPlayer.querySelector('.duration')
const settingsBtn = videoPlayer.querySelector('.settings-btn')
const pictureInPicutre = videoPlayer.querySelector('.picture-in-picutre')
const fullscreen = videoPlayer.querySelector('.fullscreen')
const settings = videoPlayer.querySelector('#settings')
const playback = videoPlayer.querySelectorAll('.playback li')

// function play
function playVideo() {
    playPause.innerHTML = 'pause'
    playPause.title = 'pause'
    videoPlayer.classList.add('paused')
    video.play()
}

// function stop
function pauseVideo() {
    playPause.innerHTML = 'play_arrow'
    playPause.title = 'play'
    videoPlayer.classList.remove('paused')
    video.pause()
}

// toggle start and stop
playPause.addEventListener('click', () => {
    const isVideoPaused = videoPlayer.classList.contains('paused')
    isVideoPaused ? pauseVideo() : playVideo()
})

// nếu chạy video thì cũng gọi hàm play và ngược lại
video.addEventListener('play', () => {
    playVideo()
})

video.addEventListener('pause', () => {
    pauseVideo()
})

video.addEventListener('click', () => {
    const isVideoPaused = videoPlayer.classList.contains('paused')
    isVideoPaused ? pauseVideo() : playVideo()
})

// hàm tua về
fastRewind.addEventListener('click', () => {
    video.currentTime -= 10
})

// hàm tua đi
fastForward.addEventListener('click', () => {
    video.currentTime += 10
})

// sự kiện load video
video.addEventListener('loadeddata', e => {
    let videoDuration = e.target.duration
    let totalHour = Math.floor(videoDuration / 60 / 60)
    let totalMin = Math.floor(videoDuration / 60 % 60)
    let totalSec = Math.floor(videoDuration % 60)

    totalMin < 10 ? totalMin = '0' + totalMin : totalMin
    totalSec < 10 ? totalSec = '0' + totalSec : totalSec
    duration.innerHTML = `${totalHour}:${totalMin}:${totalSec}`
})


video.addEventListener('timeupdate', e => {
    let currentVideoTime = e.target.currentTime
    let currentHour = Math.floor(currentVideoTime / 60 / 60)
    let currentMin = Math.floor(currentVideoTime / 60 % 60)
    let currentSec = Math.floor(currentVideoTime % 60)

    currentMin < 10 ? currentMin = '0' + currentMin : currentMin
    currentSec < 10 ? currentSec = '0' + currentSec : currentSec
    current.innerHTML = `${currentHour}:${currentMin}:${currentSec}`

    let videoDuration = e.target.duration

    let progressWidth = (currentVideoTime / videoDuration) * 100
    progressBar.style.width = `${progressWidth}%`
})

// let's update playing video current time on according to the progress bar width
progressArea.addEventListener('click', e => {
    let videoDuration = video.duration
    let progressWidth = progressArea.clientWidth
    let clickOffsetX = e.offsetX
    video.currentTime = (clickOffsetX / progressWidth) * videoDuration
})

// change volume
function changeVolume() {
    video.volume = volumeRange.value / 100
    if (volumeRange.value == 0) {
        volume.innerHTML = 'volume_off'
    } else if (volumeRange.value < 40) {
        volume.innerHTML = 'volume_down'
    } else {
        volume.innerHTML = 'volume_up'
    }

}

function muteVolume() {
    if (volumeRange.value == 0) {
        volumeRange.value = 80
        video.volume = 0.8
        volume.innerHTML = 'volume_up'
    } else {
        volumeRange.value = 0
        video.volume = 0
        volume.innerHTML = 'volume_off'
    }
}


volumeRange.addEventListener('change', () => {
    changeVolume()
})

volume.addEventListener('click', () => {
    muteVolume()
})


// Update progress area time and display block on mouse move
progressArea.addEventListener('mousemove', (e) => {
    let progressWidth = progressArea.clientWidth
    let x = e.offsetX
    progressAreaTime.style.setProperty('--x', `${x}px`)
    progressAreaTime.style.display = 'block'
    let videoDuration = video.duration
    let progressTime = Math.floor((x / progressWidth) * videoDuration)
    let currentHour = Math.floor(progressTime / 60 / 60)
    let currentMin = Math.floor(progressTime / 60 % 60)
    let currentSec = Math.floor(progressTime % 60)

    currentMin < 10 ? currentMin = '0' + currentMin : currentMin
    currentSec < 10 ? currentSec = '0' + currentSec : currentSec
    progressAreaTime.innerHTML = `${currentHour}:${currentMin}:${currentSec}`

})

progressArea.addEventListener('mouseleave', () => {
    progressAreaTime.style.display = 'none'
})

pictureInPicutre.addEventListener('click', () => {
    video.requestPictureInPicture()
})

fullscreen.addEventListener('click', () => {
    if (!videoPlayer.classList.contains('openFullScreen')) {
        videoPlayer.classList.add('openFullScreen')
        fullscreen.innerHTML = "fullscreen_exit"
        videoPlayer.requestFullscreen()
    } else {
        videoPlayer.classList.remove('openFullScreen')
        fullscreen.innerHTML = "fullscreen"
        document.exitFullscreen()
    }
})

// Open settings
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('active')
    settingsBtn.classList.toggle('active')
})

// Playback Rate
playback.forEach(value => {
    value.addEventListener('click', () => {
        removeActiveClasses()
        value.classList.add('active')
        let speed = value.getAttribute('data-speed')
        video.playbackRate = speed
        settings.classList.remove('active')
    })
})

function removeActiveClasses() {
    playback.forEach(value => {
        value.classList.remove('active')
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const latesWatchFrame = document.querySelector('.lastes-watch')
const timeWatchLastes = latesWatchFrame.querySelector('.lastes-watch span')
const continuteBtn = latesWatchFrame.querySelector('.lastes-watch .continute')
const reWatchBtn = latesWatchFrame.querySelector('.lastes-watch .re-watch')
const latesWatchLayer = document.querySelector('.lastes-watch-overlay')

// Lưu đường dẫn video và thời gian đang xem vào localstorage
window.addEventListener('unload', () => {
    localStorage.setItem('duration', `${video.currentTime}`)
    localStorage.setItem('src', `${video.getAttribute('src')}`)
})

window.addEventListener('load',()=>{
    let getDuration = localStorage.getItem('duration')
    let getSrc = localStorage.getItem('src')
    if (getSrc = video.src && getDuration > 30) {
        latesWatchLayer.style.display = 'block'
        latesWatchFrame.style.display = 'block'
        let currentHour = Math.floor(getDuration / 60 / 60)
        let currentMin = Math.floor(getDuration / 60 % 60)
        let currentSec = Math.floor(getDuration % 60)
    
        currentMin < 10 ? currentMin = '0' + currentMin : currentMin
        currentSec < 10 ? currentSec = '0' + currentSec : currentSec
        timeWatchLastes.innerHTML = `${currentHour}:${currentMin}:${currentSec}`
        continuteBtn.addEventListener('click', () => {
            latesWatchFrame.style.display = 'none'
            latesWatchLayer.style.display = 'none'
            video.currentTime = getDuration
            video.play()
        })
        reWatchBtn.addEventListener('click', () => {
            latesWatchFrame.style.display = 'none'
            latesWatchLayer.style.display = 'none'
            video.currentTime = 0
            video.play()
        })
    }
})

// ẩn hiện thanh controls trên pc
videoPlayer.addEventListener('mousemove', () => {
    controls.classList.add('active')
    setTimeout(() => {
        controls.classList.remove('active')
    }, 6000)
})

videoPlayer.addEventListener('mouseleave', () => {
    controls.classList.remove('active')
})