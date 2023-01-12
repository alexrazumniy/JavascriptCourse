// ===============
// == ЗАДАНИЕ 1 ==
// ===============

const response = {
    data: [
        {
            username: "samuel",
            is_active: true,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
            username: "john",
            is_active: false,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
            username: "peter",
            is_active: false,
            created_at: "2020-11-20T09:53:50.000000Z",
        },
    ],
    meta: {
        paging: {
            current: 1,
            next: 2,
            prev: null,
            total: 14,
            per_page: 3,
        },
    },
};

// == 1 == (total, из объекта paging, который вложен в объект meta)
const {
    meta: {
        paging: { total }
    }
} = response;
console.log(total); // 14


// == 2 == (значение is_active, которое принадлежит первому объекту в массиве data. Переименуйте переменную в isActive.)

const { data } = response;
console.log(data);

const userData = data[0];
console.log(userData);

const { is_active } = userData;
console.log(`is_active`, is_active); // true

const { is_active: isActive } = userData;
console.log(`isActive`, isActive); // true
console.log(userData); // ??? "is_active" в консоли не переименовывается в "isActive" !!!


// ===============
// == ЗАДАНИЕ 2 ==
// ===============

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
};

const { name, surname, ...restParameters } = user
console.log(name, surname, `restParameters=`,restParameters);


// ===============
// == ЗАДАНИЕ 3 ==
// ===============

const max = (numbers) => {
    let maxNumber = 0;
    numbers.forEach(number => {  // также работает с .map и .filter!
        if (number > maxNumber) {
            maxNumber = number
        }
    })
    return maxNumber
}

const res = max([1, 2, 30, 5, 7]) // не работает для отрицательных чисел
console.log(res); // 30


// ===============
// == ЗАДАНИЕ 4 ==
// ===============

const createMessage = ({ author = "Guest", text, reciever, time = new Date()}) => {
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};

// после выполнения этого задания, функция должна коректно работать с таким аргументом
const message = createMessage({
    reciever: "John",
    text: "Hi!",
});
console.log(message); // From Guest to John: Hi! (10.01.2023)


// ===============
// == ЗАДАНИЕ 5 ==
// ===============

// == 5.1 ==

const str1 = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
const regexp1 = /\w\d+\w/gi;

console.log(`matches in regexp1`, str1.match(regexp1)); // [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]


// == 5.2 ==

const regexp2 = /([\w._-]+).([\w]{2,})/gi;

console.log(`test regexp2`, regexp2.test("ex.ua, google.com, yandex.ru, site.com.ua, my-page.com"));


// == 5.3 ==

regexp3 = /\d{12,}$/gi;

console.log(`test regexp3`, regexp3.test("123456789101")); // true
console.log(`test regexp3`, regexp3.test("123456789101s")); // false

