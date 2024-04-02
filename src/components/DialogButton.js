import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import LoginPage from "../../src/pages/LoginPage";
import { InputText } from "primereact/inputtext";
import { addBasket } from "../redux/slice/basketSlice";
import { Toast } from 'primereact/toast';


function DialogButton({ productId }) {
  const products = useSelector((state) => state.products);
  const loginUser = useSelector((state) => state.loginuser);
  const [visible, setVisible] = useState(false);
  const [irNumarasi, setIrNumarasi] = useState(0);
  const [miktar, setMiktar] = useState(0);

  const existingProduct = products.filter((f) => f.id === productId);
  const dispach = useDispatch();
  //const {name, stock} = existingProduct[0];
  //console.log(existingProduct);
  //const [uname, setuname] = useState(JSON.stringify(name))
  //console.log(existingProduct[0]);

  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();
  const date = `${day}/${month}/${year}`;

  const [selectedDropDown, setSelectedDropDown] = useState(null);
  const dropDownOptions = [{ name: "Var" }, { name: "Yok" }];

  const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Başarılı', detail: 'Talep Oluşturuldu.' });
    };

  function DialogOkButtonClicked() {
    setVisible(false);
    dispach(
      addBasket({
        product: existingProduct,
        irnumber: irNumarasi,
        miktar: miktar,
        garanti: selectedDropDown,
        durum: "Onay Bekliyor",
        user: loginUser,
        date: date,
      })
      
    );
    show()
  }

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <span className="font-bold white-space-nowrap">Ürün Bilgisi</span>
    </div>
  );

  const footerContent = (
    <div>
      <Button
        label="Onayla"
        icon="pi pi-check"
        onClick={() => DialogOkButtonClicked()}
        autoFocus
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} position="bottom-right" />
      <Button
        label="Ekle"
        icon="pi pi-external-link"
        onClick={() => {
          setVisible(true);
        }}
      />
      <Dialog
        visible={visible}
        modal
        header={headerElement}
        footer={footerContent}
        style={{ width: "50rem" }}
        onHide={() => {
          setVisible(false);
        }}
      >
        <div>
          {existingProduct.map((items, idx) => (
            <div>
              <h1>{items.name}</h1>
              <h4>Kod: {items.code}</h4>
              <h4>Kategori: {items.category}</h4>
              <h4>Stok: {items.stock}</h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
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

                <InputText
                  onChange={(e) => setIrNumarasi(e.target.value)}
                  keyfilter="int"
                  placeholder="IR Numarası"
                />
                <InputText
                  onChange={(e) => setMiktar(e.target.value)}
                  keyfilter="int"
                  placeholder="Miktar"
                />
              </div>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}

export default DialogButton;
