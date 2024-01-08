function calc(operator) {
    
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = 0.0;

    switch (operator) {
        
        case '+': output = num1 + num2; break;
        case '-': output = num1 - num2; break;
        case '*': output = num1 * num2; break;
        case '/': output = num1 / num2; break;
    }

    document.getElementById("output").value = output;
}