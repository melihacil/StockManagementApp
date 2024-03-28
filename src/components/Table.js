import React from "react";
import { useSelector } from "react-redux";
import DialogButton from "./DialogButton";

function Table() {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <table>
        <thead>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>-</th>
        </thead>
        {products.map((items, index) => (
          <tr key={index}>
            <td>{items.code}</td>
            <td>{items.name}</td>
            <td>{items.category}</td>
            <td>{items.stock}</td>
            <td><DialogButton productId={items.id} /></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
