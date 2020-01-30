import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistics = (props) => {
    if ( props.all === 0) {
        return (
            <div className='container'>
                <h1>no feedback yet</h1>
            </div>
        )     
    }
    return (
        <div className='container'>
            <h1>all {props.all}</h1>
            <h1>average {props.average}</h1>
            <h1>positive {props.positive}%</h1>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + bad + neutral
    const average = (good + (bad*-1))/all
    const positive = (good / all)*100

    return (
        <div className='jumbotron'>
            <div className='container'>
                <h1>give feedback</h1>
                <button className='btn btn-info' onClick={() => setGood(good + 1)}>good</button>
                {good}
                <button className='btn btn-info' onClick={() => setNeutral(neutral + 1)}>neutral</button>
                {neutral}
                <button className='btn btn-info' onClick={() => setBad(bad + 1)}>bad</button>
                {bad} 
            </div>
            <Statistics all={all} average={average} positive={positive} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
