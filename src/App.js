import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./routes/barger.css"

 function App() {
  return (
    
    <div>
      <h1>Food delivery مشروع </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/Home" ><button className="button"style={{background: "#FFCC00", color: "#000000" }}>Home</button></Link>|{" "}
        <Link to="invoices"> <button  className="button"style={{background: "#FFCC00", color: "#000000" }}> قائمة الطعام</button></Link> |{" "}
        <Link to="/expenses"><button className="button"style={{background: "#FFCC00", color: "#000000" }}> الدخول</button></Link> |{" "}
        <Link to="menu"><button className="button"style={{background: "#FFCC00", color: "#000000" }}>menu</button></Link> |{" "}
        <Link to="payment"><button className="button"style={{background: "#FFCC00", color: "#000000" }}>payment</button></Link>|{" "}
        <Link to="/Login"><button className="button"style={{background: "#FFCC00", color: "#000000" }}>logint</button></Link>|{" "}
        <Link to="Order"><button className="button"style={{background: "#FFCC00", color: "#000000" }}> Order</button></Link>|{" "}
        <Link to="driver"><button className="button"style={{background: "#FFCC00", color: "#000000" }}> driver</button></Link>|{" "}
        <Link to="restauants"><button className="button"style={{background: "#FFCC00", color: "#000000" }}>restauants</button></Link> |{" "}
        <Link to="restauantbill"><button className="button"style={{background: "#FFCC00", color: "#000000" }}>Restaurantbill</button></Link>
        
      </nav>
      <Outlet/>
    </div>
  );
}





export default App
