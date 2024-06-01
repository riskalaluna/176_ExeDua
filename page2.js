// page2.js

function submitForm() {
    // Get form values
    const textInput = document.getElementById('textInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const selectInput = document.getElementById('selectInput').value;
    const radioInput = document.querySelector('input[name="radioOptions"]:checked') ? document.querySelector('input[name="radioOptions"]:checked').value : '';

    // Display form values
    document.getElementById('resultTextInput').textContent = textInput;
    document.getElementById('resultDateInput').textContent = dateInput;
    document.getElementById('resultSelectInput').textContent = selectInput;
    document.getElementById('resultRadioInput').textContent = radioInput;
}