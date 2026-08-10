let a = 10
let b = 5

function print(input) {
  console.log(input)
}
function checkGreater(num1, num2) {

  switch (true) {
    case num1 > num2:
      print(num1 + "is greater " + num2);
      break

    case num1 < num2:
      print(num1 + "is lesser" + num2);
      break

    case num1 === num2:
      print(num1 + "is equal to " + num2);
      break

    default:
      print("error");
  }
}
checkGreater(10, 10)

//loops .. jump backs
//
//
//for (let i = 1; i < 10; i++) {
//  print(i)
//}
let counter = 0
let isCount = true
while (isCount) {
  counter += 1
  if (counter === 10) {
    isCount = false
  }
  print(counter)
}
//recursion
function rev(num) {
  print(num)
  if (num === 0) {
    return
  }
  return rev(num - 1)
}
rev(10)
