const data = [



    { id: 1, title: 'product1', price: 15, image: './assets/images/image-product/5979068778316678977.jpg' },
    { id: 2, title: 'product2', price: 10, image: './assets/images/image-product/5979068778316678981.jpg' },
    { id: 3, title: 'product3', price: 17, image: './assets/images/image-product/5979068778316678981.jpg' },
    { id: 4, title: 'product4', price: 25, image: './assets/images/image-product/5979068778316678981.jpg' },
    { id: 5, title: 'product5', price: 33, image: './assets/images/image-product/5979068778316678981.jpg' },
    { id: 6, title: 'product6', price: 33, image: './assets/images/image-product/5979068778316678981.jpg' },




]



const id = JSON.parse(localStorage.getItem('id'))


const [item] = data.filter(item => item.id === +id);

console.log(item);

const image = document.getElementById('image');
image.setAttribute('src' , item.image);

const title = document.getElementById('title');
title.innerText  = item.title;


const price = document.getElementById('price');
title.innerText  = item.price;


// const getItemDetails = (data) => {
//     const id = JSON.parse(localStorage.getItem('id'));
//     const [item] = data.filter(item => item.id === +id);
  
//     console.log(item);
  
//     const image = document.getElementById('image');
//     image.setAttribute('src', item.image);
  
//     const title = document.getElementById('title');
//     title.innerText = item.title;
  
//     const price = document.getElementById('price');
//     price.innerText = item.price;
//   };
  

//   getItemDetails(data);