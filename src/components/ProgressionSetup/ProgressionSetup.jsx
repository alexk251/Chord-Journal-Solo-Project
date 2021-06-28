import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function Setup() {
    return (
        <div>
            <form>
            <h1>New Chord Progression Setup</h1>
            <h2>Progression Name:</h2>
            <input type="text" required placeholder="Progression Name" />
            <h3>Tempo:</h3>
            <input type="number" required min="60" step="10" max="200" /> BPM
            <h3>Number of Chords and Measures:</h3>
            <h4>(one chord per measure)</h4>
            <input type="number" required min="1" step="1" max="32" />#
            <h3>Time Signature</h3>
            <select required>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>/
            <select required>
                <option>4</option>
                <option>8</option>
                <option>16</option>
                <option>32</option>
            </select>
            <br/>
            <input type="submit" value="Begin Editing Chords" />
            <br/>
            <button>Cancel/Return to Home</button>
            </form>
            
        </div>
    );
}

export default Setup;