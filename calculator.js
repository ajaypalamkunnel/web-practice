let isOperatorClicked = 0; //false
var oldValue;
var newValue;
var setOpr, res;
var sign;

//button click function
function bclick(val) {
  if (isOperatorClicked == 0) {
    document.getElementById("screen").value += val;
  } else {
    newValue = document.getElementById("screen").value += val;
    if (sign == "+") {
      add();
    } else if (sign == "-") {
      sub();
    } else if (sign == "*") {
      mul();
    } else {
      div();
    }
  }
}

//clear screen
function clearDisplay() {
  document.getElementById("screen").value = "";
}
//equal button action
function equalClick() {
  console.log(res);
  document.getElementById("screen").value = res;
}
// if action button clicked
function acClick(opr) {
  isOperatorClicked = 1;
  if (opr == "+") {
    oldValue = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    sign = "+";
  } else if (opr == "-") {
    oldValue = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    sign = "-";
  } else if (opr == "*") {
    oldValue = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    sign = "*";
  } else if (opr == "/") {
    oldValue = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    sign = "/";
  }
  console.log("hi");
}

//addition
function add() {
  console.log("iam add");
  res = parseInt(oldValue) + parseInt(newValue);
}
//substraction
function sub() {
  console.log("iam add");
  res = parseInt(oldValue) - parseInt(newValue);
}
//multiplication
function mul() {
  console.log("iam add");
  res = parseInt(oldValue) * parseInt(newValue);
}
//Division
function div() {
  console.log("iam add");
  res = parseInt(oldValue) / parseInt(newValue);
}
