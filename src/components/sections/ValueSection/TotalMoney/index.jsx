import { Value } from "./Value";
import styles from "./styles.module.scss";

export const TotalMoney = ({ valueList }) => {
  return (
    <>
      <div className="container">
        {valueList.length > 0 ? (
          <div className={styles.containerSm}>
            <div className={styles.title}>
              <h3 className="title md">Valor total:</h3>
              <Value valueList={valueList} />
            </div>
            <p className="body">O valor se refere ao saldo</p>
          </div>
        ) : (
          <div className={styles.containerSm}>
            <div className={styles.noMoney}>
              <h3 className="title md">Resumo Financeiro</h3>
              <p className="title bg">Você ainda não possui nenhum lançamento</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
