const buttonNext = document.getElementById('btn_next');
const buttonPrev = document.getElementById('btn_prev');
const imageGallery = [...document.querySelectorAll('img')];

let currentImageIndex = 0;

const slider = () => {
	for (let i = 0; i < imageGallery.length; i ++) {
		imageGallery[i].style.display = 'none';
	}
	imageGallery[currentImageIndex].style.display = 'block';	
}
slider();

const showNextImage = () => {
	
	if (currentImageIndex + 1 === imageGallery.length) {
		currentImageIndex = 0;
	} else {
		currentImageIndex ++
	}
	slider();
}
buttonNext.addEventListener('click', showNextImage)

const showPrevImage = () => {
	
	if (currentImageIndex - 1 === -1) {
		currentImageIndex = imageGallery.length - 1;
	} else {
		currentImageIndex --
	}
	slider();
}
buttonPrev.addEventListener('click', showPrevImage)