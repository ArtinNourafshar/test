( function main (){


    const render = (data) =>{
const productContainer = document.getElementById('products');
console.log(productContainer);

data.map(item =>{
const col =  document.createElement('div');
col.classList.add('col-lg-4');
col.innerHTML = `
<div class="card card-edit rounded-5 m-3">
                    <img src="${item.image}" class="card-img-top" alt="Product 1">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.price}</p>
                        <a href="#" class="btn btn-primary rounded-5 item" data-id=${item.id}> Click to see more</a>
                       
                    </div>
                </div>

`
productContainer.appendChild(col);

})

const buttons = document.querySelectorAll('.item');
buttons.forEach(item =>{
    item.addEventListener('click' , () =>{
        const id = item.getAttribute('data-id');
        localStorage.setItem('id' , JSON.stringify(id))
        navigation.navigate('./product1.html')
    })
})
const addCart = document.querySelectorAll('.cart');
addCart.forEach(item =>{
    item.addEventListener('click' , () =>{
        const id = item.getAttribute('data-id');
        localStorage.setItem('id' , JSON.stringify(id))
        navigation.navigate('./cart.html')
    })
})

    }

    const data = [

        { id: 1, title: 'ًQuavo T-shirt', price: "$45", image: './assets/images/image-product/5979068778316678977.jpg' },
        { id: 2, title: 'Good vibe t-shirt', price: "$34", image: './assets/images/image-product/5979068778316678981.jpg' },
        { id: 3, title: 'snoop sag', price: "$12", image: './assets/images/image-product/5979068778316678979.jpg' },
        { id: 4, title: 'Monkey d luffy', price: "$18", image: './assets/images/image-product/5979068778316678978.jpg' },
        { id: 5, title: 'Quavo ', price: "$77", image: './assets/images/image-product/5979068778316678977.jpg' },
        { id: 6, title: 'Garden t-shirt', price: "$12", image: './assets/images/image-product/5979068778316678980.jpg' },


    ]

    render(data);


})()











