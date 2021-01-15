
const board = [
		["","",""],
		["","",""],
		["","",""]
	]
const avail = new Array;
for(let i = 0; i < 3; i++){
	for(let j =0; j<3; j++){
		avail.push([i,j])
	}
}
const players = ["X","O"];
let curPlayerIndex = Math.floor(Math.random(players.length));
let curPlayer = players[curPlayerIndex];

let curSpotIndex; 
let curSpot;
function startGame(){
	curSpotIndex = Math.floor(Math.random()*avail.length);
    curSpot = avail.splice(curSpotIndex,1)[0];
}
function nextTurn(){
	curPlayerIndex = (curPlayerIndex+1)%players.length;
	curPlayer=players[curPlayerIndex];
	curSpotIndex = Math.floor(Math.random()*avail.length);
    curSpot = avail.splice(curSpotIndex,1)[0];
}
startGame();
function setup(){
	createCanvas(400,400);
	frameRate(2);
	background("green");
}
function draw(){
	stroke("white")
	strokeWeight(5);
	const h = height/3;
	const w = width/3;
	line(0,h,width,h);
	line(0,h*2,width,h*2);
	line(w,0,w,height);
	line(w*2,0,2*w,height);

	

	let i = curSpot[0];
	let j = curSpot[1];
			
	
	const r =w/4;
	const x = i*w+w/2;
	const y = j*h+h/2;
	textSize(21);
	
	board[i][j]=curPlayer

	if(curPlayer==="X"){
		line(x-r,y-r,x+r,y+r);
		line(x+r,y-r,x-r,y+r);
	}else if(curPlayer==="O"){
		noFill();
		ellipse(x,y,r*2)
	}
	let result = checkWinner();
	
	  if (result != null) {
	    noLoop();
	    let resultP = createP('');
	    resultP.style('font-size', '32pt');
	    if (result == 'tie') {
	      resultP.html('Tie!');
	    } else {
	      resultP.html(`${result} wins!`);
	    }
	  } else {
	    nextTurn();
	  }
	
}

function equals3(a, b, c) {
  return a == b && b == c && a != '';
}

function checkWinner() {
  let winner = null;
  console.log(board)

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
      console.log("here",winner)
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
      console.log("here",winner)
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
    console.log("here",winner)
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
    console.log("here",winner)
  }

  if (winner == null && avail.length == 0) {
    return 'tie';
  } else {
    return winner;
  }
}