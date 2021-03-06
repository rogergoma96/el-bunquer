import { useState } from "react";
import Link from "next/link";

import CloseIcon from "../../../Icons/CloseIcon";
import MenuIcon from "../../../Icons/MenuIcon";

import styles from "./Menu.module.css";

const Menu = ({ menuItems }) => {
  const [showMenu, setShowMenu] = useState(null);

  if (!menuItems) {
    return null;
  }

  return (
    <>
      <button className={styles.icon} onClick={() => setShowMenu(!showMenu)}>
        <MenuIcon />
      </button>
      <nav
        className={`text-action ${styles.menu} ${
          showMenu ? styles.show : styles.hide
        }`}
      >
        <button className={styles.close} onClick={() => setShowMenu(!showMenu)}>
          <CloseIcon />
        </button>
        <ul className={styles.sections}>
          {menuItems.map((section) => (
            <li key={section.title} className={styles.section}>
              <Link href={section.href}>
                <a
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-title-s"
                >
                  {section.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        role="button"
        onClick={() => setShowMenu(!showMenu)}
        className={`${styles.veil} ${
          showMenu !== null
            ? showMenu
              ? styles.showVeil
              : styles.hideVeil
            : null
        }`}
      />
    </>
  );
};

export default Menu;
