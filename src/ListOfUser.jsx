import React from 'react'
import { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { Button, ButtonGroup, Col, Row,Card } from 'react-bootstrap';

import './ListOfUser.css';

function ListOfUser() {

    let navigate= useNavigate();
    const [user,setUser]=useState([]);
    const [flag,setFlag]=useState(false);
    const [searchValue,setSearchValue]=useState('');

    async function  fetchListOfUser(){
        const getURL='https://tutorial4-api.herokuapp.com/api/users/';
        const response=await fetch(getURL);
        const dataToList=await response.json();
        setUser(dataToList.data)
    }
    useEffect(() => {
    fetchListOfUser();
    },[]);

    async function profileClick(userId){
        navigate("/user/"+userId)
    }

    return (
    <div className='page'>
        <div>
            <h3 className='searchlabel'>SEARCH</h3>
            <input className='search' value={searchValue} type="text" onChange={(e)=>setSearchValue(e.target.value)} />
        </div>
        <Row gutter={50}>
            { 
                user.filter(
                    (eachUser)=>
                    eachUser.firstName.toLowerCase().indexOf(searchValue.toLowerCase())>-1 ||
                    eachUser.lastName.toLowerCase().indexOf(searchValue.toLowerCase())>-1 
                ).map((eachUser,i) => 
                <Col>
                    <div className='usercardmargin' >
                        <Card   style={{ width: '13rem'}}>
                        <Card.Img variant="center" src={eachUser.picture} />
                        <Card.Body className='usercard'>
                            <Card.Title className='usercardtitle'>{eachUser.firstName}&nbsp;{eachUser.lastName} </Card.Title>
                                <Card.Text>
                                    {eachUser.email}
                                </Card.Text>
                            <Button variant="primary" onClick={()=>profileClick(eachUser.id)}>View Profile</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </Col>
            )}
        </Row> 
    </div>
    )}

export default ListOfUser;