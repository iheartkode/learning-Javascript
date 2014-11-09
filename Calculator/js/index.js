// Addition Function to parse the text and add it.
function addition(num1,num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var sum = document.getElementById("sum");
    sum.value = parseInt(num1) + parseInt(num2);   

  // Clear text boxes
   document.getElementById('num1').value = '';
   document.getElementById('num2').value = '';  
  }

function subtraction(num1,num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var sum = document.getElementById("sum");
    sum.value = parseInt(num1) - parseInt(num2);   

  // Clear text boxes
   document.getElementById('num1').value = '';
   document.getElementById('num2').value = '';  
  }
function multiplication(num1,num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var sum = document.getElementById("sum");
    sum.value = parseInt(num1) * parseInt(num2);   

  // Clear text boxes
   document.getElementById('num1').value = '';
   document.getElementById('num2').value = '';  
  }

function division(num1,num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value
    var sum = document.getElementById("sum");
    sum.value = parseInt(num1) / parseInt(num2);   

  // Clear text boxes
   document.getElementById('num1').value = '';
   document.getElementById('num2').value = '';  
  }