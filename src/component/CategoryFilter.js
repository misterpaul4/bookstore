/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
// import { connect } from 'react-redux';
import categories from '../resources/categories';

function CategoryFilter(props) {
  const handleChange = e => {
    props.updateFilter(e.target.value);
    // console.log('initial filter', filter);
  };

  const MakeCategory = cat => <option>{cat}</option>;

  // console.log(categories);
  return (
    <form>
      <select id="categoryFilter" onChange={e => { handleChange(e); }}>
        {categories.map(MakeCategory)}
      </select>
    </form>
  );
}

// const mapStateToProps = state => ({
//   filter: state.filter,
// });

// export default connect(mapStateToProps)(CategoryFilter);
export default CategoryFilter;
