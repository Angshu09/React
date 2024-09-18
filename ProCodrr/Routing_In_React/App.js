import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import SelectMenu from './Components/SelectMenu/SelectMenu'
import CountriesContainer from './Components/CountriesContainer/CountriesContainer'
import "./App.css"

const App = () => {
  const [query, setQuery] = useState('')

  return (
    <>
        <Header />
        <main>
            <div className="search-filter-container">
                <Search setQuery={setQuery}/>
                <SelectMenu />
            </div>
        </main>
       {query === "unmount" ? "" :  <CountriesContainer query={query} />}
    </>
  )
}

export default App