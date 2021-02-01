import React from 'react'



function BookForm() {
    const categories = ["Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi" ];
    MakeCategory = cat => {
        return <option>{cat}</option>;
    };
    return (
        <form>
            <input type='text' id="title"></input>
            <select value={optionsState} id="category">
              {categories.map(MakeCategory)}
            </select>
            <button>Save</button>
        </form>
    )
}

export default BookForm
