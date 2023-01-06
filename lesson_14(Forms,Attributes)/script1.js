const formConfig = [
    {
        element: "text",
        name: "login",
        label: "Логин",
    },
    {
        element: "text",
        name: "age",
        label: "Возраст",
    },
    {
        element: "select",
        name: "language",
        label: "Выберите язык программирования",
        options: [
            {
                text: "JavaScript",
                value: "js",
            },
            {
                text: "Java",
                value: "java",
            },
            {
                text: "Python",
                value: "python",
            },
        ],
    },
];



const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const data = {}

    for (let pair of formData.entries()) {
        console.log(pair)

        data[pair[0]] = pair[1]
    }

    console.log(data);
}


const createInput = (inputData) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', inputData.name);
    input.setAttribute('name', inputData.name);
    input.style.width = '300px';
    input.style.height = '30px';
    input.style.marginLeft = '30px';
    input.style.borderRadius = '5px';
    input.style.borderWidth = '1px';
    input.style.background = 'rgb(200, 220, 220)';

    return input
}

const createSelect = (selectData) => {
    const select = document.createElement('select');
    select.setAttribute('id', selectData.name);
    select.setAttribute('name', selectData.name);

    selectData.options.forEach(opt => {
        const option = document.createElement('option');
        option.setAttribute('value', opt.value);
        option.innerText = opt.text;

        select.append(option)
    })

    return select
}

const createForm = (arrFormData) => {
    const form = document.createElement('form');

    arrFormData.forEach(formElement => {
        const divWrap = document.createElement('div');
        const label = document.createElement('label');
        label.setAttribute('for', formElement.label);
        label.innerText = formElement.label;

        if (formElement.element === 'text') {
            const input = createInput(formElement)
            divWrap.append(label, input)
        } else if (formElement.element === 'select') {
            const select = createSelect(formElement);
            divWrap.append(label, select);
            select.style.marginLeft = '25px';
        }

        divWrap.style.display = 'flex';
        divWrap.style.alignItems = 'center';
        divWrap.style.marginBottom = '30px';
        label.style.display = 'block';
        label.style.textAlign = 'right';
        label.style.width = '180px';
        label.style.fontFamily = 'arial';

        form.append(divWrap)
    })

    const buttonSubmit = document.createElement('button');
    buttonSubmit.setAttribute('type', 'submit');
    buttonSubmit.innerText = `Подтвердить`;
    buttonSubmit.style.width = '150px';
    buttonSubmit.style.height = '30px';
    buttonSubmit.style.borderRadius = '5px';
    buttonSubmit.style.borderWidth = '1px';
    buttonSubmit.style.background = 'rgb(220, 240, 200)';
    buttonSubmit.style.display = 'block';
    buttonSubmit.style.margin = '75px 0 0 240px';
    
    form.append(buttonSubmit);
    
    const container = document.querySelector('.container');
    form.style.width = '450px'

    container.append(form);

    return form
}

let form = createForm(formConfig);
form.addEventListener('submit', handleSubmit);
