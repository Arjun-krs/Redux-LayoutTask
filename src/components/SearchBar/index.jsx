import React from 'react';
import Input from "../../components/InputField/index";
import SearchIcon from "../../assets/images/search.svg";
import Button from "../Button/index"

function SearchBar({ searchQuery, onChange }) {
    return (
        <div className="search-wrapper mt-4 d-flex" style={{ gap: 20, marginLeft: 800 }}>
            <div className="input">
                <img src={SearchIcon} alt="search-icon" />
                <Input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    value={searchQuery}
                    onChange={onChange}
                />
            </div>
            <Button
                    text="Export CSV"
                    backgroundColor="white"
                    color="#FE7720"
                    border="1px solid #FE7720"
                    width="150px"
                    height="38px"
                    borderRadius="10px"
                />
        </div>
    );
}

export default SearchBar;
