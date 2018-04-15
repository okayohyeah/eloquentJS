// CHAPTER 2: Exercise 1
// ** LOOPING TRIANGLE **

var string="";
for (var i = 1; i < 8; i++) {
  string += "#";
  console.log(string);
}

// Author's solution

for (var line = "#"; line.length < 8; line += "#") {
  console.log(line);
}
  