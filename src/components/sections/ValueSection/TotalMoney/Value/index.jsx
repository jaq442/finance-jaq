export const Value = ({ valueList }) => {
  const totalChar = valueList.reduce(
    (prevValue, value) =>
      value.category === "in"
        ? Number(prevValue) + Number(value.number)
        : Number(prevValue) - Number(value.number),
    0
  );

  console.log(totalChar);

  return (
    <p className="title md pink">
      {totalChar.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </p>
  );
};
