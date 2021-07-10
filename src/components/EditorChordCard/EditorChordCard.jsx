import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

//imports for chord player
import { Howler, Howl } from 'howler';
import { transpose, note, Chord, ChordType } from '@tonaljs/tonal';
import soundFile from './pianosprite.mp3';


function EditorChordCard({ chord, index }) {
    // establishes start notes for use in drop down selector
    const startNotes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F',
        'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
    // establishes start chords for use in drop down selector
    const startChords = ChordType.names();
    // esabablishes octaves for use in drop down selector
    const octaves = ['1', '2', '3']
    // esabalishes local state for chord details
    let [selectedChord, setCurrentChord] = useState({
        note: chord?.root_note,
        quality: chord?.chord_quality,
        octave: chord?.octave,
        id: chord?.id,
        progression_id: chord?.progression_id
    })
    // if i choose to show intervals
    let [chordIntervalsSpelled, setChordIntervalsSpelled] = useState({
        spelling: ''
    })
    // if i choose to show notes in chord
    let [chordNotesSpelled, setChordNotesSpelled] = useState('');
    // for dispataching to sagas or reducers
    const dispatch = useDispatch();
    // local state for conditionally rendering the edit features of a card
    let [editnotSelected, setEditNotSelected] = useState(true)
    // handles note change in edit of card
    const handleNoteChange = (event) => {
        setCurrentChord({ ...selectedChord, note: event.target.value })
        console.log(selectedChord)
    }
    // handles quality change in edit of card
    const handleQualityChange = (event) => {
        setCurrentChord({ ...selectedChord, quality: event.target.value })
        console.log(selectedChord)
    }
    // handles ocatave change in edit of card
    const handleOctaveChange = (event) => {
        setCurrentChord({ ...selectedChord, octave: event.target.value })
        console.log(selectedChord)
    }
    // handles delete chord dispatch to remove chord
    const handleDeleteChord = () => {
        dispatch({ type: 'REMOVE_CHORD', payload: chord })
    }
    // changes edit chord state to conditionally render edit of chord
    const handleEditChord = () => {
        setEditNotSelected(false)
    }
    // dispatches update chord to sagas and reducers
    const handleSaveChord = () => {
        dispatch({ type: 'UPDATE_CHORD', payload: selectedChord})
        setEditNotSelected(true)
    }


    //Chord Player Logic starts here

    const sound = new Howl({
        src: [soundFile],
        onload() {
            console.log('Sound File has been loaded.');
            soundEngine.init();
        },
        onloaderror(e, msg) {
            console.log('Error', e, msg)
        }
    })

    // allows to potentially display chord and is used for playing of chord in each card
    function displayAndPlayChord(usedChord) {
        let chordIntervals = Chord.getChord(usedChord.quality, usedChord.note).intervals;
        console.log(chordIntervals);
        let intervalsInChord = chordIntervals.join(' - ');
        console.log(intervalsInChord);
        //sets display of chord intervals
        setChordIntervalsSpelled({ spelling: intervalsInChord });
        const startNoteWithOctave = usedChord.note + usedChord.octave;
        console.log(startNoteWithOctave);
        let chordNotes = chordIntervals.map(val => {
            return transpose(startNoteWithOctave, val);
        })
        console.log(chordNotes)
        let notesInChord = chordNotes.join(' - ');
        //sets display of notes that make up the chord
        setChordNotesSpelled(notesInChord)
        //sends note values and calls sound engine to play chord notes
        soundEngine.play(chordNotes);
    }

    const soundEngine = {
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
    // function that plays chord
    const playChord = (event) => {
        console.log(selectedChord)
        displayAndPlayChord(selectedChord);
    }


    console.log(index)

    return (
        <div>{editnotSelected ? 
        <Card className="Card">
            <h2 className='text-center'>Chord # {index + 1}</h2>
            <h2 className='border text-center container'> {chord?.root_note} {chord?.chord_quality}</h2>
            <div className='space-between container' >
            <Button variant='contained' color='default' onClick={handleEditChord}>Edit Chord</Button>
            <Button variant='contained' color='default' onClick={playChord}>Play Chord</Button>
            </div>
        </Card>
            :
            <Card className="Card text-center"><h4>Chord # {index + 1}</h4>
            <h4 className='border text-center container'>{selectedChord.note} {selectedChord.quality}</h4>
                <h5>Root Note:
                <select onChange={handleNoteChange}>
                    <option>{chord?.root_note}</option>
                    {startNotes.map((notename) => (
                    <option key={notename} value={notename}>
                        {notename}
                    </option>
                ))}
                </select>
                </h5>
                <h5>Type:
                <select onChange={handleQualityChange}>
                    <option>{chord?.chord_quality}</option>
                    {startChords.map((chord) => (
                    <option key={chord} value={chord}>
                        {chord}
                    </option>
                ))}
                </select>
                </h5>
                <h5>Octave:
                <select onChange={handleOctaveChange}>
                    <option>{chord?.octave}</option>
                    {octaves.map((octaveRange) => (
                    <option key={octaveRange} value={octaveRange}>
                        {octaveRange}
                    </option>
                ))}
                </select>
                </h5>
                <div className='text-center space-between' >
                <Button variant='contained' color='default' onClick={handleDeleteChord}>Delete</Button>
                <Button variant='contained' color='default' onClick={playChord}>Play</Button>
                <Button variant='contained' color='default' onClick={handleSaveChord}>Save</Button>
                </div>
            </Card>}


        </div>
    )
}

export default EditorChordCard;