import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import { Table, Button } from 'semantic-ui-react'
import { API_URL } from '../constants/API';
import { useNavigate } from 'react-router-dom';

function Read() {

    const [apiData, setAPIData] = useState([]);
    const navigate = useNavigate()

    const updateUser = ({firstName, lastName, Checked, id}) => {
        localStorage.setItem('id', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('Checked', Checked)
        navigate('/update')
    }

    const deleteUser = async(id) => {
        await axios.delete(API_URL + id)
        callGetAPI()
    }

    const callGetAPI = async () => {
        const resp = await axios.get(API_URL);
        setAPIData(resp.data)
    }

    useEffect (() => {
        callGetAPI();
    },[]);

  return (
    <Table singleLine className='table'>
        <Table.Header className='heading'>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                apiData.map(data => (
                <Table.Row className='table-row' key = {data.id}>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.Checked ? 'checked' : 'Not Checked'}</Table.Cell>
                    <Table.Cell>
                        <Button onClick={() => deleteUser(data.id)} >Delete</Button>
                    </Table.Cell>
                    <Table.Cell>
                        <Button onClick={() => updateUser(data)} >Update</Button>
                    </Table.Cell>
                </Table.Row>
                ))
            }
        </Table.Body>
    </Table>
  )
}

export default Read