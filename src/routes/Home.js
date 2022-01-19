import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import "./home.css"
export default function Home() {
    return (
        <div className='p'>
         <Link to="/Login" ><button style={{background: "#FFCC00", color: "#000000" }}>log</button></Link>
         <Link to="/Invoices"><button style={{background: "#FFCC00", color: "#000000" }}>menu</button></Link>
          <h1>fghjk</h1>
          <div>
          
          <h1>humanly</h1>
          <button>do nothing</button>
          </div> 
          <div>
                   <h1>just image not food</h1>
          <button>same anther button</button>
        </div>
        </div>
    )
}
