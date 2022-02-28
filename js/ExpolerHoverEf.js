const BUTTON = document.querySelector('.main__button')

let radiusBlob0 = '30% 70% 70% 30% / 53% 30% 70% 47%'
let radiusBlob1 = '53% 47% 34% 66% / 63% 46% 54% 37%'
let radiusBlob2 = '37% 63% 56% 44% / 49% 56% 44% 51%'
let radiusBlob3 = '63% 37% 37% 63% / 43% 37% 63% 57%'
let radiusBlob4 = '49% 51% 48% 52% / 57% 44% 56% 43%'

let random = Math.floor(Math.random() * 5)

switch (random) {
    case 0:
        BUTTON.style.setProperty('--radius-blob-js', radiusBlob0)
        break
    case 1:
        BUTTON.style.setProperty('--radius-blob-js', radiusBlob1)
        break
    case 2:
        BUTTON.style.setProperty('--radius-blob-js', radiusBlob2)
        break
    case 3:
        BUTTON.style.setProperty('--radius-blob-js', radiusBlob3)
        break
    case 4:
        BUTTON.style.setProperty('--radius-blob-js', radiusBlob4)
        break
}

BUTTON.addEventListener('focus', () => {
    random = Math.floor(Math.random() * 5)

    switch (random) {
        case 0:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob0)
            break
        case 1:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob1)
            break
        case 2:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob2)
            break
        case 3:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob3)
            break
        case 4:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob4)
            break
    }
})

BUTTON.addEventListener('mouseenter', () => {
    random = Math.floor(Math.random() * 5)

    switch (random) {
        case 0:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob0)
            break
        case 1:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob1)
            break
        case 2:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob2)
            break
        case 3:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob3)
            break
        case 4:
            BUTTON.style.setProperty('--radius-blob-js-after', radiusBlob4)
            break
    }
})
