import React, { Component } from 'react'
import Invoice from './Service';
import { Link } from "react-router-dom";
import axios, { Axios } from 'axios';

// import Button from 'react-bootstrap/Button'
export default class Restaurantbill extends Component {
    constructor(props){
    super(props)
        this.state = {
            restaurantsList:[],
        };
    }
  
    // addMenu=()=>{
    //     this.props.history.push("add");
    // }
    componentDidMount(){
        axios.get("api/menu").then(response=>{
            const MenuList=response.data
            this.setState({RestaurantsList:response.data});
        });
        console.log(this.state.RestaurantsList)

    }
    deleteSpecialist(RestaurantsId){
        axios.delete(`/api/menu/delete/${RestaurantsId}`)
        .then(response=>{
            const RestaurantsList= this.state.RestaurantsList.filter(item => item.RestaurantsId !==RestaurantsId);
            this.setState({RestaurantsList})
        })
       //////
    }
    render() {
        console.log(this.state.Restaurants)

        return (
            <div>
                <h2 className='text-center'>RestaurantsList</h2>
                <div className='row' padding="">
                <Link to="/add" className=''>
                {/* <Button variant="primary">Primary</Button>{' '} */}
                    </Link>{""}
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                            <th  > id</th> 
                                    <th> id</th> 
                                    <th>name</th> 
                                    
                                    <th>image</th>

                            </tr>
                   
                        </thead>
                        <tbody>
                                {
                                    this.state.RestaurantsList.map((
                                        item =>(
                                        <tr key = {item.RestaurantsId}>
                                             <td> { item.RestaurantsId} </td>
                                             <td>{item.name}</td>
                                             <td>{item.size} </td>
                                             <td>
                                             <img src={item.image} alt="no burger"></img>
                                             </td>
                                             {/* <img src={item.image}></img> */}
                                             <td>{item.location}</td>
                                             <td><button onClick={(e)=> this.deleteSpecialist(item.RestaurantsId,e)}>delete</button></td>
                                        </tr>

                                    )))
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
