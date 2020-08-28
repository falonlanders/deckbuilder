import React, { useState, Component, useEffect } from 'react';
import {
    fetchCards, fetchTypes,
} from '../api';
import './Search.css';


const SearchBar = ({ setResults }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    //set type in search
    const [types, setType] = useState('');
    //creating dropdown
    const [allTypes, setAllTypes] = useState([]);
    //slow api.....
    const [isLoading, setIsLoading] = useState(false);

    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleTextChange = event => {
        setText(event.target.value);
    }

    const handleDropdown = event => {
        setType(event.target.value);
    }

    useEffect(async () => {
        setIsLoading(true);
        setAllTypes(await fetchTypes());
        setIsLoading(false);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const cards = await fetchCards({
            name,
            text,
            types,
        });
        setResults(cards);
    }

    return (
        <div id="search">
            <h3>Look up cards here...</h3>
            <form onSubmit={handleSubmit}>
                <input className="searchBar"
                    type="text"
                    placeholder="card name"
                    value={name}
                    onChange={handleNameChange} />
                <input className="searchBar"
                    type="text"
                    placeholder="card text"
                    value={text}
                    onChange={handleTextChange} />
                {
                    isLoading ? <select className="dropdown">
                        <option value="" disabled selected hidden>select a type</option>
                    </select>
                        : <select onChange={handleDropdown}>
                            <option value="" disabled selected hidden>select a type</option>
                            {allTypes.map((type, index) => {
                                return <option key={index} value={type}>{type}</option>
                            })
                            }
                        </select>
                }
                <button id="searchButton" type="submit">Search</button>
            </form >
        </div >
    );
}



export default SearchBar;
