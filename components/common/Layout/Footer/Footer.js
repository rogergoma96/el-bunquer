import Link from "next/link";

import InstagramIcon from "../../Icons/InstagramIcon";
import TwitterIcon from "../../Icons/TwitterIcon";
import FacebookIcon from "../../Icons/FacebookIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

import styles from "./Footer.module.css";

const socialMedias = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/elbunquercatradio/",
    icon: <InstagramIcon />,
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com/channel/UCfwf5LTzLq88guMvu3VkaUQ",
    icon: <YoutubeIcon />,
  },
  {
    label: "Facebook",
    link: "https://es-es.facebook.com/catradio",
    icon: <FacebookIcon />,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/catalunyaradio",
    icon: <TwitterIcon />,
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <p className="text-caption">
      © Desanvolupat per
      <a href="https://github.com/rogergoma96"> @rogergoma96</a>
    </p>
    <ul className={styles.socialMedias}>
      {socialMedias.map((socialMedia) => (
        <li key={socialMedia.label} className={styles.socialMedia}>
          <Link key={socialMedia.label} href={socialMedia.link}>
            <a>{socialMedia.icon}</a>
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
