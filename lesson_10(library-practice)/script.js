const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
    { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
    { id: 3, author: "Оруэл", name: "1984", isReading: false },
    { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
    {
        id: 5,
        author: "Достоевский",
        name: "Преступление и наказание",
        isReading: false,
    },
];

function library() {
    let action = Number(prompt("Какое действие вы хотите выполнить? 1 - взять книгу, 2 - вернуть книгу, 3 - добавить книгу"));
    if (!action) {
        alert("Жаль, что уже уходите :(")
    } else {
        switch (action) {
            case 1:
                prompt("Введите название или автора книги");
                break;
            case 2:
                prompt("Введите id книги, которую хотите вернуть");
                break;
            case 3:
                

        }
    }
}

function takeBook() {
    let takeId = prompt("Введите id книги, которую хотите взять");
    if (takeId !== books.id) {
        alert("Книги с данным id в библиотеке нет или ее взяли почитать!")
    } else {
        books.includes()
    }
}