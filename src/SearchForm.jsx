import React from 'react'
import { useGlobalContext } from './Context';

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchText(searchValue);
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder='panda'
        />
        <button type='submit' className="btn">search</button>
      </form>
    </section>
  )
}

export default SearchForm