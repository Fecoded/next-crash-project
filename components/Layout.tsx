import { Nav } from "./Nav";
import styles from "../styles/Layout.module.css";
import { Header } from "./Header";
import Meta from "./Meta";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
