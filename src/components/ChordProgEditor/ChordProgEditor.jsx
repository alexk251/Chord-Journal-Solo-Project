function ChordProgEditor() {
    return (
        <div>
            <h1>Chord-Progression Editor</h1>
            <button>Play Chords</button>
            <button>Return to Home</button>
            <button>Save Chord Progression</button>
            <br/>
            <p>120 BPM Time Signature: 4/4</p>
            <button>Add Measure/Chord</button>
            <div>
                {/* will add cards later once reducer is defined with data */}
                {/* {selectedChords.map((chord) => {
                    return (
                        <ChordCard key={chord.id} chord={chord} />
                    );
                })} */}
            </div>
        </div>
    )
}

export default ChordProgEditor;