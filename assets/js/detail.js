// این صفحه برای همون product1 

// نمیدونم چیزی که توش نوشتم درست هست یا نه 

// فکر کنم اینجا با لوکال استورج باید تعریف کنی که عکس و تگ پی و دیسکریپشن رو نشون بده

// میتونی بری تو صفحه test.js
// و کمک بگیری دقیقا چیکار باید بکنیم


document.addEventListener("DOMContentLoaded",()=>{

    const currentItem=JSON.parse(localStorage.getItem("item"));

    if(currentItem&&currentItem.length>0){

        const item=currentItem[0];
        const imageElement=document.createElement("img");
        imageElement.src=item.img;
        imageElement.alt=item.text;

        document.body.appendChild(imageElement);

    }

;

});