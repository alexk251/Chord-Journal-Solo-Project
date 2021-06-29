import { useHistory } from 'react-router-dom'


function UserItem({progression}) {

    const history = useHistory();

    const selectProgression = (event) => {
        history.push('/view')
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