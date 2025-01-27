const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const outputText = document.getElementById('outputText');

async function getGreeting(name) {
    try {
        const response = await fetch(
            `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/HelloWorld/GreetUser/${name}`
        );
        if (!response.ok) throw new Error('API request failed');
        return await response.text();
    } catch (error) {
        console.error('Error:', error);
        return "Failed to get greeting";
    }
}


greetButton.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    
    if (!name) {
        outputText.textContent = "is not a name!";
        return;
    }

    const greeting = await getGreeting(name);
    outputText.textContent = greeting;
});