import React,{ useEffect,useState } from 'react'
import {Row,Col,Button,Card} from 'react-bootstrap'
import { useMatch, useParams } from 'react-router-dom';
import "./ProfilePage.css";

 function ProfilePage({match}) {
 
    const [user,setUser]=useState('');
    const params=useParams();
    const id= params.id;
    async function  fetchProfile(){
        const getURL= "https://tutorial4-api.herokuapp.com/api/users/"+id;
        const response=await fetch(getURL);
        const dataToList=await response.json();
        setUser(dataToList.data)
        console.log(dataToList)
    }
    
    useEffect(() => {
    fetchProfile();
    },[]);

    return (
    
      <div className='centered'>
        <Card className='border-right-6' style={{ width: '18rem ' }}>
          <Card.Img variant="Dark" src={user.picture} />
          <Card.Body>
            <Card.Title>{user.firstName } { user.lastName} </Card.Title>
              <Card.Text>
              {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )}

export default ProfilePage;
