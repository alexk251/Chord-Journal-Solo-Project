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
            <div>{progression.progression_name}
            <button onClick={Next}>Next</button>
            </div>
        </div>
    )
}

export default Details;