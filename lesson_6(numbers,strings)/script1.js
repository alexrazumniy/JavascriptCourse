const userRegistration = () => {
    let userName;
    let userSurname;
    let userPassword;
    name:
    do {
        userName = prompt("Введите имя");
        if (userName.length < 1 || userName == '' || userName == ' ') {
            alert("Длина имени должна составлять по меньшей мере 1 символ!");
        } else {
            continue name;
        }
    } while (userName.length < 1);
    
    // do {
    //     userSurname = prompt("Введите фамилию");
    //     if (userSurname.length < 1 || userSurname == "" || userSurname == " ") {
    //         alert("Длина фамилии должна составлять по меньшей мере 1 символ!");
    //     }
    // } while (userSurname.length < 1);


    // return userName, userSurname;
}

userRegistration()

// let userSurname = prompt("Введите фамилию");

// function getUserSurname(userSurname) {
//     do {
//         // if (userSurname.length < 1 || userSurname == " ") {
//         alert("Длина фамилии должна составлять по меньшей мере 1 символ!");
//         // }
//     } while (userSurname.length < 1);
//     return userSurname;
// }
// getUserSurname(userSurname);

const userPassword = prompt("Введите пароль");

// do {
//     alert(userSurname);
// } while (userSurname.length < 1);
// do {
//     alert(userName);
// } while (userName.length < 1);

alert(userName + userSurname);

