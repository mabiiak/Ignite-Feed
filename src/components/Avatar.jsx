import PropTypes from "prop-types";
import styles from './avatar.module.css';

export function Avatar({ hasBorder = true, src}) {
  return (<img src={src} alt="" className={hasBorder ? styles.avatarWithBorder : styles.avatar} />)
}

Avatar.propTypes = {
  hasBorder: PropTypes.bool,
  src: PropTypes.string.isRequired,
}