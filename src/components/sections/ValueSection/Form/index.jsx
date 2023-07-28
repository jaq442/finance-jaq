import { Input } from "./Inputs";
import { useState } from "react";
import { Select } from "./Select";
import styles from "./styles.module.scss";

export const Form = ({ addValue }) => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("in");

  const submit = (event) => {
    event.preventDefault();
    addValue({ title, number, category});
    setTitle("");
    setNumber("");
    setCategory("in");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={submit}>
        <Input
          id="description"
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          type="text"
          value={title}
          setValue={setTitle}
        />
        <p className="body">Ex: Compra de roupas</p>
        <Input
          id="value"
          label="Valor (R$)"
          placeholder="R$"
          type="number"
          value={number}
          setValue={setNumber}
        />
        <Select
          label="Categoria: "
          id="category"
          value={category}
          setValue={setCategory}
        >
          <option value="in">Entrada</option>
          <option value="out">Saída</option>
        </Select>
        <button className="btn" type="submit">
          Inserir Valor
        </button>
      </form>
    </div>
  );
};
