import React from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import './index.css';

export default function App() {
    return (
        <div className="mainPage">
            <div className="titleSection">
                <h1>Welcome to Berlin!</h1>
                <h2>This app will help you find the most suitable BVG tickets for your trips.</h2>
            </div>
            <MainContainer />
        </div>
    );
}
