const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

function calculate(n1, operator, n2) {
    const first = parseFloat(n1);
    const second = parseFloat(n2);

    if (operator === 'add') return first + second;
    if (operator === 'subtract') return first - second;
    if (operator === 'multiply') return first * second;
    if (operator === 'divide') return second === 0 ? 'Error' : first / second;

    return second;
}

keys.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;

    const key = e.target;
    const action = key.dataset.action;
    const value = key.textContent;
    const current = display.textContent;
    const previous = calculator.dataset.previousKeyType;

    Array.from(keys.children).forEach(button => {
        button.classList.remove("is-depressed");
    });

    // NUMBER
    if (!action) {
        if (current === "0" || previous === "operator" || previous === "calculate") {
            display.textContent = value;
        } else {
            display.textContent += value;
        }

        calculator.dataset.previousKeyType = "number";
        return;
    }

    // DECIMAL
    if (action === "decimal") {
        if (previous === "operator" || previous === "calculate") {
            display.textContent = "0.";
        } else if (!current.includes(".")) {
            display.textContent += ".";
        }

        calculator.dataset.previousKeyType = "decimal";
        return;
    }

    // OPERATORS
    if (action === "add" || action === "subtract" ||
        action === "multiply" || action === "divide") {

        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;

        if (firstValue && operator && previous !== "operator" && previous !== "calculate") {
            const result = calculate(firstValue, operator, current);
            display.textContent = result;
            calculator.dataset.firstValue = result;
        } else {
            calculator.dataset.firstValue = current;
        }

        key.classList.add("is-depressed");

        calculator.dataset.operator = action;
        calculator.dataset.previousKeyType = "operator";
        return;
    }

    // CALCULATE
    if (action === "calculate") {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;

        if (firstValue && operator) {
            const result = calculate(firstValue, operator, current);
            display.textContent = result;
            calculator.dataset.firstValue = result;
        }

        calculator.dataset.previousKeyType = "calculate";
        return;
    }

    // CLEAR
    if (action === "clear") {
        display.textContent = "0";
        calculator.dataset.firstValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
    }
});