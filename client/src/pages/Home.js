import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:3001/").then((response) => {
        setListOfPosts(response.data);
      });
    }, []);
  
    return (
      <div>
        <h1>Home!!!</h1>
      </div>
    );
  }

export default Home