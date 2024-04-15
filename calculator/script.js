
function calculate() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let selectElement = document.querySelector("select").selectedIndex;
    let resultElement = document.getElementById("result");

    // in case of user inputs non-numeric data or performs invalid operations
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Invalid Input! Please enter valid numbers.";
        return;
    }

    let result;

    // Perform the selected operation on the two numbers

    if (selectElement == 1) {
        result = num1 + num2;
    } 
    else if (selectElement == 2) {
        result = num1 - num2;
    } 
    else if (selectElement == 3) {
        result = num1 * num2;
    } 
    else if (selectElement == 4) {
        // Check if num2 is zero 
        if (num2 === 0) {
            resultElement.innerText = "Invalid operation! Dividing by zero is not possible.";
            return;
        }
        result = num1 / num2 ;
    } 
    else {
        resultElement.innerText = "Invalid operation!";
        return;
    }

    // Displaying the calculated result
    resultElement.innerHTML = `<h3> The calculated result is: ${result} </h3>`;
}
