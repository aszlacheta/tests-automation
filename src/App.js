import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [
        name,
        setName,
    ] = useState('');
    const [
        surname,
        setSurname,
    ] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const onSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <div>
                        <p>Name</p>
                        <input type="text" className="name" value={name} onChange={onNameChange} />
                    </div>
                    <div>
                        <p>Surname</p>
                        <input type="text" className="surname" value={surname} onChange={onSurnameChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <div id="results">
                    Name: {name}
                    Surname: {surname}
                </div>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
