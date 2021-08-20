import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import schema from '../Validation/pizzaSchema'
import * as yup from 'yup'

const initialFormValues ={
      name:'',
      size:'',
      marinara:false,
      pesto:false,
      tomato:false,
      alfredo:false,
      special:'',
    }

const initialFormErrors ={
      name:'',
      size:'',
      special:'',
    }

const initialOrders = []


//ran out of time couldnt get validations to work

export default function Pizza(){


  const [orders, setOrders]=useState(initialOrders)
  const [pizzaValues, setPizzaValues]=useState(initialFormValues)
  // const [orderError, setOrderError]=useState(initialFormErrors)

  const postNewOrder = newOrder =>{
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res =>{
        setOrders([res.data, ...orders])
      }).catch(err=>{
        console.error(err)
      })
  }

  // const validations =(name, value)=>{
  //   yup.reach(schema, name)
  //   .validate(value)
  //   .then(()=>setOrderError({...orderError,[name]:''}))
  //   .catch(err=>setOrderError({...orderError,[name]: err.errors[0]}))
  // }

  const inputChange=(name, value)=>{
    // validations(name, value)
    setPizzaValues({...pizzaValues, [name]: value})
  }

  const submitOrder=()=>{
    const newOrder ={
      name: pizzaValues.name.trim(),
      size:pizzaValues.size.trim(),
      marinara:pizzaValues.marinara,
      pesto:pizzaValues.pesto,
      tomato:pizzaValues.tomato,
      alfredo:pizzaValues.alfredo,
      special:pizzaValues.special.trim()
    }

    postNewOrder(newOrder)
    setOrders(newOrder)
  }


  return (
    <>
      <h2>Build your own Pizza!</h2>
      <form id='pizza-form' onSubmit={submitOrder}> 
        <div className='order-name'>
          <h3>Name</h3>
          <input
            name='name'
            type='text'
            id='name-input'
            placeholder='Name'
            onChange={inputChange}
          />
        </div>
        <div className='order-size'>
          <h3>Size</h3>
            <select
              name='size'
              id='size-dropdown'
              onChange={inputChange}
            >
              <option value=''> Select your Size</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
              <option value='xlarge'>X-Large</option>
            </select>
        </div>
        <div className='order-sauce'>
          <h3>Sauce</h3>
          <p>Choose up to 4</p>
          <div>
            <label> Marinara
              <input
                name='marinara'
                type='checkbox'
                onChange={inputChange}
              />
            </label>
            <label> Pesto
              <input
                type='checkbox'
                name='pesto'
                onChange={inputChange}
              />
            </label>
            <br/>
            <label> Tomato Sauce
              <input
                type='checkbox'
                name='tomato'
                onChange={inputChange}
              />
            </label>
            <label> Alfredo
              <input
                type='checkbox'
                name='alfredo'
                onChange={inputChange}
              />
            </label>
          </div> 
        </div>
        <div >
          <h3>Special Instructions</h3>
          <input
            type='text'
            name='special'
            placeholder='Anything special you would like to request?'
            size='100'
            id='special-text'
            onChange={inputChange}
          />
        </div>
        <br/>
        <Link to='/confirm'>
          <input 
            id='order-button'
            type='submit' 
            value='Place Order'
          />
        </Link>
      </form>
    </>
  );
};