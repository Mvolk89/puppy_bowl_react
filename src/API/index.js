const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-MT-WEB-PT/players';

export const getAllPlayers = async () => {
	try {
		const response = await fetch(API_URL);
		const playersJson = await response.json();
		return playersJson.data.players;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export const getSinglePlayer = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const playerJson = await response.json();
        return playerJson.data.player;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const addNewPlayer = async (player) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        });
        const newPlayerJson = await response.json();
        return newPlayerJson.data.player;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const deletePlayer = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        return response.status === 204;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const renderAllPlayers = (player) => {
    if (!player) {
        console.error("Player is undefined");
        return;
    }
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <p>ID: ${player.id}</p>
        <p>Name: ${player.name}</p>
        <p>Breed: ${player.breed}</p>
        <p>Status: ${player.status}</p>
        <p>ImageURL: ${player.imageURL}</p>
    `;
    document.body.appendChild(newDiv);
};

export const renderPlayerDetails = (player) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <p>ID: ${player.id}</p>
        <p>Name: ${player.name}</p>
        <p>Breed: ${player.breed}</p>
        <p>Status: ${player.status}</p>
        <p>ImageURL: ${player.imageURL}</p>
    `;
    document.body.appendChild(newDiv);
};

export const renderNewPlayerForm = () => {
    const newForm = document.createElement("form");

    const idInput = document.createElement("input");
    idInput.setAttribute("type", "text");
    idInput.setAttribute("name", "id");
    idInput.setAttribute("placeholder", "Player ID");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("placeholder", "Player Name");

    const breedInput = document.createElement("input");
    breedInput.setAttribute("type", "text");
    breedInput.setAttribute("name", "breed");
    breedInput.setAttribute("placeholder", "Player Breed");

    const statusInput = document.createElement("input");
    statusInput.setAttribute("type", "text");
    statusInput.setAttribute("name", "status");
    statusInput.setAttribute("placeholder", "Player Status");

    const imageURLInput = document.createElement("input");
    imageURLInput.setAttribute("type", "text");
    imageURLInput.setAttribute("name", "imageURL");
    imageURLInput.setAttribute("placeholder", "Player Image URL");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Add Player";

    newForm.appendChild(idInput);
    newForm.appendChild(nameInput);
    newForm.appendChild(breedInput);
    newForm.appendChild(statusInput);
    newForm.appendChild(imageURLInput);
    newForm.appendChild(submitButton);

    document.body.appendChild(newForm);
};