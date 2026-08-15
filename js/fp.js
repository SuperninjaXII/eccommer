const add = function(x) {
  let sum = x + 1
  return sum
}
const sub = function(x) {
  return x - 1
}
//lambda functiom
const mult = (base, factor) => {
  let prod = base * factor
  return prod
}

const $ = function(input) {
  console.log(input)
}
let z = 10
//let answer = add(100)
//console.log(answer)
function addAndSub() {
  let value = sub(add(30))
  $("the value is: " + value)
  z = value + 1
  $(mult(2, 8))
}
addAndSub()

//printting

$("hello")
