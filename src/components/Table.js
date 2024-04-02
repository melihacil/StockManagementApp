import React, { useState } from "react";
import { useSelector } from "react-redux";
import DialogButton from "./DialogButton";
import "../components/css/Table.css";

import { Paginator } from "primereact/paginator";

function Table() {
  const products = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(7);
  //const recordPerPage = 7;
  const lastIndex = currentPage * rows;
  const firstIndex = lastIndex - rows;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / rows);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const onPageChange = (event) => {
    console.log(event);
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
    //recordPerPage = event.rows
  };

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <th>Kod</th>
            <th>Ad</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>-</th>
          </thead>
          {records.map((items, index) => (
            <tr key={index}>
              <td>{items.code}</td>
              <td>{items.name}</td>
              <td>{items.category}</td>
              <td>{items.stock}</td>
              <td>
                <DialogButton productId={items.id} />
              </td>
            </tr>
          ))}
        </table>
        <Paginator
          style={{
            marginTop: 50,
          }}
          first={first}
          rows={rows}
          totalRecords={120}
          rowsPerPageOptions={[7, 10, 20]}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

export default Table;
