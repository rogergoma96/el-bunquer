import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = ({ menuSections }) => (
  <footer className={styles.footer}>
    <ul className={styles.sections}>
      {menuSections.map((section) => (
        <li key={section.title} className={styles.section}>
          {section.links && (
            <div className={styles.subsections}>
              {section.links.map((links) => (
                <Link key={links.title} href={links.href}>
                  <a className={`text-action ${styles.subsection}`}>
                    {links.title}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
