import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import Search from "../components/Search";
import { Chart } from "primereact/chart";
import ProductChart from "../components/ProductChart";
import { useSelector } from "react-redux";

function ProductTable() {
  const products = useSelector((state) => state.products);
  console.log(products);

  
  const columns = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "stock", header: "Stock" },
    { field: "-", header: "-" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 800,
            margin: 30,
          }}
        >
          <Search></Search>
        </div>

        <div
          style={{
            width: 800,
          }}
        >
          <DataTable value={products} paginator rows={10} rowsPerPageOptions={[5, 10]} tableStyle={{ minWidth: "50rem" }}>
            {columns.map((col, i) => (
              <Column key={col.field} field={col.field} header={col.header} />
              
            ))}
            
          </DataTable>
        </div>
      </div>
            
    </>
  );
}

export default ProductTable;
