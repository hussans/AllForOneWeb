const reverseItButton = document.getElementById('reverseItButton');
const reverseInput = document.getElementById('reverseInput');
const outputText = document.getElementById('outputText');


async function reverseInputText(input) {
    try {
        const response = await fetch(
            `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/ReverseIt/Reverse/${input}`
        );
        
        if (!response.ok) throw new Error('API request failed');
        return await response.text();
    } catch (error) {
        console.error('Error:', error);
        return "Failed to reverse input";
    }
}


reverseItButton.addEventListener('click', async () => {
    const input = reverseInput.value.trim();

    if (!input) {
        outputText.textContent = "Please enter something to reverse!";
        return;
    }

    const result = await reverseInputText(input);
    outputText.textContent = result;
});