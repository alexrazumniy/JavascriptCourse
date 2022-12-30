const buttonNext = document.getElementById('btn_next');
const buttonPrev = document.getElementById('btn_prev');
const imageGallery = [...document.querySelectorAll('img')];

let i = 1;
let j = 0;
let counter;

const showNextImage = (event) => {
    for (let img of imageGallery) {
        imageGallery[i].style.display = 'block';
    }
    counter = i ++

    for (let img of imageGallery) {
        imageGallery[j].style.display = 'none';
    }
    counter = j ++

    if (i === imageGallery.length) {
        i = 0
    }

    if (j === imageGallery.length) {
        j = i - 1
    }
    console.log(`counter`, counter);
    return counter
}

buttonNext.addEventListener('click', showNextImage)

const showPrevImage = (event) => {
    for (let img of imageGallery) {
        imageGallery[i].style.display = 'block';
    }
    counter = imageGallery.length --

    for (let img of imageGallery) {
        imageGallery[j].style.display = 'none';
    }
    counter = imageGallery.length --

    if (i === 0) {
        i = imageGallery.length
    }

    if (j === imageGallery.length) {
        j = i + 1
    }
}

buttonPrev.addEventListener('click', showPrevImage)



// buttonPrev.addEventListener('click', handleParentClick)
// buttonNext.removeEventListener('click', showNextImage)


