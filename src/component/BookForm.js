import React from 'react';

function BookForm() {
  const categories = ['Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const MakeCategory = cat => <option>{cat}</option>;
  return (
    <form>
      <input type="text" id="title" />
      <select value="Action" id="category">
        {categories.map(MakeCategory)}
      </select>
      <button type="submit">Save</button>
    </form>
  );
}

export default BookForm;
