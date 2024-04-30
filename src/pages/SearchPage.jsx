import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchPage.module.css'
import axios from 'axios'
import './SearchPage.css'
// import Search from './Search'
function SearchPage({darkTheme,setDarkTheme}) {
  const [input1, setInput1] = useState("");
  const [searchResults, setSearchResults] = useState([]);
//  AIzaSyB6LFL-573I3WVa4ZOd0uiyDcBDCRvgFuE 
  const search1=async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key= AIzaSyC5aMw4AgjZWiPQ-d3e8D8-foXjgoDvngk &cx=6619cb01422b84ff8&q=${input1}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    console.log(searchResults)
    // alert(input1)
  }
  return (
    <div>
    <div className={styles.first} >
      <div className={styles.second}>
        <Link to='/'>
          <h3 className={styles.third} style={{color: darkTheme? "#121212":"",backgroundColor: darkTheme? "gray":""}}>
            Praveen's google 🔎
          </h3>
        </Link>
        <div className={styles.Sfirst}>
        <input value={input1} onChange={e=>setInput1(e.target.value)} placeholder='search' className={styles.Ssecond}/>
        <button className="button" type='submit' onClick={search1}>search</button>
    </div>
        <button className={styles.fourth} type="button" onClick={()=>setDarkTheme(!darkTheme)}>
            {/* <img src='' alt="theme"/> */}
            {darkTheme? 'Dark 🌙': 'Light 💡'}
        </button>
      </div>
      <br></br>
      <div className="down">
      <div className="option1">
        <Link to='/all'>All</Link>
      </div>
      <div className="option">
      <Link to='/news'>News</Link>
      </div>
      <div className="option">
      <Link to='/images'>Images</Link>
      </div>
      <div className="option">
      <Link to='/videos'>Videos</Link>
      </div>
      </div>
      </div>
    
      <div className='searchPage__results'>
        <p className='searchPage__resultCount'>
        About 5,92,00,00,000 results (0.25 seconds) 
        </p>
        
        {searchResults.map((result, index) => (
      <div className='searchPage__result' key={index}>
        <a href={result.link} className='searchPage__resultLink'>
          <img src={result.pagemap?.cse_image?.[0]?.src} className='searchPage__resultImage' alt='result' />
          {result.title}
        </a>
        <p className='searchPage__resultDescription'>{result.snippet}</p>
      </div>
    ))}
        {/* <div className='searchPage__result'>
          <a href='' className='searchPage__resultLink'>
            <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' className='searchPage__resultImage'/>
            github.com
          </a>
          <a href='' className='searchPage__resultTitle'>
            <h3>Praveen Inc</h3>
          </a>
          <p className='searchPage__resultDescription'>praveen kumar kotipalli · Student at KL University · View mutual connections with praveen · Welcome back · About · Activity · Education · More activity by praveen.</p>
        </div> */}
      </div>
    </div>
  )
}

export default SearchPage
