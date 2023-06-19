import { useState } from "react";

import "./index.scss";

const SearchDropdown = () => {
  const [items, setItems] = useState([]);
  const debounce = (func, timeout = 300) => {
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
  console.log(items);
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
            <div key={item.id} className="search-item">
              <img src={item.thumbnail} />
              <div>{item.title}</div>
              <div>{}</div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchDropdown;
