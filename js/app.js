let x = 10
let y = "20s;gljdlgjdlkghklfhglfdjgfkldgjdfkljgkldjgldk"
let a = true
//console.log(10 - 10)
//functios ... pure fumctions and side effects
const name = "john"
function print(input) {
  console.log(input)
  return
}
const add = function(x, y) {
  return x + y
}
const double = (x) => {
  return 2 * x
}
const sum = add(double(6), 10)
print(sum)
//purity
//
//
//
//
//
function changeName(Name) {
  let n = name
  let newName = n + Name
  return newName
}
function sayName() {
  return name
}
function doSomething() {
  let newName = changeName("peter")
  print(newName)
  //.....
  print(sayName())
}
doSomething()
