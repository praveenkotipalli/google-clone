import React, { useState } from 'react'
import "./Search.css"
// import SearchIcon from '@material-ui/icons/Search';
const Search = ({darkTheme,setDarkTheme}) => {
  const [input, setInput] = useState('');

  const search=(e)=>{
    e.preventDefault();
    window.location.href = "/search";
  }
  return (
    <form className='search'>
        <div className={darkTheme?'search__inputL':'search__inputD'}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder='🔎Search....'/> 
        </div>
        <div className='search__buttons'>
            <button type='submit' onClick={search}>
                Google search
            </button>
            <button type='submit'>
                I'm feeling lucky
            </button>
        </div>
    </form>
  )
}

export default Search