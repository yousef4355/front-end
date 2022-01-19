import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Driver() {

    let[phone_numbre,setPhone_numbre]=useState("")
    let[name,setName]=useState("")

    function handlePhone_numbre(event){
        setPhone_numbre((phone_numbre = event.target.value));
    }
    function handleName(event){
        setName((name = event.target.value));
    }
    let newDriver={
        phone_numbere:phone_numbre,
        name:name
    }

    function handleSubmit(event){
        event.preventDefault(); 
        axios({
            method:"post",
            url:"api/driver/add",
            data:newDriver
        })
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={phone_numbre}
                name="phone_numbers"
                placeholder="phone_numbers"
                onChange={handlePhone_numbre}
                />
                <input 
                type="text"
                value={name}
                name="name"
                placeholder="name"
                onChange={handleName}
                />
                <input type="submit" value="submit"/>

            </form>
        </div>
    )
}
