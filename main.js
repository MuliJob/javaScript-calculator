function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    var expression = document.getElementById('display').value;
    var result;

    switch(true) {
      case expression.includes('+'):
        result = eval(expression);
        break;
      case expression.includes('-'):
        result = eval(expression);
        break;
      case expression.includes('*'):
        result = eval(expression);
        break;
      case expression.includes('/'):
        result = eval(expression);
        break;
    case expression.includes('&'):
        result =eval(expression);
        break;
      default:
        result = 'Math Error!';
    }

    document.getElementById('display').value = result;
  }