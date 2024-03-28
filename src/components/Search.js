import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Search() {
  return (
    <div className="p-inputgroup flex-1">
      <Button label="Search" />
      <InputText placeholder="Keyword" />
    </div>
  );
}

export default Search;
