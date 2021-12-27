import Link from "next/link";
import { useState } from "react";
import CloseIcon from "../../../Icons/CloseIcon/CloseIcon";

import MenuIcon from "../../../Icons/MenuIcon/MenuIcon";

import styles from "./Menu.module.css";

const Menu = ({ sections }) => {
  const [showMenu, setShowMenu] = useState(null);

  if (!sections) {
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
          {sections.map((section) => (
            <li key={section.title} className={styles.section}>
              <Link href={section.href}>
                <a
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-title-s"
                >
                  {section.title}
                </a>
              </Link>
              {section.links && (
                <div className={styles.subsections}>
                  {section.links.map((links) => (
                    <Link key={links.title} href={links.href}>
                      <a
                        onClick={() => setShowMenu(!showMenu)}
                        className={styles.subsection}
                      >
                        {links.title}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
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
