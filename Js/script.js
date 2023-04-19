const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 3500,
        colors: [
            {
                code:"black",
                Img: "./images/air_force.png",
            },
            {
                code:"darkblue",
                Img: "./images/air_force.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 2500,
        colors: [
            {
                code:"black",
                Img: "./images/pic 1.png",
            },
            {
                code:"black",
                Img: "./images/pic 1.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 1500,
        colors: [
            {
                code:"black",
                Img: "./images/blazer.png",
            },
            {
                code:"darkblue",
                Img: "./images/blazer.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 3500,
        colors: [
            {
                code:"black",
                Img: "./images/crater-removebg-preview.png",
            },
            {
                code:"darkblue",
                Img: "./images/crater-removebg-preview.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 1000,
        colors: [
            {
                code:"black",
                Img: "./images/hippie-removebg-preview.png",
            },
            {
                code:"darkblue",
                Img: "./images/hippie-removebg-preview.png",
            },
        ],
    },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", () =>{
        // change the current slide 
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product
        choosenProduct = products[index]

        // change texts of currentProduct 
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "Kes" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].Img;

        // assigning new colors 
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.Color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});