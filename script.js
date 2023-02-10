let lastOperand = 0;
let operation = null;
let leer = null;
let rew = ''


const inputWindow = document.getElementById('inputWindow');

let x = 0;

// -- Clear --
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_ac').addEventListener('click', function () {
    inputWindow.value = inputWindow.value.substr(0,inputWindow.value.length-1)
})


// ---- arithmetic operators ----

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById("btn_sub").addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sub';
    inputWindow.value = '';
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
})

document.getElementById('btn_divis').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
    console.log(lastOperand );
})


document.getElementById('btn_square').addEventListener('click', function () {
    operation = null;
    lastOperand = 0;
    inputWindow.value = Math.sqrt(parseInt(inputWindow.value));
})

document.getElementById('btn_expo').addEventListener('click', function () {
    operation = null;
    lastOperand = 0;
    inputWindow.value = inputWindow.value**2;
})

document.getElementById('btn_equals').addEventListener('click', function () {

    if(operation === 'sum'){
        const sum = lastOperand + parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = sum;
    }

    if(operation === 'sub'){
        const sub = lastOperand - parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = sub;
    }

    if(operation === 'mult'){
        const mult = lastOperand * parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = mult;
    }

    if(operation === 'div'){
        const div = lastOperand / parseFloat(inputWindow.value)
        operation = null;
        lastOperand = 0;
        inputWindow.value = div;
    }

    if(operation === 'square'){
        const square = Math.sqrt(lastOperand)
        operation = null;
        lastOperand = 0;
        inputWindow.value = square;
    }
    
})


// ---- numbers buttons ----

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.getElementById('btn_pi').addEventListener('click', function () {
    inputWindow.value += Math.PI.toFixed(2);
    
})

document.getElementById('btn_drop').addEventListener('click', function () {
    inputWindow.value += '.';
    
})
