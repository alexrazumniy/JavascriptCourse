const container = document.getElementById("container");
const preloader = document.getElementById("preloader");
const countryElem = document.getElementById("country");
const countryCapitalElem = document.getElementById("country_capital");
const currencyElem = document.getElementById("currency");
const flagImg = document.getElementById("flag");

const BASE_URL = "https://ipapi.co/json";
const COUNTRY_FLAG = "https://restcountries.com/v2/name";


const showPreloader = (show) => {
    if (show) {
        preloader.style.display = "block";
    } else {
        preloader.style.display = "none";
    }
};

const getCountry = async (url) => {

    showPreloader(true);

    const response = await fetch(url);
    const countryRes = await response.json();
    const {country_name: country, country_capital: capital, currency} = countryRes;
    console.log(countryRes);
        
    getCountryFlag(COUNTRY_FLAG, country);
    createCountryCard(country, capital, currency);

}
getCountry(BASE_URL)


const getCountryFlag = async (url, countryName) => {

    const response = await fetch(`${COUNTRY_FLAG}/${countryName}`);
    const flag = await response.json();
    const flagRes = renderFlag(flag[0].flag);    
}

const renderFlag = (flag) => {
    flagImg.setAttribute('src', flag);
}

const createCountryCard = (country_name, country_capital, currency) => {
    countryElem.innerText = country_name;
    countryCapitalElem.innerText = country_capital;
    currencyElem.innerText = currency;

    showPreloader(false);
};


