import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/SideBar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Hello Post</h1>
          <h1>Hello Post</h1>
          <h1>Hello Post</h1>
          <h1>Hello Post</h1>
        </main>
      </div>
    </>
  );
}
