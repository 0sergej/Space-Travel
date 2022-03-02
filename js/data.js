const {data} = require('autoprefixer')

let h2 = document.getElementsByClassName('.card__header')

data = {
    items: [
        {
            title: 'sample 1',
            author: 'author 1',
        },
        {
            title: 'sample 2',
            author: 'author 2',
        },
    ],
}

console.log(data)

data.items.forEach(function (v, i) {
    h2[i].innerHTML = v.title
    console.log('added myb')
    console.log('v.title' + v.title)
    console.log('h2[i].innerHTML' + h2[i].innerHTML)
})

console.log('done')
