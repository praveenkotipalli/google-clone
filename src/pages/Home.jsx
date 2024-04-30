import React from 'react'
import './Home.css'
import Search from './Search'
function Home({darkTheme,setDarkTheme}) {
    console.log(darkTheme)
    const search=(e)=>{
      e.preventDefault();
      window.location.href = "/search";
    }
  return (
    <div className='home'>
      
        <div className='home__header'>
            <button className={darkTheme?'home_buttonL':"home_buttonD"} type='button' onClick={()=>setDarkTheme(!darkTheme)}>{darkTheme? 'Light💡':"Dark🌙"}</button>
      </div>
      <div className='home__body'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png' alt='google_img'/>
      </div>
      <div className='input__container'>
        <Search darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      </div>
      
    </div>
  )
}

export default Home
