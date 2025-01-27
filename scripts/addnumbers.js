const addNumbersButton = document.getElementById('addNumbersButton');
const firstNumberInput = document.getElementById('firstNumberInput');
const secondNumberInput = document.getElementById('secondNumberInput');
const outputText = document.getElementById('outputText');


async function getSum(num1, num2) {
    try {
        const response = await fetch(
            `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/AddTwoNumbers/Sum/${num1}/${num2}`
        );
        
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.text();
    } catch (error) {
        console.error('Fetch Error:', error);
        return "Error: Could not calculate sum";
    }
}


addNumbersButton.addEventListener('click', async () => {
    const num1 = parseFloat(firstNumberInput.value);
    const num2 = parseFloat(secondNumberInput.value);

    if (isNaN(num1) || isNaN(num2)) {
        outputText.textContent = "Please enter valid numbers!";
        return;
    }
    
    try {
        const result = await getSum(num1, num2);
        outputText.textContent = `${result}`;
    } catch (error) {
        console.error('Error:', error);
        outputText.textContent = "Failed to calculate sum";
    }
});