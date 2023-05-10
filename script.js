let board = ["","","","","","","","",""];


    let currentPlayer = "X";
    
    //get all the cells on the game board
    let cells = document.querySelectorAll(".cell");
    
    //get the reset button and message element
    let resetButton = document.querySelector('#reset');
    
    let messageElement = document.querySelector("#message") ;
  
    //Add event listeners to each cell
    cells.forEach((cell,index)=>{
        cell.addEventListener("click", ()=> {
        
              //check cell if it is already occupied or the game is over
     if (board[index] === "" && !isGameover()) {
                board[index] = currentPlayer;
                cell.classList.add
                (currentPlayer.toLowerCase());
                cell.innerHTML = currentPlayer;
                
                //Check if the game is over after current move
                if(isGameover ()){
                 messageElement.innerHTML = currentPlayer + "wins!";
                cells.forEach((cell) => cell.
                removeEventListener("click",handleCellClick));
                }
                else if (!board.includes("")){
                    //update the message if the game is a draw
                    messageElement.innerHTML = "It's a draw!";
                }
                else{
                    currentPlayer =
                    currentPlayer == "X" ? "0" :"X";
                    messageElement.innerHTML =currentPlayer + " 's turn"
                }
            }
                
        });

    });
    
    resetButton.addEventListener("click", () => {
    board = ["", "","","","","","","",""];
    currentPlayer = "X";
    
    cells.forEach((cell) => {
        cell.classList.remove("X","0");
        cell.innerHTML="";
    });
    

messageElement.innerHTML = "X's turn";
cells.forEach((cell) => cell.
addEventListener("click",
handleCellClick));
});

 //Check check the game status and winner possible
    
    function isGameover(){
    
    //Define the possible winning combinations
    
    const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];

      return winningCombos.some((combo)=>{
        return(
            board[combo[0]] !==""&&
            board[combo[0]] ==board
            [combo[1]]&&
           board[combo[1]] ==board
           [combo[2]] 
           );
      });    
    }
    
    function handleCellClick(){
        console.log("Cell Clicked");
    }