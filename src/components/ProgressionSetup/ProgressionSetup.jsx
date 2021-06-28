import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';


function Setup() {
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();

    let [progressionSetupDetails, setProgressionSetupDetails] = useState({
        progression_name: '',
        amount_of_chords: 1,
        user_id: user.id ,
        tempo: 120 ,
        beat_per_measure: 4,
        beat_value: 4
    })

    const handleNameChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, progression_name: event.target.value})
        console.log(progressionSetupDetails)
    }

    const handleChordAmountChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, amount_of_chords: event.target.value})
        console.log(progressionSetupDetails)
    }

    const handleTempoChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, tempo: event.target.value})
        console.log(progressionSetupDetails)
    }

    const handleBeatsChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, beat_per_measure: event.target.value})
        console.log(progressionSetupDetails)
    }

    const handleBeatValueChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, beat_value: event.target.value})
        console.log(progressionSetupDetails)
    }

    const postProgressionSetupDetails = (event) => {
        console.log(progressionSetupDetails)
        dispatch({type: 'ADD_PROGRESSION', payload: progressionSetupDetails})

    }
    
    return (
        <div>
            <form onSubmit={postProgressionSetupDetails}>
            <h1>New Chord Progression Setup</h1>
            <h2>Progression Name:</h2>
            <input onChange={handleNameChange} type="text" required placeholder="Progression Name" />
            <h3>Tempo:</h3>
            <input onChange={handleTempoChange} type="number" required min="60" step="10" max="200" /> BPM
            <h3>Number of Chords and Measures:</h3>
            <h4>(one chord per measure)</h4>
            <input onChange={handleChordAmountChange} type="number" required min="1" step="1" max="32" />#
            <h3>Time Signature</h3>
            <select onChange={handleBeatsChange} required>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>/
            <select onChange={handleBeatValueChange} required>
                <option>4</option>
                <option>8</option>
                <option>16</option>
                <option>32</option>
            </select>
            <br/>
            <input onClick={postProgressionSetupDetails} type="submit" value="Begin Editing Chords" />
            <br/>
            <button>Cancel/Return to Home</button>
            </form>
            
        </div>
    );
}

export default Setup;