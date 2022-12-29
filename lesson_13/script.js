const buttonNext = document.getElementById('btn_next');
const buttonPrev = document.getElementById('btn_prev');

const imageGallery = [...document.querySelectorAll('img')];
let currentImage = []


let i = 1;
let j = 0;

const showNextImage = (event) => {
    for (let img of imageGallery) {
        imageGallery[i].style.display = 'block';
    }
    i ++

    for (let img of imageGallery) {
        imageGallery[j].style.display = 'none';
    }
    j ++

    if (i === imageGallery.length) {
        i = 0
    }

    if (j === imageGallery.length) {
        j = i - 1
    }
}

buttonNext.addEventListener('click', showNextImage)

const showPrevImage = (event) => {
    for (let img of imageGallery) {
        imageGallery[i].style.display = 'block';
    }
    i ++

    for (let img of imageGallery) {
        imageGallery[j].style.display = 'none';
    }
    j ++

    if (i === imageGallery.length) {
        i = 0
    }

    if (j === imageGallery.length) {
        j = i - 1
    }
}

buttonPrev.addEventListener('click', showPrevImage)



// buttonPrev.addEventListener('click', handleParentClick)
// buttonNext.removeEventListener('click', showNextImage)


