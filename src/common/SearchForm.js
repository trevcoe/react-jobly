import React, { useState } from "react";
import "./SearchForm.css";

// Search Widget

function SearchForm({ searchFor }) {
    console.debug("SearchForm", "searchFor=", typeof searchFor);

    const [searchTerm, setSearchTerm]=useState("");
    // tell parent to filter
    function handleSubmit(e){
        e.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }
    // update form fields
    function handleChange(e){
        setSearchTerm(e.target.value);
    }

    return (
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control form-control-lg flex-grow-1"
                    name = "searchTerm"
                    placeholder="Enter search term..."
                    value={searchTerm}
                    onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-lg btn-primary">
                    Submit</button>
            </form>
        </div>
    );

}
export default SearchForm;