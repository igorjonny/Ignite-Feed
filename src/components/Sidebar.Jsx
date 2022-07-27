import { PencilLine } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* wallpaper */}
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1636566037915-6523c05c396f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />
      {/* perfil */}
      <div className={styles.profile}>
        <Avatar src="https://github.com/maykbrito.png" />

        <strong>Igor Jonny</strong>
        <span>Web Developer</span>
      </div>
      {/* button */}
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
