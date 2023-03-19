const createTooltip = (element, tooltipText) => {
    
    targetElement = document.querySelector(`${element}`)
    // targetElement = document.getElementById(`${element}`);
    const targetCoords = targetElement.getBoundingClientRect();

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    document.body.append(tooltipElem);
    tooltipElem.innerText = tooltipText;

    let left = (targetElement.offsetWidth - tooltipElem.offsetWidth) / 2 + targetCoords.left;
    if (left < 0) left = 5; // чтоб не заходило за левый край окна и не сливалось с краем 

    let top = targetCoords.top - tooltipElem.offsetHeight - 10;
    
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

}

createTooltip('button', 'Here is the text tooltip')


// console.dir(targetElement);
// console.log(`tooltip.classList`, tooltipElem.classList);
// console.log(targetCoords);    


// Видимость подсказки

// button.addEventListener('click', () => toggleTooltip(visible))

// tooltipElem = document.querySelector('.tooltip');
// const toggleTooltipVisibility = (element, className) => {
//     element.classList.contains(className) ? element.classList.remove(className) : element.classList.add(className)
// }

// toggleTooltipVisibility(tooltipElem, 'visible')
