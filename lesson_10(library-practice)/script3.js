const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
    { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
    { id: 3, author: "Оруэл", name: "1984", isReading: false },
    { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
    { id: 5, author: "Достоевский", name: "Преступление и наказание", isReading: false },
];

function library() {
    const action = prompt(`Какое действие вы хотите выполнить? Для выбора введите:
1 - взять книгу, 2 - вернуть книгу, 3 - добавить книгу`);

    switch (action) {
        case "1":
            takeBook();
            break;
        case "2":
            returnBook();
            break;
        case "3":
            addMyBook();
            break;
        case '':
            alert(`Ничего не выбрано. Выберите значение
1 - взять книгу, 2 - вернуть книгу, 3 - добавить книгу`);
            break;
        case null:
            alert("Жаль, что уже уходите :(");
            break;
        default:
            alert("Неверное значение");
    }
}


const takeBook = () => {

    const availableBooksList = books
        .filter((book) => !book.isReading)
        .map((book) => `- ${book.name}. (Автор - ${book.author})`)
        .join("\n");

    let desiredBookNameOrAuthor = prompt(`Введите название книги или автора из списка: \n${availableBooksList}`);

    if (!desiredBookNameOrAuthor) {
        alert(`Ничего не выбрано`)

        return;
    }

    desiredBookNameOrAuthor = desiredBookNameOrAuthor.trim().toLowerCase();

    const desiredBook = books.find((book) => {
        return book.name.toLowerCase() === desiredBookNameOrAuthor || book.author.toLowerCase() === desiredBookNameOrAuthor;
    });

    if (!desiredBook) {
        alert(`Нет книги с таким названием`)

        return;
    }

    if (desiredBook.isReading) {
        alert(`Извините, эту книгу уже взяли почитать!`)

        return;
    }

    desiredBook.isReading = true;

    alert(`Отличный выбор! ID вашей книги - ${desiredBook.id}. Запомните его!`);

    console.log(books);
};

const returnBook = () => {
    const returningBookId = +prompt(`Введите ID книги, которую хотите вернуть`);

    if (!returningBookId) {
        alert(`Вы ничего не ввели!`);

        return;
    }

    const currentBook = books.find((book) => book.id === returningBookId);

    if (!currentBook) {
        alert(`Неверный ID книги! Введите корректный ID`)

        return;
    }

    if (!currentBook.isReading) {
        alert(`Вы не брали книгу с таким ID`)

        return;
    }

    currentBook.isReading = false;
    alert(`Спасибо, приходите к нам еще! Вам понравилась книга ${currentBook.name}?`);
};

const addMyBook = () => {

    const name = prompt(`Введите название книги, которую хотите добавить в библиотеку`);
    const author = prompt(`Введите автора книги, которую хотите добавить в библиотеку`);

    const invalidName = books.find(book => book.name === name && book.author === author);

    const newBook = {
        id: generateBookId(),
        author: author,
        name: name,
        isReading: false,
    }

    if (invalidName) {
        alert(`Спасибо конечно, но такая книга у нас уже есть. Приносите что-нибудь другое:)`);

        return;
    }

    console.log(newBook);
    books.push(newBook);

    alert(`Спасибо, книга добавлена в библиотеку! ID книги ${newBook.id}?`);
}

function generateBookId() {
    let isBookWithIdExists = true;
    let generatedId;

    do {
        generatedId = Math.ceil(Math.random() * 1000);
        // console.log(generatedId);
        isBookWithIdExists = Boolean(books.find((book) => book.id === generateBookId))
        // console.log(isBookWithIdExists);
    } while (isBookWithIdExists);

    return generatedId;
}