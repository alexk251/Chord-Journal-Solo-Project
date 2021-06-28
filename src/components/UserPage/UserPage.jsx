import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import UserItem from '../UserItem/UserItem';

function UserPage() {
  const user = useSelector((store) => store.user);

  const yourChordProgressions = useSelector((store) => store.chordProgressionsReducer)

  const dispatch = useDispatch();


  useEffect(() => {
    getYourChordProgressions();
}, []);

  const getYourChordProgressions = () => {
    dispatch({type: 'FETCH_YOUR_PROGRESSIONS'})
  }


  return (
    <div className="container">
      <h2>Your Chord Progressions </h2>
      <ul>
        {yourChordProgressions.map((progression) => {
          return (
            <UserItem key={progression.id} progression={progression} />
          );
        })}
      </ul>
      <button>New Chord Progression</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
