
import { Link } from 'react-router-dom';
import React from "react";



export default function Home(){

    return (
      <>
        <h2>Try out our Pizza!</h2>
        <Link to='/pizza'>
          <input type='submit' value='Order Pizza'/>
        </Link>
      </>
    );
  };