
const productContainers = [...document.querySelectorAll(".second-row-container")];
const nxtBtn = [...document.querySelectorAll("#forward-btn")];
const preBtn = [...document.querySelectorAll("#back-btn")];
productContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener('click',() =>{
        
        item.scrollLeft += containerWidth;
        
    })
    preBtn[i].addEventListener("click",() =>{
        
        item.scrollLeft -= containerWidth;
        
        
    })
})


const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
	modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
	if (clickedOutside) {
		if (e.target.classList.contains("modal-overlay"))
			modal.classList.add("hide");
	} else modal.classList.add("hide");
}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);


const item = document.querySelectorAll(".price-content,.content,.img-outer-container,.first,.second,.third,.fourth,.fifth,.sixth,.seventh,.eigth,.nineth,.tenth,.eleventh,.twelveth,.thirteenth,.fourteenth,.fifteenth,.sixteenth,.seventeenth,.eighteenth,.nineteenth,.twenty");
const modalImage = document.querySelector(".modal-img");
const modalName = document.querySelector(".modal-name");
const modalPrice = document.querySelector(".modal-price");


item.forEach((items) => {

    items.addEventListener("click", () =>{
        openModal();
        modalImage.src = items.querySelector(".image").src;
        modalName.textContent=items.querySelector(".name").textContent;
        modalPrice.textContent=items.querySelector(".price").textContent;
    })
})



const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const quantity = document.querySelector(".quantity-no");
const cartNo = document.querySelector(".cart-no");
let count = 0;

plus.addEventListener("click", () => {
    count = count + 1;
    quantity.textContent=count;
    cartNo.textContent=count;




})

minus.addEventListener("click", () => {
    count = count - 1;
    quantity.textContent=count;
    cartNo.textContent=count;




})


    


