// Defined Variables
var firstinput = document.getElementById("input1");
var secondinput = document.getElementById("input2");
var thirdinput = document.getElementById("input3");
var calculator = document.getElementById("calc");
var checkmark = document.getElementById("checkimg");
var imgplacement = document.getElementById("container");

// Event Listeners
calculator.addEventListener("click", calculate);

function calculate() {
  var base1 = Number(firstinput.value);
  var base2 = Number(secondinput.value);
  var height = Number(thirdinput.value);

  var area = ((base1 + base2) / 2) * height;
  console.log(area);

  let fa = area.toFixed(2);

  document.getElementById("finalresult").value = fa;
  firstinput.value = " ";
  secondinput.value = " ";
  thirdinput.value = " ";

  imgplacement.innerHTML += "<img width = '30px' src = 'img/images.png'>";
}
