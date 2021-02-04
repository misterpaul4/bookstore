import React from 'react';
import categories from '../resources/categories';

function CategoryFilter() {
  const handleChange = e => {
    console.log(e);
  };

  const MakeCategory = cat => <option>{cat}</option>;

  console.log(categories);
  return (
    <form>
      <select value="Biography" id="categoryFilter" onChange={e => { handleChange(e); }}>
        {categories.map(MakeCategory)}
      </select>
    </form>
  );
}

export default CategoryFilter;
