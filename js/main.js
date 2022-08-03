const btnWatch = document.querySelector('.btn-watch');
const btnClose = document.querySelector('.close-btn');
const trailerPage = document.querySelector('.trailer-page')
const videoEl = document.querySelector('.video-trailer')
btnWatch.addEventListener('click',()=>{
    trailerPage.classList.add('active')
})
btnClose.addEventListener('click',()=>{
    trailerPage.classList.remove('active')
    videoEl.pause();
    videoEl.currentTime = 0;
})