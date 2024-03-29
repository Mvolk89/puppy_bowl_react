import { useEffect, useState } from 'react';
import "./App.css";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NavBar from "./components/NavBar.jsx";
import NewPlayerForm from "./components/NewPlayerForm.jsx";
import { getAllPlayers, getSinglePlayer, addNewPlayer, deletePlayer } from './API/index';
import PropTypes from 'prop-types';

function App() {
  const initialId = ""; // Define initialId here or import it from somewhere
  const [id, setId] = useState(initialId);
  const [player, setPlayer] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addNewPlayer(); // Assuming addNewPlayer() requires some input data
      // Optionally, you can fetch all players again after adding a new player
      await getAllPlayers();
    } catch (error) {
      console.error("Error adding player:", error);
      // Handle error if necessary
    }
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  useEffect(() => {
    const getPlayer = async () => {
      if (id) {
        const playerData = await getSinglePlayer(id);
        setPlayer(playerData);
      }
    };

    getPlayer();
  }, [id]);

  NavBar.propTypes = {
    players: PropTypes.array.isRequired,
  };

  const handleDelete = async () => {
    try {
      await deletePlayer(id);
      // Optionally, you can fetch all players again after deleting
      await getAllPlayers();
      // handle success if necessary
    } catch (error) {
      console.error("Error deleting player:", error);
      // handle error if necessary
    }
  };

  return (
    <>
      <NavBar />
      <AllPlayers />
      <SinglePlayer />
      <div>
        {player && (
          <>
            <h1>{player.name}</h1>
            {/* Display other player properties */}
            <button onClick={handleDelete}>Delete Player</button>
            <button onClick={() => setId('newId')}>Set ID</button>
          </>
        )}
      </div>
  
      <NewPlayerForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;