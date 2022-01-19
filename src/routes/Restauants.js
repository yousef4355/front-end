import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Menu.css"
// import Button from 'react-bootstrap/Button'
export default class Menu extends Component {
    constructor(props){
    super(props)
        this.state = {
            MenuList:[],
        };
    }
  
    // addMenu=()=>{
    //     this.props.history.push("add");
    // }
    componentDidMount(){
        axios.get("api/restauants").then(response=>{
            const MenuList=response.data
            this.setState({MenuList:response.data});
        });
        console.log(this.state.MenuList)

    }
    deleteSpecialist(menu_id){
        axios.delete(`/api/restauants/delete/${menu_id}`)
        .then(response=>{
            const MenuList= this.state.MenuList.filter(item => item.restaurantsId !==menu_id);
            this.setState({MenuList})
        })
       //////
    }
    render() {
        console.log(this.state.menu)

        return (
            <div>
                <h2 className='text-center'>Menu List</h2>
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
                                    <th>size</th>
                                    <th>picture</th>

                            </tr>
                   
                        </thead>
                        <tbody>
                                {
                                    this.state.MenuList.map((
                                        item =>(
                                        <tr key = {item.restaurantsId}>
                                             <td> { item.restaurantsId} </td>
                                             <td>{item.name}</td>
                                             <td>{item.restaurantsId} </td>
                                             <td>
                                             <img src={item.image} alt="no burger"></img>
                                             </td>
                                             {/* <img src={item.image}></img> */}
                                             {/* <td>{item.location}</td> */}
                                             <td><button onClick={(e)=> this.deleteSpecialist(item.menu_id,e)}>delete</button></td>
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