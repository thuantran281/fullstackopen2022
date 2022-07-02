import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    //event.preventDefault();
    console.log("button clicked", event.target);

    const found = persons.find((person) => person.name === newName);
    if (found) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject));
    }
   
    setNewName("");
  };

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <label>
          <div>
            name:{" "}
            <input type="text" value={newName} onChange={handleNameChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </label>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
