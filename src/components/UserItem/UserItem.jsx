import { useHistory } from 'react-router-dom';


function UserItem(props) {

    const history = useHistory();

    const selectProgression = (event) => {
        history.push('/view');
    }
    return (
        <div>
            <span>{props.progression.progression_name}
                <button onClick={selectProgression}>View / Edit</button>
            </span>
        </div>
    )
}

export default UserItem;