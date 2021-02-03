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
}