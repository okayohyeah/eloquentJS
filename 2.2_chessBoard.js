// CHAPTER 2: Exercise 3
// ** CHESS BOARD **

// for 8 X 8 chessboard
for (i=1; i<=8; i++) {
  if (i % 2 == 1) { //odd
    console.log("# # # # ");
  } else if (i % 2 == 0) { //even
    console.log(" # # # #");    
  }
}

// for any size output
function chessboard(width, height) {
  var output = "";
  for (i = 1; i <= height; i++){

    for (j = 1; j <= width; j++) {
      if ((i + j) % 2 == 1) { // even
        output += "#";
      } else if ((i + j) % 2 == 0) { // odd
        output += " ";
      };
    }
    output+= "\n";
  }
  console.log(output);
}

chessboard(3, 5);


// Author's solution
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);