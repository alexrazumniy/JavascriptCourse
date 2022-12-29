const products = [
    {
        name: "Iphone 12",
        brand: "Apple",
        price: 3200000,
        properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
        name: "Galaxy S20 Ultra",
        brand: "Samsung",
        price: 2900000,
        properties: ["120 hz screen", "Water resistance"],
    },
    {
        name: "MI 9",
        brand: "Xiaomi",
        price: 1300000,
        properties: ["Best price", "Pay less - get more!", "China - champion:)"],
    },
];


// Метод innerHTML

const renderList = (arr) => {
    const productsList = document.createElement('div');

    const listHTML = arr
        .map(element => `
        <div>
            <h1>${element.name}</h1>
            <h2>${element.brand}</h2>
            <h3>${element.price}</h3>
                <ul>
                    ${element.properties
                        .map(property => `<li>${property}</li>`)
                        .join('')}
                </ul>
        </div>`)
        .join('');

    productsList.innerHTML = listHTML

    console.log(listHTML);
    document.body.append(productsList)
}

renderList(products)




// Метод append()

// const renderList = (arr) => {
//     const productsList = document.createElement('div');

//     arr.forEach(element => {
//         const productCard = document.createElement('div');
//         const productName = document.createElement('h1');
//         const productBrand = document.createElement('h2');
//         const productPrice = document.createElement('h3');
//         const productPropertiesList = document.createElement('ul');

//         productCard.append(productName, productBrand, productPrice, productPropertiesList);

//         productsList.append(productCard);

//         for (let key in element) {
//             if (typeof element[key] === 'object') {
//                 element[key].forEach(property => {
//                     const productProperty = document.createElement('li');
//                     productProperty.innerText = property
//                     productPropertiesList.append(productProperty);
//                 })
//             }
//         }

//         productName.innerText = element.name;
//         productBrand.innerText = element.brand;
//         productPrice.innerText = element.price;
//     });

//     document.body.append(productsList)
//     console.dir(productsList);
// }

// renderList(products)