import React, { useState } from 'react';
import './App.css';

function App() {
    const [word, setWord] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = async () => {
        setResult('');  // set 0 value for next value
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        
        if (response.ok) {
            const data = await response.json();
            setResult(data[0].meanings[0].definitions[0].definition);
        }
    };

    return (
        <div className="container">
            <h1>Dictionary App</h1>
            <div className="search-box">
                <input
                    type="text"
                    id="inputs"
                    placeholder="Enter a word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <button id="searchBtn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div id="result">
                {result && (
                    <div className="definition">
                        <p>Definition: {result}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
