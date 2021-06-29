function ChordProgView() {
    return (
        <div>
            <h1>Chord-Progression View Portal</h1>
            <button>Play Chords</button>
            <button>Return to Home</button>
            <button>Edit Chord Progression</button>
            <br/>
            <p>120 BPM Time Signature: 4/4</p>
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

export default ChordProgView;