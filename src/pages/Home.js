import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import Search from "../components/Search";
import { Chart } from 'primereact/chart';
import ProductChart from "../components/ProductChart";
import ProductTable from "../components/ProductTable";
import ToolBar from "../components/ToolBar";
import DialogButton from "../components/DialogButton";
import Table from "../components/Table";


function Home() {
 

  return (
    <>
    
    
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop:100,
          marginLeft:300,
        }}
      >
        {/*
        <ProductTable/>
        <div style={{
          marginLeft:3,
          width:700,
          
        }}><ProductChart/></div> */}
        <Table></Table>
        
      </div>
      <DialogButton></DialogButton>
      
    </>
  );
}

export default Home;
