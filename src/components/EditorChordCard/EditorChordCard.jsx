import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditorChordCard({chord}) {

    const dispatch = useDispatch();

    const handleDeleteChord = () => {
        dispatch({type:'REMOVE_CHORD', payload: chord})
    }

    const

    return (
        <div>
            <h1>Chord # {chord.chord_number}</h1>
            <select>
                <option>{chord.root_note}</option>
            </select>
            <select>
                <option>{chord.chord_quality}</option>
            </select>
            <select>
                <option>{chord.octave}</option>
            </select>
            <button>Play Chord</button>
            <h2>{chord.root_note} {chord.chord_quality}</h2>
            <button onClick={handleDeleteChord}>Delete Chord</button>

        </div>
    )
}

export default EditorChordCard;