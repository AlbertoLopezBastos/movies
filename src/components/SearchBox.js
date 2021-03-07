import React from 'react';

class SearchBox extends React.Component {
  onClick = () => {
    let searchValue = document.getElementById('searchMovie').value;
    this.props.handleSearch(searchValue);
  }

  render(){
    return (
      <div className="searchBox">
        <input className="searchBox__input" placeholder="Search Movie" type="search" name="searchMovie" id="searchMovie"/>
        <button className="searchBox__btn" onClick={()=> {this.onClick()}}>Search</button>
      </div>
    );
  }
}

export default SearchBox;