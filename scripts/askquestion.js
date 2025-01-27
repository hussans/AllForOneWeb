const askQuestionButton = document.getElementById('askQuestionButton');
const nameInput = document.getElementById('nameInput');
const wakeUpInput = document.getElementById('wakeUpInput');
const outputText = document.getElementById('outputText');


async function getAnswer(name, wakeTime) {
    try {
        const response = await fetch(
            `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/TwoQuestion/TwoQuestions/${name}/${wakeTime}`
        );
        
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.text();
    } catch (error) {
        console.error('Fetch Error:', error);
        return "Error: Could not reach the server";
    }
}


askQuestionButton.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    const wakeTime = wakeUpInput.value.trim();

    if (!name || !wakeTime) {
        outputText.textContent = "Please fill in both fields!";
        return;
    }
    
    const answer = await getAnswer(name, wakeTime);
    outputText.textContent = answer;
});