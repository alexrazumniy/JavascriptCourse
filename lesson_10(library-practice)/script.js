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

const booksAvailable = [];
const booksMissing = [];

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



let Object = {}
console.log(Object);


const takeBook = () => {
    
}



//     let takeId = prompt("Введите id книги, которую хотите взять");
//     if (takeId !== books.id) {
//         alert("Книги с данным id в библиотеке нет или ее взяли почитать!")
//     } else {
//         books.includes()
//     }
// }