import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/css/Table.css";
import { Paginator } from "primereact/paginator";

function AdminProductBoard() {
  const basketItems = useSelector((state) => state.basket.baskets);
  const [talepler, setTalepler] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(7);
  //const recordPerPage = 7;
  const lastIndex = currentPage * rows;
  const firstIndex = lastIndex - rows;
  const records = basketItems.slice(firstIndex, lastIndex);
  const npage = Math.ceil(basketItems.length / rows);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const onPageChange = (event) => {
    console.log(event);
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
    //recordPerPage = event.rows
  };
  console.log(basketItems);


  return (
    <>
      <h1
        style={{
          marginLeft: 400,
        }}
      >
        Talepler
      </h1>

      <div
        style={{
          width:'70%',
      height:'auto',
      marginTop:30,
      marginLeft:400,
      boxShadow:'11px 12px 13px 12px rgb(207,207,207)',
      borderRadius:10,
      paddingTop:20,
      paddingLeft:250,
        }}
      >
        <div className="table-container">
          <table className="table">
            <thead>
              <th>Personel</th>
              <th>Code</th>
              <th>IR Numarası</th>
              <th>Garanti Durumu</th>
              <th>Adet</th>
              <th>Tarih</th>
              <th>Durum</th>
              <th></th>
            </thead>
            {records.map((items, index) => (
              <tr key={index}>
                <td>{items.user.username}</td>
                <td>--</td>
                <td>{items.irnumber}</td>
                <td>{items.garanti.name}</td>
                <td>{items.miktar}</td>
                <td>{items.date}</td>
                <td>{items.durum}</td>
                <td>
                  <button>Onayla</button>
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
      </div>
    </>
  );
}

export default AdminProductBoard;
