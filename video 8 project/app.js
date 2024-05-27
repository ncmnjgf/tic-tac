let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#reset");
let turnO = true;//player x and player y;
let newGamer = document.querySelector("#new-reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turn0 = true;
    enablebox();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked!!");
        if (turnO) {//player O
            box.innerText = "O";
            turnO = false;
        } else {//playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disablebox = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
   
}
const enablebox = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }};
   
const showWinner = (Winner)=>{
    msg.innerText = `Congratulation,Winner is ${Winner}`; 
    msgContainer.classList.remove("hide");
    disabledboxes();
};


const checkWinner = () => {
    for (pattern of winpattern) {
        // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if ( pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val == pos3Val){
                console.log("Winner",pos1Val); 
                showWinner(pos1Val);
            }
        }

    }
};

newGamer.addEventListener("click",resetGame);
resetGame.addEventListener("click",resetGame);