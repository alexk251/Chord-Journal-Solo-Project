import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';


function UserItem({progression}) {

    const history = useHistory();

    const dispatch = useDispatch();

    const selectProgression = (event) => {
        dispatch({type:'SET_PROGRESSION_DETAILS', payload: progression})
        dispatch({ type: 'FETCH_CHORDS', payload: progression.id });
        history.push('/details')
    }

    return (
        <div>
            <div><h3>{progression.progression_name}</h3>
            <Button variant='contained' color='default' onClick={selectProgression}>View / Edit</Button>
            </div>
        </div>
    )
}

export default UserItem;