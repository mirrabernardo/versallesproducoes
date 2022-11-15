feather.replace()

const menuEl = document.getElementById('menu')
const lateralMenuEl = document.getElementById('lateral-menu')

menuEl.addEventListener('click', handleMenu)

function handleMenu() {
    
    const lateralMenuClassList = Array.from(lateralMenuEl.classList) 
    const isActive = lateralMenuClassList.find(el => el === 'active')

    if(isActive) {
        lateralMenuEl.classList.remove('active')
        return
    }
    lateralMenuEl.classList.add('active')
}

const previousEL = document.getElementById('previous')
const nextEL = document.getElementById('next')
const sliderEl = document.getElementById('slider')
let interval = undefined
let timeout = undefined

previousEL.addEventListener('click', onPreviousClick)
nextEL.addEventListener('click', onNextClick)

autoScroll()

function onPreviousClick() {
    const sliderWidht = sliderEl.offsetWidth
    sliderEl.scrollLeft -= sliderWidht
    handleSliderClick()
}

function onNextClick() {
    const sliderWidht = sliderEl.offsetWidth
    sliderEl.scrollLeft += sliderWidht
    handleSliderClick()
}


function handleSliderClick() {
    clearTimeout(timeout)
    clearInterval(interval)
    timeout = setTimeout( () => {
        autoScroll()
    }, 5000)
}


function autoScroll() {
    interval = setInterval( () => {
        const sliderWidht = sliderEl.offsetWidth
        
        const numberOfImages = sliderEl.childElementCount
        const selectedImage = (sliderEl.scrollLeft/sliderWidht) + 1
        
        if(numberOfImages === selectedImage) {
            sliderEl.scrollLeft = 0
            return
        }
        sliderEl.scrollLeft += sliderWidht
    }, 5000)
}
