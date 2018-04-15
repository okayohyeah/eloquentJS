// CHAPTER 2: Exercise 1
// ** FIZZ BUZZ **

// console.log all number 1 - 100 except
// if divisible by 3 print "Fizz"
// if divisible by 5 (and not 3) print "Buzz"
// if divisible by 3 & 5 print "FizzBuzz"

for (var i = 1; i <= 100; i ++) {
  if (i % 3 == 0 && !(i % 5 == 0)) {
    console.log("Fizz");
  } else if (i % 5 == 0 && !(i % 3 == 0)) {
    console.log("Buzz");
  } else if (i % 5 == 0 && i % 3 == 0)
    console.log("FizzBuzz");
  {
    console.log(i);
  }
}

// Author's solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}