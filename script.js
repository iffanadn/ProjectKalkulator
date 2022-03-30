// Fungsi Untuk Update Screen Kalkulator
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number;
};

//Fungsi memberikan Event ke Tombol Angka
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currenNumber);
    });
});

//Fungsi memebrikan event ke Tombol operator
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

// Membuat Variabel untuk menyimpan angka
let prevNumber = "";
let calculationOperator = "";
let currenNumber = "0";

// Fungsi Input Number
const inputNumber = (number) => {
    if (currenNumber === "0") {
        currenNumber = number;
    } else {
        currenNumber += number;
    }
};

//Fungsi untuk Operator
const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currenNumber;
    }
    calculationOperator = operator;
    currenNumber = "";
};

//Fungsi Equal Sign
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currenNumber);
});

//Membuat fungsi kalkulasi
const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currenNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currenNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currenNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currenNumber);
            break;
        default:
            break;
    }

    currenNumber = result;
    calculationOperator = "";
};

//Membuat Fungsi Tombol AC (Clear Button)
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currenNumber);
});

//Membuat fungsi mengahopus layar
const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currenNumber = "0";
};

//Membuat Fungsi Tombol Decimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currenNumber);
});

inputDecimal = (dot) => {
    if (currenNumber.includes(".")) {
        return;
    }
    currenNumber += dot;
};