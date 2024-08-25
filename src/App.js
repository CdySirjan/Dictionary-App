import React, { useState } from 'react';
import './App.css';

function App() {
    const [word, setWord] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = () => {
        setResult(`Definition of ${word}`);
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
                        <p>{result}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
