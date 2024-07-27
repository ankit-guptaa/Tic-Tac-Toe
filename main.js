let boxes = document.querySelectorAll(".btn");
let newbutton = document.querySelector("#new_btn");
let msgcont = document.querySelector(".msg-conteiner");
let msg = document.querySelector("#msg");
let res_btn = document.querySelector("#res_btn");
    let turno = true;
    // console.log(boxes)
    const pattern = [[0,1,2] , [0,3,6] , [0,4,8] , [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8]];

    boxes.forEach(btn => {
        btn.addEventListener("click",() =>{
            // console.log("Clicked");
            if(turno){
                btn.innerText = "O";
                turno = false;
            }else{
                btn.innerText = "X";
                turno = true;
            }
            btn.disabled = true;


            checkWinner();
        });
    });
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

 const newGame =() =>{
    turno = true;
    enableBoxes();
    msgcont.classList.add("hide");
 }
 const restartGame = () =>{
    console.log("Hello I am restart button ");
    turno = true;
    enableBoxes();
 }

const disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
    const showWinner = (Winner) =>{
        msg.innerText = `Congratulation, Winner Is ${Winner}`;
        msgcont.classList.remove("hide");
        disablebtn();
    };

const checkWinner = () =>{
    for(let pattern1 of pattern){
        
        let firstValue = boxes[pattern1[0]].innerText;
        let secondValue = boxes[pattern1[1]].innerText;
        let thirdValue = boxes[pattern1[2]].innerText;
    

        if(firstValue != "" && secondValue != "" && thirdValue != ""){
            if(firstValue === secondValue && secondValue === thirdValue){
                console.log("Winner ",firstValue);
                showWinner(firstValue);
            }
        }
    }


};
newbutton.addEventListener("click",newGame);
res_btn.addEventListener("click",restartGame);