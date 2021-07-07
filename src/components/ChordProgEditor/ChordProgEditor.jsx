import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditorChordCard from '../EditorChordCard/EditorChordCard'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './ChordProgEditor.css';

import Timer from './timer.js';
import { Howler, Howl } from 'howler';
import { transpose, note, Chord, ChordType } from '@tonaljs/tonal';
import soundFile2 from './pianosprite.mp3';
import click from './click2.mp3';

function ChordProgEditor() {

    // establish variables for chord progression player
    let count = 0;
    let current_chord = 0;
    let isRunning = false;

    // establish dispatch and hisotry to dispatch to sagas and reducers and history to push to different pages
    const dispatch = useDispatch();
    const history = useHistory();

    // establish progression and chords from redux store

    const progression = useSelector((store => store.progression))
    const chords = useSelector((store => store.chordsReducer))

    // establish local state for adding another chord
    let [addChordDetails, setAddChordDetails] = useState({
        progression_id: progression.id,
        root_note: 'C',
        chord_number: (chords[chords.length-1].chord_number +1),
        chord_quality: 'major',
        octave: '2'
    })

    // on click add measure add chord dispatch is triggered in sagas
    const handleAddChord = () => {
        dispatch({ type: 'ADD_CHORD', payload: addChordDetails })
        setAddChordDetails({...addChordDetails, chord_number: addChordDetails.chord_number + 1 })
        
    }

    // return user to home page
    const handleHome = () => {
        history.push('/user');
    }

    // on click play progression starts and stops play progression
    const handlePlayProgression = () => {
        count = 0;
        current_chord = 0;
    if (!isRunning) {
        isRunning = true;
        metronome.start();
    } else {
        isRunning = false;
        metronome.stop();
        
    }
    }

    // estabishes metronome setup with Timer component
    const metronome = new Timer(playChords, 60000 / (progression.tempo), { immediate: false });

    // playchords that is triggered when metronomone starts or stops in handle play progression
    function playChords() {
        console.log(count);
        console.log(progression.beat_per_measure)
        console.log(chords[current_chord])
         if (current_chord == (chords.length)) {
            current_chord = 0;
        }
        if (count == progression.beat_per_measure) {
            count = 0;
            PlayChords(chords[current_chord]);
            current_chord++;
        };
        console.log(click)

        clickHowl.play();
        
        count++;

    }
    // establishes click howl for metronome click
    const clickHowl = new Howl({
        src: [click],
        html5: true,
        format: ['mp3'],
        autoplay:false
    });

    // logic that plays chords
       //Chord Player Logic starts here

       const sound = new Howl({
        src: [soundFile2],
        onload() {
            console.log('Sound File has been loaded.');
            soundEngine2.init();
        },
        onloaderror(e, msg) {
            console.log('Error', e, msg)
        }
    })

        // Play chords logic that accepts a chord to play
    function PlayChords(usedChord) {
        let chordIntervals = Chord.getChord(usedChord.chord_quality, usedChord.root_note).intervals;
        console.log(chordIntervals);
        const startNoteWithOctave = usedChord.root_note + usedChord.octave;
        console.log(startNoteWithOctave);
        let chordNotes = chordIntervals.map(val => {
            return transpose(startNoteWithOctave, val);
        })
        console.log(chordNotes)
        soundEngine2.play(chordNotes);
    }

    const soundEngine2 = {
        // logic that takes mp3 and divides it into intervals
        init() {
            const lengthOfNote = 2400;
            let timeIndex = 0;
            for (let i = 24; i <= 96; i++) {
                sound['_sprite'][i] = [timeIndex, lengthOfNote];
                timeIndex += lengthOfNote;
            }
        },
        // logic that turns notes into midi values and plays them
        play(soundSequence) {
            const chordMidiNUmbers = soundSequence.map(noteName => {
                return note(noteName).midi;
            });
            Howler.volume(0.20);
            chordMidiNUmbers.forEach(noteMidiNumber => {
                sound.play(noteMidiNumber.toString());
            })
        }
    }


    return (
        <div>
            <h1 className='text-center'>Chord-Progression Editor</h1>
            <div className='text-center'>
            <Button onClick={handlePlayProgression} variant='contained' color='default'>Play Chords</Button>
            <Button onClick={handleHome} variant='contained' color='default'>Return to Home</Button>
            </div>
            <br/>
            <p className='text-center'>{progression.tempo} BPM Time Signature: {progression.beat_per_measure}/{progression.beat_value}</p>
            <div className='text-center'>
            <Button variant='contained' color='default' onClick={handleAddChord}>Add Measure/Chord</Button>
            </div>
            <div>
            <Grid container spacing={3}>
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