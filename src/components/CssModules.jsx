import styles from './CssModules.module.scss';

const CssModule = () => {
  return (
    <div className={styles.containerStyle}>
      <p className={styles.titleStyle}>-- CssModule --</p>
      <button className={styles.buttonStyle}>Fly!</button>
    </div>
  );
};

export default CssModule;
