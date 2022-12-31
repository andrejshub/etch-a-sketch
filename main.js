document.addEventListener("DOMContentLoaded", function(){
    makeGrid(16);

    let popup = document.getElementById("popup");
    popup.addEventListener("click", () => {
       
    })
})

function makeGrid (num){
    let contain = document.querySelector(".contain");

    let numDivs = num * num;

    contain.style.gridTemplateColumns =  `repeat(${num}, 1fr)`;
    contain.style.gridTemplateRows =  `repeat(${num}, 1fr)`;

    for (i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        
        
        contain.insertAdjacentElement("beforeend", div);
    }
}

function sizing(){
    let inputNum = prompt("Please enter grid size");
    

}