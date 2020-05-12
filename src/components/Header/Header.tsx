import React from 'react';
import styles from './styles.module.css';

type NavBarProps = {
    name: string
}

const Navbar: React.FC<NavBarProps> = (props) => {

    return (
        <div className={styles.header}>
            <header>
                <h2>{props.name}</h2>
            </header>
        </div>
    );
}

export default Navbar;
