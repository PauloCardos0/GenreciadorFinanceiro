import styles from './Header.module.scss';

import useMenu from '../../hooks/useMenu';

const Header = () => {
  const [isVisible, toggleMenuHandler] = useMenu();

  return (
    <>

      <section className={styles.header}>
        <div>
          <h1>Gerenciador Financeiro</h1>
        </div>
      </section>
    </>
  );
};

export default Header;
