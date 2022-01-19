import axios from 'axios'
import React from 'react'

export default function payment() {
    axios.delete('api')
    return (
        <div>
            <form>
                <select >
        <option value=" mada"> mada</option>
        <option value="visa">visa</option>
        <option value="applePay">applePay</option>
      </select>
    
  <input type="submit" value="Submit" />




                </form>
            
        </div>
    )
}
