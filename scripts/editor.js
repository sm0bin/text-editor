const textField = document.getElementById('text-field');
let italicToggle = false, underlineToggle = false, boldToggle = false, aLeftToggle = false, aRightToggle = false, aCenterToggle = false, aJustifyToggle = false;

document.getElementById('bold').addEventListener('click', function () {
    boldToggle = !boldToggle;
    if (boldToggle) {
        textField.classList.remove('font-normal');
        textField.classList.add('font-bold');
    } else {
        textField.classList.remove('font-bold');
        textField.classList.add('font-normal');
    }
})

document.getElementById('italic').addEventListener('click', function () {
    italicToggle = !italicToggle;
    if (italicToggle) {
        textField.classList.add('italic');
    } else {
        textField.classList.remove('italic');
    }
})

document.getElementById('underline').addEventListener('click', function () {
    underlineToggle = !underlineToggle;
    if (underlineToggle) {
        textField.classList.add('underline');
    } else {
        textField.classList.remove('underline');
    }
})


// Align Text
document.getElementById('a-left').addEventListener('click', function () {
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-left');
})

document.getElementById('a-right').addEventListener('click', function () {
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-right');
})

document.getElementById('a-center').addEventListener('click', function () {
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-center');
})

document.getElementById('a-justify').addEventListener('click', function () {
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-justify');
})



document.getElementById('color').addEventListener('input', function () {
    const selectColor = document.getElementById('color').value;
    console.log(selectColor)
    textField.style.color = selectColor;
})

document.getElementById('font-size').addEventListener('input', function () {
    const fontSize = document.getElementById('font-size').value;
    textField.style.fontSize = fontSize + 'px';
})

document.getElementById('font-family').addEventListener('change', function () {
    const selectFontFamily = document.getElementById('font-family').value;
    textField.style.fontFamily = selectFontFamily;
})
