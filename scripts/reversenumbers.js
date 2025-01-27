const reverseButton = document.getElementById('reverseButton');
const reverseInput = document.getElementById('reverseInput');
const outputText = document.getElementById('outputText');


async function reverseNumberUsingAPI(number) {
    try {
        const response = await fetch(`https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/ReverseIt//Reverse/${number}`);
        
        if (!response.ok) throw new Error('API request failed');
        return await response.text();
    } catch (error) {
        console.error('Error:', error);
        return "Failed to reverse number";
    }
}

reverseButton.addEventListener('click', async () => {
    const input = reverseInput.value.trim();

    if (!input || isNaN(input)) {
        outputText.textContent = "Please enter a valid number!";
        return;
    }

    const result = await reverseNumberUsingAPI(input);
    outputText.textContent = `Reversed: ${result}`;
});