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
        properties: ["Best price", "Pay less - get more!"],
    },
];


// const productsList = (arr) => {
//     const productCard = document.createElement('div');
//     for (let element of arr) {

//         productCard.innerHTML = `
//         <h1>${arr.name}</h1>
//         <h3>${arr.brand}</h3>
//         <li>
//         ${arr.map(element => `<li>${arr.properties}</li>`).join("")}
//         </li>
//         `;
//     }
//     document.body.append(productCard)
    
//     return productCard
    
//     console.log(productCard);
//     // console.log(productName);
// }

// const d = productsList(products);
// console.log(d);

// // document.body.append(d)





const renderList = (arr) => {
    const productsList = document.createElement('div');
     
    arr.forEach(element => {
        const productCard = document.createElement('div');
        const productName = document.createElement('h1');
        const productBrand = document.createElement('h3');
        const propertiesList = document.createElement('ul');
        
        // Здесь должна быть функция для генерации Лишек
        const propertyItem = document.createElement('li');

        propertiesList.append(propertyItem);

        productCard.append(productName, productBrand, propertiesList);
        
        productsList.append(productCard);
        
        productName.innerText = `${products.name}`;
        productBrand.innerText = `${products.brand}`;
        
    });
    
    document.body.append(productsList)
    console.log(productsList);
    // console.log(productName);
}

renderList(products)