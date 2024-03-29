import { useState } from 'react';
import PropTypes from 'prop-types';

function NewPlayerForm({ onSubmit }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('');

  NewPlayerForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id, name, breed, status }); // Pass the player data to the parent component's onSubmit function
    setId(''); // Reset the form fields
    setName(''); // Reset the form fields
    setBreed(''); // Reset the form fields
    setStatus(''); // Reset the form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label>
        Status:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPlayerForm;