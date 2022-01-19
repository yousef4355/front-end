// import React from "react";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Location from "./routes/location";
import Driver from "./routes/driver";
import Payment from "./routes/payment";
import Login from "./routes/Login";
import Order from "./routes/Order"
import Restauants from "./routes/Restauants";
import Menu from "./routes/Menu";
import Home from './routes/Home'
import Restaurantbill from "./routes/Restaurantbill"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />

<Route path="/expenses" element={<Expenses/>}/>

        <Route path="Home" element={<Home/>}/>
        <Route path="Order" element={<Order />} />
        <Route path="menu" element={<Menu />} />
        <Route path="invoices" element={<Invoices />}> 
        <Route path=":invoiceId" element={<Invoice />} />
       
        </Route>
        
        <Route path="Restauants" element={<Restauants />}/>
        <Route path="location" element={<Location />}/>
        <Route path="payment" element={<Payment />}/>
          <Route path="driver" element={<Driver/>}>
            
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
        
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
