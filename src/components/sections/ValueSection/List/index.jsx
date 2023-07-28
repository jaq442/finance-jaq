import { ListItem } from "./ListItem";
import styles from "./styles.module.scss";

export const List = ({ valueList, removeValue, valueCategory }) => {
  return (
    <div className={styles.list}>
      <h3 className={`${styles.titleFinance} title md`}>Resumo financeiro</h3>
      {valueList.length === 0 ? (
        <p className={`${styles.parag} title bg`}>
          Você ainda não possui nenhum lançamento
        </p>
      ) : (
        <ul>
          {valueList.map((value) => (
            <ListItem
              key={value.id}
              id={value.id}
              category={value.category}
              title={value.title}
              number={value.number}
              removeValue={removeValue} 
              valueCategory={valueCategory}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
