import React from 'react';
import {updateFirstNameInput, updateLastNameInput} from "../redux/userForm/userFormActions";
import { useDispatch, useSelector } from 'react-redux';

const Form = () =>{

    const firstName = useSelector(state =>state.firstName);
    const lastName = useSelector(state =>state.lastName);

    const dispatch = useDispatch()
    return (
        <div>
            <h2>----------------------------------------------------------------Redux----------------------------------------------------------------</h2>
            <form action="">
                First Name: <input 
                type="text"
                value={firstName}
                onChange={ (e) => dispatch(updateFirstNameInput(e.target.value))}
                />
                Last Name: <input 
                type="text"
                value={lastName}
                onChange={ (e) => dispatch(updateLastNameInput(e.target.value))}
                /> 
            </form>
            <div> 
                <p>First Name : {firstName}</p>
                <p>last Name : {lastName}</p>
            </div>
        </div>
    );
} 
export default Form;
