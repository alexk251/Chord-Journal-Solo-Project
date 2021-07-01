import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditorChordCard from '../EditorChordCard/EditorChordCard'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './ChordProgEditor.css';


function ChordProgEditor() {

    const dispatch = useDispatch();
    const history = useHistory();

    const progression = useSelector((store => store.progression))
    const chords = useSelector((store => store.chordsReducer))

    let [addChordDetails, setAddChordDetails] = useState({
        progression_id: progression.id,
        root_note: 'C',
        chord_number: (chords[chords.length-1].chord_number +1),
        chord_quality: 'major',
        octave: '2'
    })

    

    const handleAddChord = () => {
        dispatch({ type: 'ADD_CHORD', payload: addChordDetails })
    }

    const handleHome = () => {
        history.push('/user');
    }

    return (
        <div>
            <h1 className='text-center'>Chord-Progression Editor</h1>
            <div className='text-center'>
            <Button variant='contained' color='default'>Play Chords</Button>
            <Button onClick={handleHome} variant='contained' color='default'>Return to Home</Button>
            </div>
            <br/>
            <p className='text-center'>{progression.tempo} BPM Time Signature: {progression.beat_per_measure}/{progression.beat_value}</p>
            <div className='text-center'>
            <Button variant='contained' color='default' onClick={handleAddChord}>Add Measure/Chord</Button>
            </div>
            <div>
            <Grid  container spacing={3}>
                {chords?.map((chord, index) => {
                    return (
                        
                        <EditorChordCard key={chord?.id} chord={chord} index={index} />
                        
                    );
                })}
                </Grid>
            </div>
        </div>
    )
}

export default ChordProgEditor;