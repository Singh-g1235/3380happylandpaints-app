import React from 'react'

function SearchBar(props) {
    const {keyword,update,search} = props;
   
  return (
      <div className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
    <input 

     value={keyword}
     placeholder={"Enter ProductId"} onChange={update}
     className="form-control"
    /></div><div className="form-group mx-sm-3 mb-2">
    <button className="btn btn-warning text-dark" onClick={search}>Search</button></div>
    </div>
  );
}

export default SearchBar
