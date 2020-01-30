import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
    return (
        <button className='btn btn-info' onClick={props.event} >{props.text}</button>
    )
}

const Statistic = (props) => {
    return (
        <div className='container'>
            <h1>{props.text} {props.value}</h1>
        </div>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + bad + neutral
    const average = (good + (bad*-1))/all
    const positive = (good / all)*100
    if ( all === 0) {
        return (
            <div className='container'>
                <h1>no feedback yet</h1>
            </div>
        )     
    }
    return (
        <div>
            <Statistic value={good} text='good' />
            <Statistic value={neutral} text='neutral' />
            <Statistic value={bad} text='bad' />
            <Statistic value={all} text='all' />
            <Statistic value={average} text='average' />
            <Statistic value={positive} text='positive' />
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    return (
        <div className='jumbotron'>
            <div className='container'>
                <h1>give feedback</h1>
                <Button event={() => setGood(good + 1)} text='good' />{good}
                <Button event={() => setNeutral(neutral + 1)} text='neutral' />{neutral}
                <Button event={() => setBad(bad + 1)} text='bad' />{bad}
            </div>
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
