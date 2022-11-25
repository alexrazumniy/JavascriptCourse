const userRegistration = () => {
    let userName;
    let userSurname;
    let userPassword;

    do {
        userName = prompt("Введите имя");
        if (!userName || userName.length === 0 || userName.trim() == '') {
            alert(`Вы ничего не ввели!`);
        } else {
            alert(`Имя: ${userName.trim()}`);
        }
    } while (!userName || userName.length === 0 || userName.trim() == '');

    do {
        userSurname = prompt("Введите фамилию");
        if (!userSurname || userSurname.length === 0 || userSurname.trim() == '') {
            alert(`Вы ничего не ввели`);
        } else {
            alert(`Фамилия: ${userSurname.trim()}`);
        }
    } while (!userSurname || userSurname.length === 0 || userSurname.trim() == '');

    // do {
    //     userPassword = prompt("Введите пароль");
    // }

    return userName, userSurname;
}

userRegistration();





