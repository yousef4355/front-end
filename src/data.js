import  React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

let resturaunt=[];

  axios.get("/api/restauants")
  .then(response=>{
    resturaunt=response.data
    console.log(response.data)
 })

let invoices = [

    {
      id:1,
      name: "pizze",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
      
     Link:<Link to="/payment" ><button>payment</button></Link>
    },
    {
      id:2,
      name: "barger",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000"
    },
    { 
      name: "showerama",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003"
    },
    {
      name: "kabab",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997"
    },
    {
      name: "rice",
      number: 1998,
      amount: "$4,600",
      due: "01/27/2998"
    }
  ];
  
  export function getInvoices() {
    return resturaunt;
  }
  export function getInvoice(number) {
    return resturaunt.find(
      invoice => invoice.restaurantsId === number
    );
  }