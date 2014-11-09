function reverse(s){
    return s.split("").reverse().join("");
}

// Function to get the id = name from the text field
function getName() {
  // get the elements value
  var name = document.getElementById("name").value;
  // check if the value is empty
  if (name == "") {
   document.getElementById("reversed").innerHTML = "HALT, you must have a name?";
 }else{
   document.getElementById("reversed").innerHTML = reverse(name).toUpperCase() + "  Ha Ha Funny is thy name in reverse :)";
   
   // Clear the text input form
   document.getElementById('name').value = '';
   
 }   
}




