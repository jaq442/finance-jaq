import styles from "./style.module.scss";

export const ListItem = ({
  title,
  number,
  id,
  category,
  removeValue,
  valueCategory,
}) => {
  const numberReal = Number(number);
  return (
    <li>
      <div className={`${styles.li} ${category === "in" ? "green" : "grey"}`}>
      <div className={styles.div}>
        <h3 className="title md">{title}</h3>
        <p className="body">
          {numberReal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className={styles.divBottom}>
        {category == "in" ? <p className="body">Entrada</p> : <p className="body">Saída</p>}
      
        <button className="btnExclude" onClick={() => removeValue(id)}>
          Excluir
        </button>
      </div>
      </div>
    </li>
  );
};
