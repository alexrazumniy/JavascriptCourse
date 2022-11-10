const visitorAge = Number(prompt("Сколько вам лет?"));
const isWithAdults = confirm("У вас есть разрешение взрослых?");

if ((visitorAge >= 12 && visitorAge <= 18) ||
    (visitorAge >= 60 && visitorAge <= 80)) {
    if (isWithAdults) {
        alert("Доступ разрешен!");
    } else (visitorAge > 18 && visitorAge < 60) {
    alert("Доступ разрешен!");
} else {
    alert("Доступ запрещен!");
}


// if ((visitorAge >= 12 && visitorAge <= 18 && isWithAdults) ||
//     (visitorAge >= 60 && visitorAge <= 80 && isWithAdults)) {
//     alert("Доступ разрешен!");
// } else if (visitorAge > 18 && visitorAge < 60) {
//     alert("Доступ разрешен!");
// } else {
//     alert("Доступ запрещен!");
// }