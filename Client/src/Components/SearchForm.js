import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a Book to Search:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookinput" form="bookSearch" onChange={(save) => props.handleChange(save)} placeholder="Book Title" required />
                <br></br>
                <button type="submit" onClick={(save) => props.handleSearchClick(save)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;