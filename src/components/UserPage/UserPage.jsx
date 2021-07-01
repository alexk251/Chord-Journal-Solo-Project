import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import UserItem from '../UserItem/UserItem';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


function UserPage() {
  const user = useSelector((store) => store.user);

  const yourChordProgressions = useSelector((store) => store.chordProgressionsReducer)

  const dispatch = useDispatch();
  const history = useHistory();

  const toSetupPage = () => {
    history.push('/setup')
  }


  useEffect(() => {
    getYourChordProgressions();
}, []);

  const getYourChordProgressions = () => {
    dispatch({type: 'FETCH_YOUR_PROGRESSIONS'})
  }


  return (
    <Card className="container text-center">
      <h1>Your Chord Progressions</h1>
      <Button variant='contained' color='default' onClick={toSetupPage}>New Chord Progression</Button>
      <div>
        {yourChordProgressions.map((progression) => {
          return (
            <UserItem key={progression.id} progression={progression} />
          );
        })}
      </div>
      
    </Card>
  );
}


export default UserPage;
