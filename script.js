let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

// -- Clear --
document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.querySelector('#btn_ac').addEventListener('click', function () {
    inputWindow.value = inputWindow.value.substr(0,inputWindow.value.length-1)
})


// ---- arithmetic operators ----

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.querySelector("#btn_sub").addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sub';
    inputWindow.value = '';
})

document.querySelector('#btn_mult').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
})

document.querySelector('#btn_divis').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
    console.log(lastOperand );
})

document.querySelector('#btn_square').addEventListener('click', function () {
    operation = null;
    lastOperand = 0;
    inputWindow.value = Math.sqrt(parseInt(inputWindow.value));
})

document.querySelector('#btn_expo').addEventListener('click', function () {
    operation = null;
    lastOperand = 0;
    inputWindow.value = inputWindow.value**2;
})

 // ---- operation equals ---- 

document.querySelector('#btn_equals').addEventListener('click', function () {

    if(operation === 'sum'){
        const sum = lastOperand + parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = sum;
    }

    else if(operation === 'sub'){
        const sub = lastOperand - parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = sub;
    }

    else if(operation === 'mult'){
        const mult = lastOperand * parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = mult;
    }

    else if(operation === 'div'){
        const div = lastOperand / parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = div;
    }

    else if(operation === 'square'){
        const square = Math.sqrt(lastOperand)
        operation = null;
        lastOperand = 0;
        inputWindow.value = square;
    }
    
})


// ---- numbers buttons ----

document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.querySelector('#btn_pi').addEventListener('click', function () {
    inputWindow.value += Math.PI.toFixed(2);
    
})

document.querySelector('#btn_drop').addEventListener('click', function () {
    inputWindow.value += '.';
    
})
