import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import LoginPage from "../../src/pages/LoginPage";
import { InputText } from "primereact/inputtext";
import { addBasket } from "../redux/slice/basketSlice";



function DialogButton({ productId }) {
  const products = useSelector((state) => state.products);
  const [visible, setVisible] = useState(false);
  const existingProduct = products.filter((f) => f.id === productId);
  const dispach = useDispatch();
  //const {name, stock} = existingProduct[0];
  //console.log(existingProduct);
  //const [uname, setuname] = useState(JSON.stringify(name))
  console.log(existingProduct[0]);

  const [selectedDropDown, setSelectedDropDown] = useState(null);
  const dropDownOptions = [{ name: "Var" }, { name: "Yok" }];

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <span className="font-bold white-space-nowrap">Product Info</span>
    </div>
  );

  const footerContent = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Add"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        visible={visible}
        modal
        header={headerElement}
        footer={footerContent}
        style={{ width: "50rem" }}
        onHide={() => setVisible(false)}
        onClick={()=> dispach(addBasket("hellos"))}
      >
        <div>
          {existingProduct.map((items, idx) => (
            <div>
              <h1>{items.name}</h1>
              <h4>Code: {items.code}</h4>
              <h4>Category: {items.category}</h4>
              <h4>Stock: {items.stock}</h4>
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:'space-between',
                }}
              >
                <Dropdown
                  value={selectedDropDown}
                  onChange={(e) => setSelectedDropDown(e.value)}
                  options={dropDownOptions}
                  optionLabel="name"
                  placeholder="Garanti Durumu"
                  className="w-full md:w-14rem"
                />

                <InputText keyfilter="int" placeholder="IR Numarası" />
                <InputText keyfilter="int" placeholder="Miktar" />
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}

export default DialogButton;
