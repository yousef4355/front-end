import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import axios from "axios"

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  let [menuState,setMenuState]=useState("")
  let menuM
  // console.log(invoice)
  function useIt(){
  useEffect(() => {
    axios.get("/api/menu")
    .then(response=>{
      menuM=response.data
      console.log(menuM)
  }, [])
 
  })}
  // function yousefrender(){
  // for (let i; i<menuM.length-1;i++){
  //   if(menuM[i].restaurantsId==params){
  //     return( 
  //        <div className="row">
  //              <table className='table table-striped table-bordered'>
  //                  <thead>
  //                      <tr>
  //                        <th  > id</th> 
  //                         <th> id</th> 
  //                         <th>name</th> 
  //                         <th>size</th>
  //                         <th>picture</th>
    
  //                     </tr>
     
  //                   </thead>
  //                   <tbody>
  //                    {
  //                          this.state.MenuList.map((
  //                            item =>(
  //                               <tr key = {item.menu_id}>
  //                                  <td> { item.menu_id} </td>
  //                                  <td>{item.name}</td>
  //                                  <td>{item.size} </td>
  //                                  <td>
  //                                  <img src={item.picture} alt="no burger"></img>
  //                                  </td>
  //                                </tr>
  //                                    )
  //                                                   ))
  //                      }
  //                    </tbody>
  //                </table>
  //          </div>
  //            )
  //   }
  // }}
  // useIt(yousefrender())
  // setTimeout(yousefrender,3000)
  

// console.log(menuState[0].name)


  return (
    
    <main style={{ padding: "1rem" }}>
{/* <p> {invoice.restaurunts}</p>    */}
<h1> {invoice.menu[0].name}</h1>    
<img src={invoice.menu[0].picture}></img>
<h1>{invoice.menu[0].size}</h1>


 

    </main>
   );
}