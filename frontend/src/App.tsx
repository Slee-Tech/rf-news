import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NewsList } from './components/NewsList';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="App container">

                <NewsList />
            </div>
        </>
    );
}

export default App;
