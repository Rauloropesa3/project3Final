import React, {useState} from 'react';
import styles from './SearchBar.module.css';


export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    // const [myAPIdata, setAPIdata] = useState();
    

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        
        e.preventDefault();
  
        fetch('/r/dynamic', {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({term,location})
        })
            .then((e)=>e.json())
            .then(data=>{
                console.log(data)
                props.setAPIdata(data);
            })
        
    }

    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>Search</button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        value={term}
                        placeholder="Stores"
                    />
                </p>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>NEAR</div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        value={location}
                        placeholder="Where"/>
                </p>
                <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span>
                </div>
            </div>
        </form>
    );
}