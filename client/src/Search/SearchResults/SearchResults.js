import React from "react";
import { SearchResult } from "./SearchResult/SearchResult";
import styles from "./SearchResults.module.css";
import { Spinner } from "../../Spinner/Spinner.js";
import ScrollArea from 'react-scrollbar';


export function SearchResults(props) {
  let searchResults = <Spinner />;
  if (props.businesses && props.businesses.businesses.length) {
    searchResults = props.businesses.businesses.map((b) => (
      <SearchResult key={b.id} business={b} />
    ));
  }
  console.log(props)

  return (
    <ScrollArea>
      <div className={styles["search-results"]}>{searchResults}</div>;
    </ScrollArea>
  )
}
