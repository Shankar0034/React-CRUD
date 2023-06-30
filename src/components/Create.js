import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from '../constants/API'
import { useNavigate } from 'react-router-dom'


function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Checked, setChecked] = useState(false);
    const navigate =useNavigate();

    const postData = async () => {
       await axios.post(API_URL, {
            firstName,
            lastName,
            Checked

       })
       navigate('/read');
    }

  return (
    <Form className='form'>
        <Form.Field>
            <label>First Name </label>
            <input className='input' value={firstName} onChange={event => setFirstName(event.target.value)}
             placeholder='Enter first name' />
        </Form.Field> <br />
        <Form.Field>
            <label>Last Name </label>
            <input className='input' value={lastName} onChange={event => setLastName(event.target.value)}
            placeholder='Enter last name' />
        </Form.Field><br />
        <Form.Field>
            <Checkbox Checked={Checked} onChange={() => setChecked(!Checked)}
            label='Agree the Terms & conditions'/>
        </Form.Field><br />

        <Button onClick={postData}>Submit</Button>
    </Form>
  )
}

export default Create