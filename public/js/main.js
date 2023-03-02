const $ = (tag) => document.querySelector(tag);
const $$ = (tags) => document.querySelectorAll(tags)


// Indicators
const carousel = $('#guide-steps')
const stepIndicator = $('.step-indicator')
const btnIndicators = $$('.carousel-indicators button')

carousel.addEventListener('slide.bs.carousel', function (slide) {
    btnIndicators.forEach(btn => {
        const regexShadow = new RegExp(/\w+-shadow/)
        if(btn.className.match(regexShadow)) {
            if(btn.className.match('active')) {
                btn.className = 'active'
            } else {
                btn.className = ''
            }
        }
    })
    
    stepIndicator.classList.remove('appear')
    void stepIndicator.offsetWidth
    stepIndicator.classList.add('appear')
    stepIndicator.innerText = slide.to + 1
    const activeIndicatorXPath = `//button[text()=${slide.to + 1}]`;
    const activeIndicator = document.evaluate(activeIndicatorXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    activeIndicator.classList.add(`${getShadowColor(activeIndicator.innerText)}-shadow`)


})

const getShadowColor = (indicatorNumber) => {
    let color
    if (indicatorNumber < 4) {
        color = 'yellow'
    } else if (indicatorNumber < 8) {
        color = 'purple'
    } else if (indicatorNumber < 10 ) {
        color = 'green'
    } else {
        color = 'blue'
    }
    return color
}

// copy to clipboard
const codeElements = $$('code')
codeElements.forEach(el => el.addEventListener('click', (e) => {
    navigator.clipboard.writeText(el.innerText)
}))