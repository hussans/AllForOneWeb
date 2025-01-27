async function fetchMadlibResponse(inputs) {
    try {
        const url = `https://allforoneweb-g4fsepduf4ftc9fs.westus-01.azurewebsites.net/Madlib/Adventure/${inputs.villageName}/${inputs.characterAdj}/${inputs.classType}/${inputs.characterName}/${inputs.year}/${inputs.treasureName}/${inputs.mentorName}/${inputs.companionName}/${inputs.villainName}/${inputs.eventLocation}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Fetch Error:', error);
        return 'Error: Could not reach the server';
    }
}

document.getElementById('createStoryButton').addEventListener('click', async () => {

    const villageName = document.getElementById('villageNameInput').value;
    const characterAdj = document.getElementById('characterAdjInput').value;
    const classType = document.getElementById('classTypeInput').value;
    const characterName = document.getElementById('characterNameInput').value;
    const year = document.getElementById('yearInput').value;
    const treasureName = document.getElementById('treasureNameInput').value;
    const mentorName = document.getElementById('mentorNameInput').value;
    const companionName = document.getElementById('companionNameInput').value;
    const villainName = document.getElementById('villainNameInput').value;
    const eventLocation = document.getElementById('eventLocationInput').value;

    if (
        !villageName ||
        !characterAdj ||
        !classType ||
        !characterName ||
        !year ||
        !treasureName ||
        !mentorName ||
        !companionName ||
        !villainName ||
        !eventLocation
    ) {
        alert('Please fill out all fields before generating the story.');
        return;
    }

    const inputs = {
        villageName,
        characterAdj,
        classType,
        characterName,
        year,
        treasureName,
        mentorName,
        companionName,
        villainName,
        eventLocation,
    };

    const story = await fetchMadlibResponse(inputs);

    document.getElementById('storyOutputText').textContent = story;
});