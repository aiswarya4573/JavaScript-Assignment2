
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



