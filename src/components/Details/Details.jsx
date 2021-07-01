import { useHistory } from 'react-router-dom'
import {useSelector } from 'react-redux';


function Details() {

    const history = useHistory();

    const progression = useSelector((store => store.progression))



    const Next = (event) => {
        history.push('/editor')
    }

    return (
        <div>
            <div><h1>Name: {progression.progression_name}</h1>
            <h1>Tempo: {progression.tempo}</h1>
            <h1>Time Signature: {progression.beat_per_measure}/{progression.beat_value}</h1>
            <h1>Number of Chords/Measures: {progression.amount_of_chords}</h1>
            <button onClick={Next}>Next</button>
            </div>
        </div>
    )
}

export default Details;