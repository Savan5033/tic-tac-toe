let boxs = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontainor = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //plX,plO

const winProces = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainor.classList.add("hide");
};

boxs.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turnO){
            box.innerText = "O"
            box.style.color = "red";
            turnO = false;

        }
        else{
            box.innerText = "X";

            turnO = true;
        }
        box.disabled = true;

        checWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxs){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
        box.style = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulation, Winner is ${winner}`;
    msgcontainor.classList.remove("hide");
    disableBoxes();
}

const checWinner = () =>{
    for(let pattern of winProces){
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val ===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);