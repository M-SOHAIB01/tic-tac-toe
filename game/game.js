let boxes = document.querySelectorAll(".box");
let main_box = document.querySelector(".main-box");
let winner_box = document.querySelector(".winner-box");
let win_para = document.querySelector(".win-para");
let buttons = document.querySelectorAll(".button");

let winingPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function disabled(){
    boxes.forEach(box => {
        box.disabled =true;    
    });
}

function ables(){
    boxes.forEach(box => {
        box.disabled = false;
    });
}

function showWinner(){
    main_box.classList.add("hidden");
    winner_box.classList.remove("hidden");
}

function resetGame(){
    winner_box.classList.add("hidden");
    main_box.classList.remove("hidden"); 
    for (let box of boxes){
        box.innerText = "";
    }
}

function checkWinner (){
    for (let pattern of winingPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val1 == val3){
                win_para.innerText = `Winner is ${val1}`;
                showWinner();
                disabled();
            }
        } 
    }
}

let turn = 'O';
let count = 0;
for (let box of boxes){
    box.addEventListener( "click" ,()=>{
       if( turn == 'O'){
         box.innerText = "O";
         turn = 'X';
        } else{
         box.innerText = "X";  
         turn ='O';
       }
       count++
       if(count == 9){
        showWinner();
        win_para.innerText = `Game Was Draw`;
        setTimeout(() => {
            resetGame();
            ables();
        }, 5000);
       }
       box.disabled = true;
       checkWinner(); 
     });
     
}

for (let button of buttons) {
    button.addEventListener("click",()=>{
        resetGame();
        ables();
    });
}