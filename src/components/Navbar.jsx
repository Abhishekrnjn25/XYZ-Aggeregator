import React, { useState } from 'react';

const Navbar = ({ onSearch, onSortChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('latest');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleCategoryClick = (category) => {
    setSearchQuery(category);
    onSearch(category);
  };

  const handleSortChange = (option) => {
    setSelectedSortOption(option);
    onSortChange(option);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4 p-2">XYZ AGGREGATOR </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className="btn btn-link text-light"
                style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}
                onClick={() => handleCategoryClick('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link text-light"
                style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}
                onClick={() => handleCategoryClick('science')}
              >
                Science
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link text-light"
                style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}
                onClick={() => handleCategoryClick('politics')}
              >
                Politics
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link text-light"
                style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}
                onClick={() => handleCategoryClick('sports')}
              >
                Sports
              </button>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="dropdown" style={{ marginLeft: '12px',marginRight:'12px' }}>
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                id="sortDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selectedSortOption === 'latest' ? 'Latest' : 'Popular'}
              </button>
              <div className="dropdown-menu" aria-labelledby="sortDropdown">
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange('latest')}
                >
                  Latest
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange('popular')}
                >
                  Popular
                </button>
              </div>
            </div>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" onClick={handleSearch}>
              Search
            </button>
            <a
              href="https://github.com/your-username/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-light"
              style={{ textDecoration: 'none', color: '#fff', marginLeft: '12x' }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
