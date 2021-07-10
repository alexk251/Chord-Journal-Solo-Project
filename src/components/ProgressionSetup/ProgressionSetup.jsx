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
    // established user and progression from reducer stores
    const user = useSelector((store) => store.user);
    const progression = useSelector((store => store.highestProgIDReducer))
    // establish dispatch to call to sagas and reducers
    const dispatch = useDispatch();
    // establish history to change pages
    const history = useHistory();
    // establish local state of progression details to conditionally rendered
    let [progressionDetailsMade, setProgressionDetailsMade] =useState(true)
    // establish  local state setup progression details
    let [progressionSetupDetails, setProgressionSetupDetails] = useState({
        id: ((progression[0]?.id)+1),
        progression_name: '',
        amount_of_chords: 0,
        user_id: user.id ,
        tempo: 0 ,
        beat_per_measure: 3,
        beat_value: 4
    })
    // empty starting setup chords array for payload of dispatch
    let setupChords = [];

    const dummySetup = (event) => {
        setProgressionSetupDetails({
            ...progressionSetupDetails,
            id: ((progression[0]?.id)+1),
            progression_name: 'Maj7th Chords',
        amount_of_chords: 4,
        tempo: 120 ,
        beat_per_measure: 4,
        beat_value: 4

        })
    }
    // tracks name change
    const handleNameChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, progression_name: event.target.value})
        console.log(progressionSetupDetails)
    }
    // tracks chord amount change
    const handleChordAmountChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, amount_of_chords: event.target.value})
        console.log(progressionSetupDetails)
    }
    // tracks tempo change
    const handleTempoChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, tempo: event.target.value})
        console.log(progressionSetupDetails)
    }
    // tracks beat change
    const handleBeatsChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, beat_per_measure: event.target.value})
        console.log(progressionSetupDetails)
    }
    // tracks beat value change
    const handleBeatValueChange = (event) => {
        setProgressionSetupDetails({...progressionSetupDetails, beat_value: event.target.value})
        console.log(progressionSetupDetails)
    }
    // pushes number of chord with details into setupchords array.
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
    }
 
    const postProgressionSetupDetails = (event) => {
        // input validation
        if(progressionSetupDetails.progression_name == '' || progressionSetupDetails.amount_of_chords == 0 || progressionSetupDetails.tempo == 0
        || progressionSetupDetails.beat_per_measure == 0){
            alert('Fill out the required fields')
        } else {
            // add progression details dispatch to saga
        dispatch({type: 'ADD_PROGRESSION', payload: progressionSetupDetails});
            // add setup chords  dispatch to saga
        numberofChordsFunction(progressionSetupDetails.amount_of_chords)
            dispatch({type: 'ADD_SETUP_CHORDS', payload: setupChords})
            // conditionally render details page
            setProgressionDetailsMade(false)
        }
    }

    const goToEditor = (event) => {
        // return details render to original state
        setProgressionDetailsMade(true)
        // go to editor page
        history.push('/editor');
        // reset details for next input
        setProgressionSetupDetails({
            progression_name: '',
            amount_of_chords: 0,
            user_id: user.id ,
            tempo: 0 ,
            beat_per_measure: 0,
            beat_value: 0
            })
            }
    
            // go to user page
            const handleHome = () => {
                history.push('/user');
            }
    return (
        <div className='text-center'>
            { progressionDetailsMade ? <form onSubmit={postProgressionSetupDetails}>

            <h1 onClick={dummySetup}>New Chord Progression Setup</h1>
            <Card>
            <h2>Progression Name:</h2>
            <input onChange={handleNameChange} value={progressionSetupDetails.progression_name} type="text" required placeholder="Progression Name" />
            </Card>
            <Card>
            <h3>Tempo:</h3>
            <input onChange={handleTempoChange} value={progressionSetupDetails.tempo} type="number" required min="60" step="10" max="200" /> BPM
            </Card>
            <Card>
            <h3>Number of Chords and Measures:</h3>
            <h4>(one chord per measure)</h4>
            <input onChange={handleChordAmountChange} value={progressionSetupDetails.amount_of_chords} type="number" required min="1" step="1" max="32" />#
            </Card>
            <Card>
            <h3>Time Signature</h3>
            <select onChange={handleBeatsChange} value={progressionSetupDetails.beat_per_measure}  required>
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