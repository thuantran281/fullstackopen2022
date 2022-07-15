import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState([]);

  const addName = (event) => {
    event.preventDefault();
    //console.log("button clicked", event.target);

    const found = persons.find((person) => person.name === newName);
    const numberFound = persons.find((person) => person.number === newNumber);
    //if (found) {
    //  alert(`${newName} and ${newNumber} is already added to phonebook`);
    //}
    if (found && numberFound) {
      alert(`${newName} and ${newNumber} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
    }

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
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
            number:{" "}
            <input
              type="text"
              value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </label>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
