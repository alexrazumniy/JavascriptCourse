const renderGreeting = () => {
    const greeting = document.createElement("h1");
    greeting.innerText = `Добро пожаловать`;
    greeting.style.textAlign = 'center'

    document.body.append(greeting);
};

let visitCounter;

const updateLocalStorage = (visitCounter) => {
    localStorage.setItem("counter", JSON.stringify(visitCounter));
};

// const handleSubmit = (event) => {
//     event.preventDefault();

//     const { value: name } = nameInput;
//     const { value: email } = emailInput;

//     updateLocalStorage({ name, email });

//     renderGreeting(name);
// }


const init = () => {
    if (localStorage.getItem(visitCounter)) {
        JSON.parse(localStorage.getItem(visitCounter));
        greeting.innerText = `Вы заходили раз: ${visitCounter ++}`;
    } 
    renderGreeting()
};

init();

// localStorage.removeItem(USER_LOCALSTORAGE_KEY)


