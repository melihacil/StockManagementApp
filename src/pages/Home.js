import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import Search from "../components/Search";
import { Chart } from "primereact/chart";
import ProductChart from "../components/ProductChart";
import ProductTable from "../components/ProductTable";
import ToolBar from "../components/ToolBar";
import DialogButton from "../components/DialogButton";
import Table from "../components/Table";

function Home() {
  return (
    <>
    <div style={{
      width:'70%',
      height:'auto',
      marginTop:30,
      marginLeft:400,
      boxShadow:'11px 12px 13px 12px rgb(207,207,207)',
      borderRadius:10,
      paddingTop:20,
      paddingLeft:250,

    }}>
      <h1>
        Ürünler
      </h1>
      <div
        style={{
          width: "30%",
          
        }}
      >
        <Search />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          
        }}
      >
        {/*
        <ProductTable/>
        <div style={{
          marginLeft:3,
          width:700,
          
        }}><ProductChart/></div> */}

        <Table />
      </div>
      
      </div>
    </>
  );
}

export default Home;
