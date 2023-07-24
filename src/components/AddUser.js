import React, {useState} from 'react';
import '../css/AddUser.css';

const AddUser = ({users, setUsers, setUserFlag}) => {
    // State to store the email address of the new user.
    const [newUserEmail, setNewUserEmail] = useState("")

    // Function to close the modal and update the set of users.
    const closeAddUserModal = () => {
        setUserFlag(false)
        setUsers([...users, newUserEmail])
    }

    // Function to store the email address in the newUserEmail state
    const handleNewUserChange = (e) => {
        setNewUserEmail(e.target.value)
    }

    return (
        <div className='modalStyle'>
            <div className='modalContent'>
                <h2>Enter you email address...</h2>
                <div className='modalAlignment'>
                    <input className='modalTextInput' value={newUserEmail} onChange={handleNewUserChange}/>
                    <button className='modalButton' onClick={closeAddUserModal}>Add User</button>
                </div>
            </div>
        </div>
        
    )
}

export default AddUser