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


const renderForm = (arr) => {
    const form = document.createElement('form');
    
    arr.map(element => {
        const inputField = document.createElement('div');
        const labelName = document.createElement('label');
        const inputName = document.createElement('input');
        const optionsSelector = document.createElement('select');
        const optionsList = document.createElement('option');

        inputField.append(labelName, inputName);
        form.append(inputField);

        labelName.innerHTML = arr.element;

        // const p = labelName.innerText
        // console.log(p);
                
        if (typeof element.key === 'object') {
            optionsSelector.append(optionsList);
            form.append(optionsSelector);
            optionsList.innerText = option;
        }
        
        // inputName.innerText = arr.name;

        // inputField.style.display = 'flex'
        labelName.style.fontFamily = 'arial'
        inputName.style.width = '300px'
        inputName.style.height = '30px'
        inputName.style.marginLeft = '30px'
        inputName.style.marginBottom = '30px'
        labelName.setAttribute('for', `${arr}`)
    });
    
    const handleSubmit = document.createElement('button');
    handleSubmit.innerText = `Подтвердить`;
    form.append(handleSubmit);
    
    // const input = [document.querySelectorAll('input')];
    // input.style.width = '170px';
    
    document.body.append(form)
    console.dir(form);
}

renderForm(formConfig)


// const renderForm = (arr) => {
//     const form = document.createElement('form');

//     form.innerHTML = `
//         ${arr
//             .map(item => `
//         <div>
//         <label>${arr.label}</label>
//         <input ${arr.name}/>
//         </div>
//             `)
//             .join('')
//         }
//         <button>Подтвердить</button>
//         `;
        
//         document.body.append(form)
//         console.log(arr);
//     }
    
//     renderForm(formConfig)


//     const divExample = document.querySelectorAll('input');


