import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';


function UserItem({progression}) {
    // history for going to different pages/routes
    const history = useHistory();
    // dispatch for sending payloads and calling sagas and reducers
    const dispatch = useDispatch();

    const selectProgression = (event) => {
        // calls set progression details with progression when progression is selected
        dispatch({type:'SET_PROGRESSION_DETAILS', payload: progression})
        // fetches chords for progression when progression is selected
        dispatch({ type: 'FETCH_CHORDS', payload: progression.id });
        // goes to details page
        history.push('/details')
    }

    const deleteProgression = (event) => {
        dispatch({type:'DELETE_PROGRESSION', payload:progression.id})
    }

    return (
            <tr>
                <td><h3>{progression.progression_name}</h3></td>
            <td><Button variant='contained' color='default' onClick={selectProgression}>View / Edit</Button></td>
            <td><Button variant='contained' color='default' onClick={deleteProgression}>Delete</Button></td>
            </tr>
    )
}

export default UserItem;