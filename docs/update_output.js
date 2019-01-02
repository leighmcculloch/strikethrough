(function(window, document){
  var $input, $output;

  function initialize() {
    $input = document.getElementById('input');
    $output = document.getElementById('output');

    $input.addEventListener('input', updateOutput);
    updateOutput();
  }

  function updateOutput() {
    var chars = $input.innerText.split('');
    var output = '';
    for (var i=0; i<chars.length; i++) {
      var c = chars[i];
      output += c;
      if (c != '\n') {
        output += '\u0336';
      }
    }
    $output.innerText = output;
  }

  window.addEventListener("load", initialize);
})(window, document);
