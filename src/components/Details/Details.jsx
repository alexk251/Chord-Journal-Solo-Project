import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


function Details() {

    const history = useHistory();

    const progression = useSelector((store => store.progression))



    const Next = (event) => {
        history.push('/editor')
    }

    return (
        <div>
            <Card className='text-center'> <h1>Review Details </h1>
                <h2>Progression Name</h2>
                {progression.progression_name}
                <h2>Amount of Chords/Measures</h2>
                {progression.amount_of_chords}
                <h2>Tempo</h2>
                {progression.tempo}
                <h2>Time Signature</h2>
                {progression.beat_per_measure}/{progression.beat_value}
                <br />
                <br />
                <Button variant='contained' color='default' onClick={Next}>Next</Button>
            </Card>
        </div>
    )
}

export default Details;