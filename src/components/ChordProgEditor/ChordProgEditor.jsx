import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditorChordCard from '../EditorChordCard/EditorChordCard'

function ChordProgEditor() {

    const progression = useSelector((store => store.progression))
    const chords = useSelector((store => store.chordsReducer))

    return (
        <div>
            <h1>Chord-Progression Editor</h1>
            <button>Play Chords</button>
            <button>Return to Home</button>
            <button>Save Chord Progression</button>
            <br/>
            <p>{progression.tempo} BPM Time Signature: {progression.beat_per_measure}/{progression.beat_value}</p>
            <button>Add Measure/Chord</button>
            <div>
                {chords?.map((chord, index) => {
                    return (
                        <EditorChordCard key={chord?.id} chord={chord} index={index} />
                    );
                })}
            </div>
        </div>
    )
}

export default ChordProgEditor;