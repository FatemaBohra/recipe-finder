import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <h4>Three(3) recipes are available - Spaghetti Carbonara, Chicken Curry and Vegetarian Tacos</h4>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search recipes'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;