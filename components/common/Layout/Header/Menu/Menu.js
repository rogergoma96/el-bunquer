import Link from "next/link";
import { isMobile } from "react-device-detect";

import styles from "./Menu.module.css";

const Menu = ({ sections }) => {
  if (!sections) {
    return null;
  }

  if (isMobile) {
    return null;
  }

  return (
    <nav className={`text-action ${styles.menu}`}>
      <ul className={styles.sections}>
        {sections.map((section) => (
          <li key={section.title} className={styles.section}>
            <Link href={section.href}>{section.title}</Link>
            {section.links && (
              <div className={styles.subsections}>
                {section.links.map((links) => (
                  <Link key={links.title} href={links.href}>
                    <a className={styles.subsection}>{links.title}</a>
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
