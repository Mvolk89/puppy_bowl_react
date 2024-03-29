import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePlayer } from '../API/index.js'; 

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchPlayer = async () => {
            const playerFromApi = await getSinglePlayer(id);
            setPlayer(playerFromApi);
        };

        fetchPlayer();
    }, [id]);

    if (!player) {
        return <div></div>;
    }

    return (
        <div>
            <p>ID: {player.id}</p>
            <p>Name: {player.name}</p>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <img src={player.imageURL} alt={player.name} />
        </div>
    );
};

export default SinglePlayer;