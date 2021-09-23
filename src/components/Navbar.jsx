import React from "react";
import { useDispatch } from "react-redux";
import { emptyImages } from "../redux/actions/images";

function Navbar({ search, setSearch }) {
  const dispatch = useDispatch();
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h3 className="center text-light m-2">Search Photos</h3>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => {
              dispatch(emptyImages());
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
