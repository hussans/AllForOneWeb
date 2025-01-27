const questionInput = document.getElementById('questionInput');
const magicButton = document.getElementById('magicButton');
const outputText = document.getElementById('outputText');

async function fetchMagicEightBallResponse(question) {
    try {
        const response = await fetch(`https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/MagicEightBall/AskAQuestion/${question}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Fetch Error:', error);
        return 'Error: Could not reach the server';
    }
}

magicButton.addEventListener('click', async () => {
    const question = questionInput.value.trim();

    if (!question) {
        outputText.textContent = 'Please enter a question!';
        return;
    }

    const response = await fetchMagicEightBallResponse(question);
    outputText.textContent = response;
});