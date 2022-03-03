const JSON_DATA_CREW = {
    crew: [
        {
            name: 'Douglas Hurley',
            images: {
                png: '../assets/crew/image-douglas-hurley.png',
                webp: '../assets/crew/image-douglas-hurley.webp',
            },
            role: 'Commander',
            bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        },
        {
            name: 'Mark Shuttleworth',
            images: {
                png: '../assets/crew/image-mark-shuttleworth.png',
                webp: '../assets/crew/image-mark-shuttleworth.webp',
            },
            role: 'Mission Specialist',
            bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        },
        {
            name: 'Victor Glover',
            images: {
                png: '../assets/crew/image-victor-glover.png',
                webp: '../assets/crew/image-victor-glover.webp',
            },
            role: 'Pilot',
            bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        },
        {
            name: 'Anousheh Ansari',
            images: {
                png: '../assets/crew/image-anousheh-ansari.png',
                webp: '../assets/crew/image-anousheh-ansari.webp',
            },
            role: 'Flight Engineer',
            bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        },
    ],
}

const CARD_HEADER_ROLE = document.querySelector('.card__header--role')
const CARD_HEADER_NAME = document.querySelector('.card__header--name')
const CARD_P = document.querySelector('.card__p')
const SECTION_IMG = document.querySelector('.section__img')
const SECTION_WEBP = document.querySelector('.section__webp')
const SECTION_PICTURE = document.querySelector('.section__picture')

const CREW_ONE = document.querySelector('.crew--one')
const CREW_TWO = document.querySelector('.crew--two')
const CREW_THREE = document.querySelector('.crew--three')
const CREW_FOUR = document.querySelector('.crew--four')

let i = 0

function fillTheData(JSON_DATA_CREW) {
    CARD_HEADER_ROLE.innerHTML = JSON_DATA_CREW.crew[i].role
    CARD_HEADER_NAME.innerHTML = JSON_DATA_CREW.crew[i].name
    CARD_P.innerHTML = JSON_DATA_CREW.crew[i].bio
    SECTION_IMG.setAttribute('src', JSON_DATA_CREW.crew[i].images.png)
    SECTION_WEBP.setAttribute('srcset', JSON_DATA_CREW.crew[i].images.webp)
}

function crewOne() {
    i = 0

    SECTION_PICTURE.style.transform = 'translateY(107px)'
    CREW_ONE.style.background = 'hsl(0, 0%, 100%, 0.3)'
    CREW_TWO.style.background = null
    CREW_THREE.style.background = null
    CREW_FOUR.style.background = null

    fillTheData(JSON_DATA_CREW)
}

function crewTwo()
{
    i = 1

    SECTION_PICTURE.style.transform = 'translateY(77px)'
    CREW_ONE.style.background = null
    CREW_TWO.style.background = 'hsl(0, 0%, 100%, 0.3)'
    CREW_THREE.style.background = null
    CREW_FOUR.style.background = null

    fillTheData(JSON_DATA_CREW)
}

function crewThree()
{
    i = 2

    SECTION_PICTURE.style.transform = 'translateY(77px)'
    CREW_ONE.style.background = null
    CREW_TWO.style.background = null
    CREW_THREE.style.background = 'hsl(0, 0%, 100%, 0.3)'
    CREW_FOUR.style.background = null

    fillTheData(JSON_DATA_CREW)
}

function crewFour()
{
    i = 3

    SECTION_PICTURE.style.transform = 'translateY(77px)'
    CREW_ONE.style.background = null
    CREW_TWO.style.background = null
    CREW_THREE.style.background = null
    CREW_FOUR.style.background = 'hsl(0, 0%, 100%, 0.3)'

    fillTheData(JSON_DATA_CREW)
}

    CREW_ONE.style.background = 'hsl(0, 0%, 100%, 0.3)'

fillTheData(JSON_DATA_CREW)

CREW_ONE.addEventListener('keypress', () => {
    crewOne()
})

CREW_ONE.addEventListener('click', () => {
    crewOne()
})

CREW_TWO.addEventListener('keypress', () => {
    crewTwo();
})

CREW_TWO.addEventListener('click', () => {
    crewTwo()
})

CREW_THREE.addEventListener('keypress', () => {
    crewThree()
})

CREW_THREE.addEventListener('click', () => {
    crewThree()
})

CREW_FOUR.addEventListener('keypress', () => {
    crewFour()
})

CREW_FOUR.addEventListener('click', () => {
    crewFour()
})
