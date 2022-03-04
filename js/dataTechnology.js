const JSON_DATA_TECHNOLOGY = {
    technology: [
        {
            name: 'Launch vehicle',
            images: {
                portrait:
                    '../assets/technology/image-launch-vehicle-portrait.jpg',
                landscape:
                    '../assets/technology/image-launch-vehicle-landscape.jpg',
            },
            description:
                "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
            name: 'Spaceport',
            images: {
                portrait: '../assets/technology/image-spaceport-portrait.jpg',
                landscape: '../assets/technology/image-spaceport-landscape.jpg',
            },
            description:
                'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        },
        {
            name: 'Space capsule',
            images: {
                portrait:
                    '../assets/technology/image-space-capsule-portrait.jpg',
                landscape:
                    '../assets/technology/image-space-capsule-landscape.jpg',
            },
            description:
                "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
    ],
}

const ARTICLE_HEADER = document.querySelector('.article__header')
const ARTICLE_P = document.querySelector('.article__p')
const SECTION_IMG = document.querySelector('.main__img')

let i = 0

function fillTheData(JSON_DATA_TECHNOLOGY)
{
    SECTION_IMG.setAttribute('src', JSON_DATA_TECHNOLOGY.technology[i].images.portrait)
    SECTION_IMG.setAttribute('alt', JSON_DATA_TECHNOLOGY.technology[i].name)
    ARTICLE_HEADER.innerHTML = JSON_DATA_TECHNOLOGY.technology[i].name
    ARTICLE_P.innerHTML = JSON_DATA_TECHNOLOGY.technology[i].description
}

fillTheData(JSON_DATA_TECHNOLOGY)

BTN_ONE.addEventListener('click', () => {
    i = 0

    fillTheData(JSON_DATA_TECHNOLOGY)
})
BTN_ONE.addEventListener('keypress', () => {
    i = 0

    fillTheData(JSON_DATA_TECHNOLOGY)
})

BTN_TWO.addEventListener('click', () => {
    i = 1

    fillTheData(JSON_DATA_TECHNOLOGY)
})
BTN_TWO.addEventListener('keypress', () => {
    i = 1

    fillTheData(JSON_DATA_TECHNOLOGY)
})

BTN_THREE.addEventListener('click', () => {
    i = 2

    fillTheData(JSON_DATA_TECHNOLOGY)
})
BTN_THREE.addEventListener('keypress', () => {
    i = 2

    fillTheData(JSON_DATA_TECHNOLOGY)
})
