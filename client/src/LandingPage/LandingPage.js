import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/Outtaline.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router';
import {Link} from 'react-router-dom';

export function LandingPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <TopNav />
        <Link><img src={logo} className={styles.logo} alt="logo" /></Link>
        <SearchBar search={search} />
      </div>
    </div>
  );
}
