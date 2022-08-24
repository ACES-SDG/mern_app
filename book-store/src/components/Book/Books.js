import React, { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'http://localhost:5000/books';



const fetchHandler = async()=>{
     return await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
   const [books, setBooks] = useState(); 
    useEffect(()=>{
        fetchHandler().then(data=>setBooks(data))
    });
    console.log(books);
  return (
    <div> <h1>All Books are here</h1></div>
  )
}

export default Books