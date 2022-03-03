const JSON_DATA_DESTINATION = {
    destinations: [
        {
            name: 'Moon',
            images: {
                png: '../assets/destination/image-moon.png',
                webp: '../assets/destination/image-moon.webp',
            },
            description:
                'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,400 km',
            travel: '3 days',
        },
        {
            name: 'Mars',
            images: {
                png: '../assets/destination/image-mars.png',
                webp: '../assets/destination/image-mars.webp',
            },
            description:
                'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distance: '225 mil. km',
            travel: '9 months',
        },
        {
            name: 'Europa',
            images: {
                png: '../assets/destination/image-europa.png',
                webp: '../assets/destination/image-europa.webp',
            },
            description:
                'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 mil. km',
            travel: '3 years',
        },
        {
            name: 'Titan',
            images: {
                png: '../assets/destination/image-titan.png',
                webp: '../assets/destination/image-titan.webp',
            },
            description:
                'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 bil. km',
            travel: '7 years',
        },
    ],
}

let sectionImg = document.querySelector('.section__img')
let sectionWebp = document.querySelector('.section__webp')
let cardHeader = document.querySelector('.card__header')
let cardP = document.querySelector('.card__p')
let headerDistance = document.querySelector('.p--distance')
let headerTime = document.querySelector('.p--time')

let i = 0

const MOON = document.querySelector('.moon')
const MARS = document.querySelector('.mars')
const EUROPA = document.querySelector('.europa')
const TITAN = document.querySelector('.titan')

fillTheData(JSON_DATA_DESTINATION)

function fillTheData(JSON_DATA) {
    sectionImg.setAttribute('src', JSON_DATA.destinations[i].images.png)
    sectionWebp.setAttribute('srcset', JSON_DATA.destinations[i].images.webp)
    cardHeader.innerHTML = JSON_DATA.destinations[i].name
    cardP.innerHTML = JSON_DATA.destinations[i].description
    headerDistance.innerHTML = JSON_DATA.destinations[i].distance
    headerTime.innerHTML = JSON_DATA.destinations[i].travel
}

MOON.addEventListener('click', () => {
    i = 0
    fillTheData(JSON_DATA_DESTINATION)
})
MARS.addEventListener('click', () => {
    i = 1
    fillTheData(JSON_DATA_DESTINATION)
})
EUROPA.addEventListener('click', () => {
    i = 2
    fillTheData(JSON_DATA_DESTINATION)
})
TITAN.addEventListener('click', () => {
    i = 3
    fillTheData(JSON_DATA_DESTINATION)
})
