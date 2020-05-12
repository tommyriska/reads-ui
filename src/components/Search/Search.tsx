import React, { useState } from 'react';
import styles from './styles.module.css'

type SearchProps = {
    search: Function
}

const Search: React.FC<SearchProps> = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className={styles.search}>
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}

export default Search;