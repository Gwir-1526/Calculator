function calculate() {
  var x = document.getElementById("eredmeny").value;
  var y = eval(x);
  document.getElementById("eredmeny").value = y;     
}

function display(value) {
    document.getElementById("eredmeny").value += value;
}

function clearScreen() {
    document.getElementById("eredmeny").value = "";
}