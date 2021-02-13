let statement = document.getElementById("statement");
let display = document.getElementById("display");
let evalBtn = document.getElementById("eval");

evalBtn.addEventListener("click", evalSums)

function evalSums() {
  let res = eval(statement.value)
  display.innerHTML = "<b>"+res+"</b>";
  //statement.innerHTML = res
}

function dispNum(num) {
  statement.value += num
}

function clearDisp() {
  statement.value = "";
  display.innerHTML = "0";
}
function delLast() {
  let val = statement.value
  let test = val.slice(0, -1)
  statement.value = test
}