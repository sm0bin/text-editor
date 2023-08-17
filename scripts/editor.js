document.getElementById('bold').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    textField.classList.add('text-blue-500');
})
document.getElementById('italic').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    textField.classList.add('italic');
})
document.getElementById('underline').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    textField.classList.add('underline');
})
document.getElementById('a-left').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-left');
})
document.getElementById('a-right').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-right');
})
document.getElementById('a-center').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-center');
})
document.getElementById('a-justify').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    textField.classList.remove('text-left', 'text-right', 'text-center', 'text-justify');
    textField.classList.add('text-justify');
})

console.log('a')