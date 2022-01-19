import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Order() {
    let[type,setType]=useState("")
    let[time,setTime]=useState("")
    let[location,SetLocation]=useState("")
    function handleType(event){
        setType((type=event.target.value))
    }
    function handleTime(event){
        setTime((time=event.target.value))
    }
    function handleLocation(event){
        SetLocation((location=event.target.value))
    }
    let newOrder={"type":type,"time":time,"location":location}
    function handleSubmit(event){
        event.preventDefault();
        axios({
            method:"post",
            url:"api/orders/add",
            data:newOrder
        })
    }
    function handleDelete() {
        axios({
            method: "delete",
            url: "delete/36"
        });
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
    <input
     type="text"
     value={type}
     name="type"
     placeholder="type"
     onChange={handleType}
    />
      <input
     type="text"
     value={time}
     name="time"
     placeholder="time"
     onChange={handleTime}
    />
    <input
     type="text"
     value={location}
     name="location"
     placeholder="location"
     onChange={handleLocation}
    />
    <input type="submit" value="submit"/>
    <button onClick={handleDelete}>delete orders</button>
    </form>
            
        </div>
    )
}
