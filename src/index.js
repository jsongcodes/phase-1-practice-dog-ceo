console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {

    let dogUL = document.getElementById('dog-breeds')

    let dogImageContainer = document.getElementById('dog-image-container')

    console.log('dogImageContainer')
    //Challenge1
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(function (jsonObject) {
            let arrOfDogsURLs = jsonObject.message
            arrOfDogsURLs.forEach(url => {
                dogImageContainer.innerHTML += makeImageTagString(url)

            })
        })
    //Challenge2
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(response => {
            let dogBreedsArr = Object.keys(response.message)
            dogBreedsArr.forEach((breed) => {
                dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
            })
        })
    //Challenge3
    dogUL.addEventListener('click', function (event) {
        if (event.target.dataset.info === "breed") {
            event.target.style.color = "green"
        }
    })

    //Challenge4
    let dogSelect = document.getElementById('breed-dropdown')
    dogSelect.addEventListener('change', (event) => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                let dogBreedsArr = Object.keys(res.message)
                let filteredArray = dogBreedsArr.filter(breed => {
                    return breed.startsWith(event.target.value);
                })
                debugger;
                console.log(event.target.value)
            })
    })
    //DOMContentLoaded
})

function handleImageAppending(jsonObject) { }

function makeImageTagString(url) {
    return `<img src="${url}"/>`
}

function addLitoDOM(breed) {
    let dogUL = document.getElementById('dog-breeds')
    dogUL.innerHTML += `<li>${breed}</li>`
}

function changeLiColor() {

}

// document.addEventListener('DOMContentLoaded', function(){
//     let dogBreedList = document.getElementById('dog-breeds')

//     fetch('https://dog.ceo/api/breeds/list/all')
//     .then(response => response.json())
//     .then(function (breeds){
//         let 
//     })
// })