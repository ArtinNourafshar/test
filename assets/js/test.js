
// const cart = [];

// const createItem = (item, products) => {
//     const col = document.createElement('div');
//     col.classList.add('col-sm-6', 'col-lg-4')
//     col.innerHTML = `
//                 <div class="card card-edit mt-2">
//                     <img src=${item.image} alt="Product 1">
//                     <div class="card-body">
//                         <h5 class="card-title">${item.pName}</h5>
//                         <p class="card-text">Click to see more...</p>
//                     </div>
//                     <div class="shop btn btn-danger" data-id=${item.id}>boro</div>
//                 </div>
// `




//     return col;
// }

// const renderItems = (products) => {
//     const productsContainer = document.getElementById('products');
//     products.map(item => {
//         const col = createItem(item, products)
//         productsContainer.appendChild(col)
        
        
//     }) }





//     // single page 

    
//     const attachClickEvents = () => {
//       const goDetailButtons = document.querySelectorAll(".shop");
//       goDetailButtons.forEach(item => {
//           item.addEventListener("click", goShopping);
//       });
//   };

//   const goShopping = (e) => {
//       e.preventDefault();
//       const id = e.target.getAttribute('data-id');
//       const currentItem = product.filter(item => item.id === +id);
//       localStorage.setItem('item', JSON.stringify(currentItem));
//       navigation.navigate('../html-pages/product-detail.html');
//   };




//     (function main() {
//       const products = [
//           { id: 1, pName: 'product1', price: 15, image: './assets/images/image-product/5979068778316678977.jpg' },
//           { id: 2, pName: 'product2', price: 10, image: './assets/images/image-product/5979068778316678981.jpg' },
//           { id: 3, pName: 'product3', price: 17, image: './assets/images/image-product/5979068778316678981.jpg' },
//           { id: 4, pName: 'product4', price: 25, image: './assets/images/image-product/5979068778316678981.jpg' },
//           { id: 5, pName: 'product5', price: 33, image: './assets/images/image-product/5979068778316678981.jpg' },
//           { id: 6, pName: 'product6', price: 33, image: './assets/images/image-product/5979068778316678981.jpg' },
//       ]
//       renderItems(products)
//   })()







const cart = [];

const createItem = (item, products) => {
    const col = document.createElement('div');
    col.classList.add("col-lg-4","col-6")
    col.innerHTML = `

    <a href="#" class="product-item add" data-id=${item.id}>
          <div class="card card-edit mt-2">
                    <img src=${item.image} data-id=${item.id} alt="Product 1">
                    <div class="card-body">
                        <h5 class="card-title">${item.pName}</h5>
                        <p class="card-text">Click to see more...</p>
                    </div>
                    
                </div>
                </a>

`

    return col;
}

const renderItems = (products) => {
    const productsContainer = document.getElementById('products');
    products.map(item => {
        const col = createItem(item, products)
        productsContainer.appendChild(col)
        
        
    })
    const buttons = document.querySelectorAll('.add');
    buttons.forEach(item => {
        item.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id')
            const currentItem = products.filter(item => item.id === +id)
            cart.push(currentItem);
            const cartCount = document.getElementById('cart-count');
            cartCount.classList.remove('d-none');
            cartCount.innerText = cart.length;
            localStorage.setItem('cart', JSON.stringify(cart))
        })
    })

    // const images = document.querySelectorAll('.product-img')
    // images.forEach(item =>{
    //     item.addEventListener('mouseover', () =>{
    //         item.setAttribute('src', '../assets/img/carding1.webp')
    //     })
    //     item.addEventListener('mouseleave', () =>{
    //         item.setAttribute('src', '../assets/img/carding2.webp')
    //     })
    // })

    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item =>{
        item.addEventListener('click', (e) =>{
            const id = e.target.getAttribute('data-id');
            
            const currentItem = products.filter(item => item.id === +id)
            localStorage.setItem('item', JSON.stringify(currentItem))
        })
    })

}

(function main() {
    const products = [

        { id: 1, pName: 'product1', price: 15, image: './assets/images/image-product/5979068778316678977.jpg' },
          { id: 2, pName: 'product2', price: 10, image: './assets/images/image-product/5979068778316678981.jpg' },
          { id: 3, pName: 'product3', price: 17, image: './assets/images/image-product/5979068778316678981.jpg' },
          { id: 4, pName: 'product4', price: 25, image: './assets/images/image-product/5979068778316678981.jpg' },
          { id: 5, pName: 'product5', price: 33, image: './assets/images/image-product/5979068778316678981.jpg' },
          { id: 6, pName: 'product6', price: 33, image: './assets/images/image-product/5979068778316678981.jpg' },
    ]

    renderItems(products)
})()









const showUserName=()=>{

    const userName=JSON.parse(localStorage.getItem("user-name"));
    const userBtn=document.getElementById("user");
    if(userName){

        userBtn.innerText=userName;
        userBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            localStorage.removeItem("user-name");
            navigation.reload();
        })
    }
}

(async function render (){


showUserName();


})()



// اینجا داینامیک شدن رو ساختم