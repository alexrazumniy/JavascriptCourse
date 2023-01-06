const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    { id: 1, author: "Фицджеральд", name: "Великий Гетсби", amount: 5 },
    { id: 2, author: "Толстой", name: "Анна Каренина", amount: 5 },
    { id: 3, author: "Оруэл", name: "1984", amount: 5 },
    { id: 4, author: "Сервантес", name: "Дон Кихот", amount: 5 },
    { id: 5, author: "Достоевский", name: "Преступление и наказание", amount: 5 },
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
        // .filter((book) => !book.isReading)
        .map((book) => `- ${book.name}. (Автор - ${book.author}). В наличии ${book.amount} экз.`)
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

    if (desiredBook.amount === 0) {
        alert(`Извините, этой книги сейчас нет в наличии!`)

        return;
    }

    desiredBook.amount -= 1;

    alert(`Отличный выбор! ID вашей книги - ${desiredBook.id}. Запомните его! \nВ наличии осталось ${desiredBook.amount} экз.`);

    console.log(books);
};

const returnBook = () => {
    const returningBookId = +prompt(`Введите ID книги, которую хотите вернуть`);

    if (!returningBookId) {
        alert(`Вы ничего не ввели!`);

        return;
    }

    const currentBook = books.find((book) => book.id === returningBookId);

    // Проверка непревышения количества экземпляров в наличии

    if (!currentBook || currentBook.amount > 4) {
        alert(`Вы не брали книгу с таким ID. Введите корректный ID!`)

        return;
    }

    currentBook.amount += 1;
    alert(`Спасибо, приходите к нам еще! Вам понравилась книга ${currentBook.name}?`);
    // console.log(currentBook.amount);
};

const addMyBook = () => {

    let name = prompt(`Введите название книги, которую хотите добавить в библиотеку`);
    let author = prompt(`Введите автора книги, которую хотите добавить в библиотеку`);
    let amount = +prompt(`Сколько экземпляров книги вы хотите добавить в библиотеку?`)

    if (!amount || typeof amount !== 'number') {
        alert(`Введенное значение количества книг некорректно! Пожалуйста введите число`);

        return;
    }
    
    // Проверка несовпадения названия книги и автора с существующими в базе
    
    const invalidName = books.find(book => book.name.trim().toLowerCase() === name.trim().toLowerCase() && book.author.trim().toLowerCase() === author.trim().toLowerCase());
    
    if (invalidName) {
        alert(`Спасибо конечно, но такая книга у нас уже есть. Приносите что-нибудь другое:)`);
        
        return;
    }
    
    name = name.trim().slice(0, 1).toUpperCase() + name.trim().slice(1);
    author = author.trim().slice(0, 1).toUpperCase() + author.trim().slice(1).toLowerCase();

    const newBook = {
        id: generateBookId(),
        // id: books.length + 1, // добавление id по порядковому номеру
        author,
        name,
        amount,
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