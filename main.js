document.addEventListener("DOMContentLoaded", function(){
    makeGrid(16);
    let contain = document.querySelector(".contain");

    let popup = document.getElementById("popup");
    popup.addEventListener("click", () => {
       let numDiv = sizing();
       resetBoard();
       makeGrid(numDiv);
    })

})

function makeGrid (num){
    let contain = document.querySelector(".contain");

    let numDivs = num * num;

    contain.style.gridTemplateColumns =  `repeat(${num}, 1fr)`;
    contain.style.gridTemplateRows =  `repeat(${num}, 1fr)`;

    for (i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.setAttribute("id", "innerDivs");
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        })
        contain.insertAdjacentElement("beforeend", div);
    }
}

function sizing(){
    let inputNum = prompt("Please enter grid size");
    let message = document.getElementById("message");

    if(inputNum == ""){
        message.innerHTML = "Please enter a number";
    } 
     else if(inputNum <= 0 || inputNum > 100){
        message.innerHTML = "Please enter a number between 1 and 100";
    } 
    else{
        message.innerHTML = "Grid size changed";
        return inputNum;
    }

}

function resetBoard (){
    let divs = document.querySelectorAll("#innerDivs");
    divs.forEach(((div) => div.style.backgroundColor = "white"));
}