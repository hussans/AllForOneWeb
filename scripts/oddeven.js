const oddEvenButton = document.getElementById('oddEvenButton');
const numberInput = document.getElementById('numberInput');
const outputText = document.getElementById('outputText');


async function checkOddOrEven(number) {
    try {
        const response = await fetch(
            `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/OddOrEven/Check/${number}`
        );
        
        if (!response.ok) throw new Error('API request failed');
        return await response.text();
    } catch (error) {
        console.error('Error:', error);
        return "Failed to check odd or even";
    }
}


oddEvenButton.addEventListener('click', async () => {
    const number = numberInput.value.trim();

    if (!number || isNaN(number)) {
        outputText.textContent = "Please enter a valid number!";
        return;
    }

    const result = await checkOddOrEven(number);
    outputText.textContent = result;
});