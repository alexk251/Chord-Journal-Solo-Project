import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import UserItem from '../UserItem/UserItem';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';


function UserPage() {
  // gets a users chord progressions from the redux store
  const yourChordProgressions = useSelector((store) => store.chordProgressionsReducer)
  // dispatch for sending sagas and reducer requests
  const dispatch = useDispatch();
  // history for moving to new pages
  const history = useHistory();
  // moves to setup page
  const toSetupPage = () => {
    history.push('/setup')
  }

  // on page load get chord progressions
  useEffect(() => {
    getYourChordProgressions();
}, []);
  // saga/reducer request through dispatch
  const getYourChordProgressions = () => {
    dispatch({type: 'FETCH_YOUR_PROGRESSIONS'})
  }


  return (
    <Card className="container text-center">
      <h1>Your Chord Progressions</h1>
      <Button variant='contained' color='default' onClick={toSetupPage}>New Chord Progression</Button>
      <div>
        <Table justify="center" className="container text-center">
        <tr>
          <th><h2>Progression Name</h2></th>
          <th><h2>View/Edit</h2></th>
          {/* <th><h2>Delete</h2></th> */}
        </tr>
        {yourChordProgressions.map((progression) => {
          return (
            <UserItem key={progression.id} progression={progression} />
          );
        })}
        </Table>
      </div>
      
    </Card>
  );
}


export default UserPage;
