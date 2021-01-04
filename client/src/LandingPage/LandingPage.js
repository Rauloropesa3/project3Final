import React, {useState} from 'react';
import { TopNav } from "./TopNav/TopNav";
import logo from "../assets/Outtaline.png";
import styles from "./LandingPage.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import useReactRouter from "use-react-router";
import { Link } from "react-router-dom";
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';
import { SearchResults } from "../Search/SearchResults/SearchResults";

export function LandingPage() {
  const {location, history} = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);
  const [myAPIdata, setAPIdata] = useState();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    performSearch({term, location});
    // history.push(
    //   `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    // );
  }

  return (
    <div className={styles.landing}>
      <div className={styles["search-area"]}>
        <TopNav />
        <h1 className={styles["logo"]}>Outtaline</h1>
        <SearchBar search={search} setAPIdata={setAPIdata} />
        <SearchResults businesses={myAPIdata}/>
      </div>
    </div>
  );
}
