const data = [



   { id: 1, title: 'ًQuavo T-shirt', price: "$45", image: './assets/images/image-product/5979068778316678977.jpg' },
        { id: 2, title: 'Good vibe t-shirt', price: "$34", image: './assets/images/image-product/5979068778316678981.jpg' },
        { id: 3, title: 'snoop sag', price: "$12", image: './assets/images/image-product/5979068778316678979.jpg' },
        { id: 4, title: 'Monkey d luffy', price: "$18", image: './assets/images/image-product/5979068778316678978.jpg' },
        { id: 5, title: 'Quavo ', price: "$77", image: './assets/images/image-product/5979068778316678977.jpg' },
        { id: 6, title: 'Garden t-shirt', price: "$12", image: './assets/images/image-product/5979068778316678980.jpg' },



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