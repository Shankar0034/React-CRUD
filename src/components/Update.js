import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from '../constants/API';


function Update() {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const updateUser = async () => {
        await axios.put(API_URL + id, {
            firstName,
            lastName,
            Checked
        });
        navigate('/read')
    }

useEffect(() => {
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setChecked(localStorage.getItem('checked'))
},[])

  return (
    <Form className='form'>
        <Form.Field>
            <label>First Name </label>
            <input value={firstName} onChange={event => setFirstName(event.target.value)}
             placeholder='Enter first name' />
        </Form.Field> <br />
        <Form.Field>
            <label>Last Name </label>
            <input value={lastName} onChange={event => setLastName(event.target.value)}
            placeholder='Enter last name' />
        </Form.Field><br />
        <Form.Field>
            <Checkbox Checked={Checked} onChange={() => setChecked(!Checked)}
            label='Agree the Terms & conditions'/>
        </Form.Field><br />

        <Button onClick={updateUser}>Update</Button>
    </Form>
  )
}

export default Update