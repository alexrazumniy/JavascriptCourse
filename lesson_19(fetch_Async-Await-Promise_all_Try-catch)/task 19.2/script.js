const BASE_URL = "https://swapi.dev/api/films";

// const showPreloader = (show) => {
//     if (show) {
//         preloader.style.display = "block";
//     } else {
//         preloader.style.display = "none";
//     }
// };

const getAllFilms = async (url) => {

    try {
        const response = await fetch(url);
        if (response.status === 200 || response.status === 201) {
            const filmsRes = await response.json();
            console.log(filmsRes);
        } else {
            throw new Error(`An error has occurred. Error status ${response.status}`)
        }
    } catch (err) {
        let errorText = err.message
        // alert(errorText)
    }
}
getAllFilms(BASE_URL)
