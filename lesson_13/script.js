const d = document.querySelectorAll('.img')
console.log(d);


const buttonNext = document.getElementById('btn_next');
const handleParentClick = (event) => {
    const clickedElement = event.target;
}

buttonNext.addEventListener('click', handleParentClick)