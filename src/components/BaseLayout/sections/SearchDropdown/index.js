import { useState } from "react";

import "./index.scss";

const SearchDropdown = () => {
  const [items, setItems] = useState([]);
  const debounce = (func, timeout = 600) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const searchItem = (value) => {
    if (!value || value.length < 3) {
      setItems([]);
    } else {
      fetch(`https://dummyjson.com/products/search?q=${value}&limit=5`)
        .then((res) => res.json())
        .then((data) => setItems(data?.products));
    }
  };

  const debounceSearch = debounce(({ target }) => searchItem(target.value));
  return (
    <>
      <input
        placeholder="Search Product..."
        className="search-input"
        onKeyUp={debounceSearch}
      />
      <div className="search-results">
        {items.length ? (
          items?.map((item) => (
            <a
              href={`${item.category}/${item.id}`}
              key={item.id}
              className="search-item"
            >
              <div className="search-item-section">
                <img src={item.thumbnail} alt={item.title}/>
                <div>{item.title}</div>
              </div>
            </a>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchDropdown;
