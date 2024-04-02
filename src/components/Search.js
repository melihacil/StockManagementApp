import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Search() {
  return (
    <div className="p-inputgroup flex-1">
      <Button label="Ara" />
      <InputText placeholder="Ürün Adı" />
    </div>
  );
}

export default Search;
