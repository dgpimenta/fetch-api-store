const product = document.querySelector('.box h2')
const description = document.querySelector('.box h3')
const price = document.querySelector('.box h4')

const containerBox = document.querySelector('.products')

const getProductDetails = async (productHeader) => {
    const response = await fetch(`./products.json`)
    const data = await response.json()

    data.products.forEach(product => {
        console.log(product.description)
        const details = `        
            <h4>${product.description}</h4>     
        `
        productHeader.innerHTML += details
    })    
}

const getDataProducts = data => {
    data.data.forEach((object) => {   
        const card = `
        <div class="box">                       
            <h2>${(object.title.toUpperCase())}</h2>
            <h3>${object.category.name}</h3>
            <h4>R$ ${object.price},00</h4>            
        </div>      
    `
    containerBox.innerHTML += card        

        console.log(object.title)
        console.log(object.category.name)
        console.log(object.price)          
    })      
}



const getProducts = async () => {
    const response = await fetch(`https://api.storerestapi.com/products`)
    const data = await response.json()

    getDataProducts(data)
    
}

getProducts()