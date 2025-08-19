//print karo o x //revisse 36.00


let winner=[
    [0,1,2] ,[3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4 ,8], [2,4,6]
]

function checkwinner(){
    
    for(let [index0, index1,index2] of winner) //revise 57.00
    {
       // console.log(i);
       if( board_array[index0]!="E" && board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2]) 
            return 1;
    }
    return 0;
}

const printer=(event)=>{
    event.preventDefault();
  //  console.log(event.target.id) outpuit id of celll 0,1,2, etc
    const element=event.target;

    //to avoid replacemnt
    if(board_array[element.id]==="E"){
        total_turn++;
     if(turn==="O")
    {
        
        element.innerHTML="O"
        board_array[element.id]="O";
        if(checkwinner())
        {
            document.getElementById("winning_Message").innerHTML= "Winner is O"
            board.removeEventListener('click', printer) //if gameover,or winner found then remvoe evenlinstner
            return;
        }
        turn="X";
     }
        else{
            element.innerHTML="X";
         board_array[element.id]="X";
         if(checkwinner())
          {
            document.getElementById("winning_Message").innerHTML="Winner is X ";
             board.removeEventListener('click', printer)
             return;
          }
          turn="O";
    }
    if(total_turn==9) {
        document.getElementById("winning_Message").innerHTML="match is draw";
    }
}
    //winner
}




let board_array = new Array(9).fill("E");// initally empty [E, E , E, E , E E, E TO 9] 

let turn ="O";
let total_turn=0;
const board=document.querySelector('.board')
board.addEventListener(("click"),printer) 


//clear , restart 
const restart=document.querySelector('.restart');
restart.addEventListener('click',()=>{
    const cell=document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML=""; //clear all previous input

    })

    total_turn=0;
    turn ="O";
    board_array=new Array(9).fill("E");
    board.addEventListener(("click"),printer) // to restart
    document.getElementById("winning_Message").innerHTML="" //clear the result
    
})