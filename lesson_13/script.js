const buttonNext = document.getElementById('btn_next');
const buttonPrev = document.getElementById('btn_prev');

const imageGallery = [...document.querySelectorAll('img')];
console.log(imageGallery.length);

// let i = 0;
// const showNextImage = (event) => {
//     event.target = imageGallery[i].classList.replace('img', 'visible');
//     if(event.target) {
//         i += 1
//     }
//     console.log(i);
// }

let i = 0;
const showNextImage = (event) => {
    for (let img of imageGallery) {
        img = imageGallery[i].classList.replace('img', 'visible')
    }
    i += 1
    if (i === imageGallery.length) {
        i = 0
    }
    console.log(i);
}

buttonNext.addEventListener('mousedown', showNextImage)

let j = i + 1;
const showCCCImage = (event) => {
    for (let img of imageGallery) {
        img = imageGallery[j].classList.replace('visible', 'img')
    }
    if (j === imageGallery.length) {
        j = 0
    }
    j += 1
    console.log(j);
}

buttonNext.addEventListener('mouseup', showCCCImage)


// buttonPrev.addEventListener('click', handleParentClick)
// buttonNext.removeEventListener('click', showNextImage)




/* цей код позначає картинки, для зручності розробки */
// let i = 1;
// for(let li of carousel.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//   i++;
// }

// /* Конфігурація */
// let width = 130; // ширина зображення
// let count = 3; // видима кількість зображень

// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');

// let position = 0; // початкова позиція каруселі

// carousel.querySelector('.prev').onclick = function() {
//   // зсув ліворуч
//   position += width * count;
//   // останній зсув вліво може бути не на 3, а на 2 або 1 елемент
//   position = Math.min(position, 0)
//   list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function() {
//   // зсув праворуч
//   position -= width * count;
//   // останнє пересування вправо може бути не на 3, а на 2 або 1 елемент
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = position + 'px';
// };