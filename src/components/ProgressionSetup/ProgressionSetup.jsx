import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


function Setup() {
    useEffect(() => {
        // get highest progression id from backend on page load
        dispatch({ type: 'FETCH_HIGHEST_PROG' });
    }, []);

    const user = useSelector((store) => store.user);
    const progression = useSelector((store => store.highestProgIDReducer))

    const dispatch = useDispatch();

    const history = useHistory();

    let [progressionDetailsMade, setProgressionDetailsMade] =useState(true)

    let [progressionSetupDetails, setProgressionSetupDetails] = useState({
        progression_name: '',
        amount_of_chords: 0,
        user_id: user.id ,
        tempo: 0 ,
        beat_per_measure: 3,
        beat_value: 4
    })

    let setupChords = [];

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

    const numberofChordsFunction = (numberOfChords) => {
        for (let i = 1; i <= (numberOfChords); i++) {
            setupChords.push({
                progression_id: ((progression[0].id)+1),
                root_note: 'C',
                chord_number: i,
                chord_quality: 'major',
                octave: '2'
            });
        }
        console.log(setupChords)
    }
 
    const postProgressionSetupDetails = (event) => {
        console.log(progressionSetupDetails);
        if(progressionSetupDetails.progression_name == '' || progressionSetupDetails.amount_of_chords == 0 || progressionSetupDetails.tempo == 0
        || progressionSetupDetails.beat_per_measure == 0){
            alert('Fill out the required fields')
        } else {
        dispatch({type: 'ADD_PROGRESSION', payload: progressionSetupDetails});
        
        numberofChordsFunction(progressionSetupDetails.amount_of_chords)
            dispatch({type: 'ADD_SETUP_CHORDS', payload: setupChords})

            setProgressionDetailsMade(false)
        }
    }

    const goToEditor = (event) => {
        setProgressionDetailsMade(true)
        history.push('/editor');

        setProgressionSetupDetails({
            progression_name: '',
            amount_of_chords: 0,
            user_id: user.id ,
            tempo: 0 ,
            beat_per_measure: 0,
            beat_value: 0
            })
            }
    

            const handleHome = () => {
                history.push('/user');
            }
    return (
        <div className='text-center'>
            { progressionDetailsMade ? <form onSubmit={postProgressionSetupDetails}>

            <h1>New Chord Progression Setup</h1>
            <Card>
            <h2>Progression Name:</h2>
            <input onChange={handleNameChange} type="text" required placeholder="Progression Name" />
            </Card>
            <Card>
            <h3>Tempo:</h3>
            <input onChange={handleTempoChange} type="number" required min="60" step="10" max="200" /> BPM
            </Card>
            <Card>
            <h3>Number of Chords and Measures:</h3>
            <h4>(one chord per measure)</h4>
            <input onChange={handleChordAmountChange} type="number" required min="1" step="1" max="32" />#
            </Card>
            <Card>
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
            </Card>
            <br/>
            <Button variant='contained' color='default' onClick={postProgressionSetupDetails} type="submit">Begin Editing Chords</Button>
            <br/>
            <Button variant='contained' color='default' onClick={handleHome}>Cancel/Return to Home</Button>
            </form> 
            :
            <Card> <h1>Review Details </h1>
            <h2>Progression Name</h2>
            {progressionSetupDetails.progression_name}
            <h2>Amount of Chords/Measures</h2>
            {progressionSetupDetails.amount_of_chords}
            <h2>Tempo</h2>
            {progressionSetupDetails.tempo}
            <h2>Time Signature</h2>
            {progressionSetupDetails.beat_per_measure}/{progressionSetupDetails.beat_value}
            <br />
            <br />
             <Button variant='contained' color='default' onClick={goToEditor}>Go To Editor</Button> </Card>}
            
        </div>
    );
}

export default Setup;