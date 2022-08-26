 import { Button } from '@mui/material';
import React from 'react'
import './Book.css'
 const Book = (props) => {
    const {_id,name,author,description,price,image}=props.book;
    return (
     <div className="card">
        <img src={image} alt={name}/>
        <artical>By {author}</artical>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <Button>Update</Button>
        <Button>Delete</Button>

     </div>
   )
 }
 
 export default Book