 
const productContainers = [...document.querySelectorAll(".second-row-container")];
const nxtBtn = [...document.querySelectorAll("#forward-btn")];
const preBtn = [...document.querySelectorAll("#back-btn")];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});


/*const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const quantity = document.querySelector(".quantity-no");
const cartNo = document.querySelector(".cart-no");
const addToCard = document.querySelector(".add-btn-modal");

const item = document.querySelectorAll(".price-content, .content, .img-outer-container, .first, .second, .third, .fourth, .fifth, .sixth, .seventh, .eighth, .nineth, .tenth, .eleventh, .twelfth, .thirteenth, .fourteenth, .fifteenth, .sixteenth, .seventeenth, .eighteenth, .nineteenth, .twenty");
const modalImage = document.querySelector(".modal-img");
const modalName = document.querySelector(".modal-name");
const modalPrice = document.querySelector(".modal-price");

let count = 0;
let cartNumber = 0;

function openModal() {
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
}

function resetCount() {
    count = 0;
    quantity.textContent = count;
}

function addQuantity() {
    count += 1;
    quantity.textContent = count;
}

function removeQuantity() {
    if (count > 0) {
        count -= 1;
        quantity.textContent = count;
    }
}

function updateCartNumber() {
    cartNumber += count; 
    cartNo.textContent = cartNumber; 
}

openBtn.addEventListener("click", openModal);

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
        closeModal();
    }
});

closeBtn.addEventListener("click", () => {
    updateCartNumber(); // 
    resetCount(); 
    closeModal(); 
});

item.forEach((items) => {
    items.addEventListener("click", () => {
        openModal();
        modalImage.src = items.querySelector(".image").src;
        modalName.textContent = items.querySelector(".name").textContent;
        modalPrice.textContent = items.querySelector(".price").textContent;
    });
});

plus.addEventListener("click", addQuantity);

minus.addEventListener("click", removeQuantity);

const itemImage = document.querySelector(".item-img");

addToCard.addEventListener("click", () => {
    updateCartNumber(); 
    resetCount();
  
});
*/


/*item.forEach((items) => {
    items.addEventListener("click", () => {
        openModal();
        modalImage.src = items.querySelector(".image").src;
        modalName.textContent = items.querySelector(".name").textContent;
        modalPrice.textContent = items.querySelector(".price").textContent;
       

    });
});*/























    


