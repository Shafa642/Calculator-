const inputBox = document.querySelector('.input')
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalButton = document.querySelector('.equal');
const percentButton = document.getElementById('percent')
const allNumberButton = document.querySelectorAll('.number')
const inputValue = document.querySelector('.input').value


allNumberButton.forEach(item => {
    item.addEventListener('click', (e) => {
        inputNumber(item.textContent);
    })
});



const inputNumber = (number) => {
    const screenNumber = inputBox.value;

    if (/[\+\-\*\/%]$/.test(number)) {
        if (!/[\+\-\*\/%]$/.test(screenNumber)) {
            inputBox.value += number;
        } else {
            // Replace the last character with the new one
            inputBox.value = screenNumber.slice(0, -1) + number;
        }
    } else {
        if (screenNumber === '0') {
            inputBox.value = number;
        } else {
            inputBox.value += number;
        }
    }
}



clearButton.addEventListener('click', (e) => {
    inputBox.value = 0;
});


deleteButton.addEventListener('click', (e) => {
    let result = inputBox.value.slice(0, -1);
    inputBox.value = result
});


percentButton.addEventListener('click', (e) => {
    inputBox.value /= 100;
});


equalButton.addEventListener('click', (e) => {
    if (inputBox.value === "") {
        inputBox.value = ""
    }
    else {
        let answer = eval(inputBox.value);
        inputBox.value = answer;
    }
});


inputBox.addEventListener('keydown', (e) => {
    if (e.key === " ") {
        e.preventDefault();
    }

});