import { useHistory } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';


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
            <div>{progression.progression_name}
            <button onClick={selectProgression}>View / Edit</button>
            </div>
        </div>
    )
}

export default UserItem;