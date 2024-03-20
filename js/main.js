import { PRODUCT } from "./server.js";

// class PRODUCT {
//     constructor(id,title,description,previousprice,price,rating,barand,category,img){
//      this.id = id,
//      this.title = title,
//      this.description = description,
//      this.previousprice = previousprice,
//      this.price = price,
//      this.rating = rating,
//      this.barand = barand,
//      this.category = category,
//      this.img = img 
//     }
// }
// let newproduct = new PRODUCT()

// let DATA =[
//     newproduct
// ];

function Displaydata() {
    let output = document.querySelector('.cards-wraper');
    output.innerHTML = ''

    PRODUCT.forEach((el) => {
        let div = document.createElement('div');
        div.innerHTML = `
        
        <div class="big-wraper-card">
        <div class="wraper-card">
            <img class="img-bg" src="${el.img}" alt="">
            <div class="absalyut">
                <span><img src="./imgs/Cross.png" alt=""></span><button class="button1""> Нет в наличии</button>
                <button class=" sale"">Sale</button>
            </div>
            <div class="absalyut2">
              <button> <img src="./imgs/gift 1.png" alt=""> Подарок</button>
            </div>

            <div class="card-text-content">
                 <div class="reyting">
                    <img src="./imgs/рейтинг.png" alt="">
                    <p>${el.rating}</p>
                 </div>
                 <p class="title-p">${el.titel}</p>
                 <p class="text-p">${el.description}</p>
                <div class="price">
                    <b>${el.price}$</b>
                    <p>${el.previousprice}$</p>
                </div>
            </div>
        </div>
    </div>
        `

        output.appendChild(div)
    });
}

Displaydata()