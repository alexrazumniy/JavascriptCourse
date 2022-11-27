// Преобразовывает имя в правильный формат
const upperCaseString = (userString) => {

    const firstSymbolString = (userString[0]).toUpperCase(); //A
    const symbolsString = (userString.slice(1)).toLowerCase(); //lex

    return firstSymbolString + symbolsString; // Alex
}

// Проверка имени
const userRegistrationName = () => {

    let userName;

    do {
        userName = prompt("Введите имя");

        if (!userName || userName.trim() == '') {
            alert(`Вы ничего не ввели!`);
        } else {
            break
            // alert(`Имя: ${userName.trim()}`);
        }
    } while (true);

    const upperCaseName = upperCaseString(userName); // Alex

    return upperCaseName;
}

// Проверка фамилии
const userRegistrationSurname = () => {

    let userSurname;

    do {
        userSurname = prompt("Введите фамилию");

        if (!userSurname || userSurname.trim() == '') {
            alert(`Вы ничего не ввели!`);
        } else {
            break
            // alert(`Фамилия: ${userSurname.trim()}`);
        }
    } while (true);

    const upperCaseSurname = upperCaseString(userSurname);

    return upperCaseSurname;
}

// Проверка пароля
const userRegistrationPassword = () => {

    let userPassword;

    do {
        userPassword = prompt("Придумайте пароль длиной не менее 6 символов и содержащий символы разного регистра (Примеры корректных паролей: AbCxx12, 1234xY, abcdeF. Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz");

        if (!userPassword || userPassword.trim() < 6) {
            alert(`Введите не менее 6 символов!`);

        } else if (!isNaN(userPassword) || (userPassword.toLowerCase() === userPassword) || (userPassword.toUpperCase() === userPassword)) {
            // 254561641 isNaN(254561641) = false
            // userPassword = dfgdg
            // userPassword.toLowerCase() === userPassword
            // dfgdg === dfgdg / true
            // dfgdg === dFGdg / false
            
            alert(`Некорректный пароль!`);

        } else {
            alert(`Регистрация прошла успешно!`);
            break
        }
    } while (true);

    return userPassword;
}

const resName = userRegistrationName(); // Alex
const resSurname = userRegistrationSurname();
const resPassword = userRegistrationPassword();

alert(`Вы зарегистрированы как: ${resName} ${resSurname}
Ваш пароль: ${resPassword}`);