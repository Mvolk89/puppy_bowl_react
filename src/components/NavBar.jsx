import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ players }) => {
  const [search, setSearch] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    if (players) {
      setFilteredPlayers(players);
    }
  }, [players]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearchClick = () => {
    if (players) {
      const filtered = players.filter(player =>
        player.name.toLowerCase().includes(search)
      );
      setFilteredPlayers(filtered);
    }
  };

  NavBar.propTypes = {
    players: PropTypes.array,
  };

  const PlayerList = ({ players }) => (
    <ul>
      {players.map((player) => (
        <li key={player.id}>{player.name}</li>
      ))}
    </ul>
  );

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <input
        type="text"
        placeholder="Search players..."
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      <PlayerList players={filteredPlayers} />
    </nav>
  );
};

export default NavBar;
