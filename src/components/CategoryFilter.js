import React, { useState } from "react";

function CategoryFilter({categories, categoriesFilter}) {
  //
const [buttonClicked, setButtonClicked] = useState('')

//
function handleClick(e){
  categoriesFilter(e)
  setButtonClicked(e.target.value)
}
//
const className = buttonClicked === Category ? "selected" : "";

//
 const displayButton = categories.map((Category ,index) => {
 return  <button className={className} key={index} value={Category}onClick={handleClick}>{Category}</button> }) 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayButton}
    </div>
  );
}

export default CategoryFilter;
