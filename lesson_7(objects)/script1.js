const makeSchedule = () => {

    const schedule = {};
    let end = false;

    do {
        let time = prompt("Введите время начала выполнения задачи");
        let task = prompt("Введите задачу");

        if (!time || !task) {    // другой вариант - if (time == null || task == null)
            end = true
        } else {
            schedule[time] = task;
            alert("Задача добавлена");
        }
    } while (!end);
    
    return schedule
}

const timetable = makeSchedule();
console.log(timetable);