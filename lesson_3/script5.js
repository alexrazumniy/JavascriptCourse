const visitorAge = Number(prompt("Сколько вам лет?"));

if (visitorAge > 18 && visitorAge < 60) {
    alert("Доступ разрешен!");
} else if ((visitorAge >= 12 && visitorAge <= 18) ||
    (visitorAge >= 60 && visitorAge <= 80)) {
    const isWithAdults = confirm("У вас есть разрешение взрослых?");
    if (isWithAdults == true) {
        alert("Доступ разрешен!");
    } else {
        alert("Доступ запрещен!");
    }
} else {
    alert("Доступ запрещен!");
}