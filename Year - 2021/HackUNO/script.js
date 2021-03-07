// Get the button, and when the user clicks on it, execute myFunction
//document.getElementById("button_calculation").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {


  // 28.7 X A1C – 46.7 = eAG
  // A1C = (eAG + 46.7)/28.7
  var output_value = 0;
  // extract the input value
  var input_value = document.getElementById('edit-calc-value').value;


  // check which radio button is checked
  // A1C or eAG
  if(document.getElementById('A1C').checked) {
    output_value = 28.7 * input_value - 46.7;
  }else if(document.getElementById('eAG').checked) {
    output_value = (input_value + 46.7)/28.7;
  }
  // mg/dL in mmol/L, conversion factor: 1 mg/dL = 0.0555 mmol/L
  // check which radio button is checked
  // mg/dl or  mmol/l
  if(document.getElementById('mmol').checked) {
      output_value *= 0.0555;
    }

    output_value = Math.round( output_value * 1 + Number.EPSILON ) / 1;
    document.getElementById('edit-results').value = output_value;


}
