import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import { useDispatch } from 'react-redux'
import { addUser } from './store/slices/UserSlice'
const UserDetails = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <h3>list of user</h3>
        <button>Add new users</button>
        <ul>
            <li>talha</li>
            <li>hamza</li>
            <li>ali</li>
            <li >zarar</li>
        </ul>
        <DeleteAllUsers />
    </div>
  )
}

export default UserDetails