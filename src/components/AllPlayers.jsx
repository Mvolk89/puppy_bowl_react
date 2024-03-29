import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPlayers } from '../API/index.js';

const AllPlayers = () => {
    const { id } = useParams();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const playersFromApi = await getAllPlayers();
            setPlayers(playersFromApi);
        };

        fetchPlayers();
    }, [id]);

    return (
        <div>
            <h1>All Players</h1>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <p>ID: {player.id}</p>
                        <p>Name: {player.name}</p>
                        <p>Breed: {player.breed}</p>
                        <p>Status: {player.status}</p>
                        <img src={player.imageURL} alt={player.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllPlayers;