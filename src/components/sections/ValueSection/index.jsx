import { Form } from "./Form";
import { List } from "./List";
import { TotalMoney } from "./TotalMoney";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ValueSection = (formData) => {
  const [valueList, setValueList] = useState([]);
  console.log(valueList);

  const addValue = (formData) => {
    const newValue = { ...formData, id: uuidv4() };
    setValueList([...valueList, newValue]);
  };

  const removeValue = (removeId) => {
    const newValueList = valueList.filter((value) => value.id !== removeId);
    setValueList(newValueList);
  };
  return (
    <>
      <div className="containerPrincipal">
        <Form addValue={addValue} />
        <List valueList={valueList} removeValue={removeValue} />
      </div>
      <TotalMoney valueList={valueList} />
    </>
  );
};
