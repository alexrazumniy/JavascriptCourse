const renderGreeting = () => {
    const greeting = document.createElement("h1");
    greeting.innerText = `Добро пожаловать`;
    greeting.style.textAlign = 'center'

    document.body.append(greeting);
};
renderGreeting()


const updateVisitsCount = () => {
    let visits = [JSON.parse(localStorage.getItem("visitsCount"))];
    // console.log(visits);

    for (n of visits) {
        visits++;
        localStorage.setItem("visitsCount", JSON.stringify(visits));
    }
    if (n > 0) {
        const isVisited = document.createElement("h2"); // При втором посещении создаем блок "Вы заходили раз..."
        document.body.append(isVisited);
        isVisited.innerText = `Вы заходили раз: ${visits}`;
        isVisited.style.textAlign = 'center'
    }
};

updateVisitsCount()

// localStorage.removeItem("visitsCount")