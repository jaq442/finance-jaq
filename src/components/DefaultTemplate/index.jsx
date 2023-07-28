import { Header } from "../Header/Header";

export const DefaultaTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
