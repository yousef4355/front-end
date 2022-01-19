
import React from "react";
import {Outlet,NavLink, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";
//import "./invoices.css"

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
  
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={event => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter(invoice => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map(invoice => (
              
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "yellow" : ""
                })}
                to={`/invoices/${invoice.restaurantsId}`}
                key={invoice.restaurantsId}
              >
                
                {console.log(invoice)}
                <img src={invoice.image}></img>
                {invoice.name}
                
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }