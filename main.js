let boxBtns = document.querySelectorAll(".box");
let resetBtn = document.querySelector("resetButton");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// console.log(boxBtns);
const winningCombo =[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];


let userO = true;


const resetGame = ()=>{
    userO = true;
    enableTheBtn();
    msgContainer.classList.add("hide");
}


boxBtns.forEach((box) =>{
    box.addEventListener("click",()=>{
        // console.log("Key pressed");
        if(userO){
            box.innerText = "O";
            box.style.color = "yellow";
            userO = false;
        }else{
            box.innerText = "X";
            box.style.color = "white";
            userO = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const enableTheBtn = () =>{
    for(let box of boxBtns){
        box.disabled = false;
        box.innerText="";
    }
}

const disableTheBtn = () =>{
    for(let box of boxBtns){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableTheBtn();
}
const checkWinner = () =>{
    for(let pattern of winningCombo){
        let pos1 = boxBtns[pattern[0]].innerText;
        let pos2 = boxBtns[pattern[1]].innerText;
        let pos3 = boxBtns[pattern[2]].innerText;

        if(pos1 !=="" && pos2 !=="" && pos3 !==""){
            if(pos1===pos2 && pos2===pos3){
                // console.log("Winner is",pos1);
                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click",resetGame);
