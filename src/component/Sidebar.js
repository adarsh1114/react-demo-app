import React from 'react'
import "./sidebar.css";

function Sidebar({categories, filterCategory}) {
  return (
    <div className='search-result'>
      <h3>Search Results</h3>
      <div>
      
      <label for = "Category" className='category'> Category</label>
      {categories.map((category)=>{
        return <div><input type="checkbox" name='category' key={category} onChange={filterCategory} value={category}/>{category}</div>
      })}
      </div>
      <div>
      {/* <input type="checkbox" id="price" name="price" value="product"/>
      <label htmlFor = "Category" className='category'>Price</label> */}
      </div>
       <h4 className='rating'>Rating</h4>
     <input type="radio" id="star" name="star" value="5"/>
      <span className=" checked">*****</span><br></br>
      <input type="radio" id="star" name="star" value="4"/>
      <span className=" checked">****</span><span>*</span><br></br>
      <input type="radio" id="star" name="star" value="3"/>
      <span className=" checked">***</span><span>**</span><br></br>
      <input type="radio" id="star" name="star" value="2"/>
      <span className="checked">**</span><span>***</span><br></br>
      <input type="radio" id="star" name="star" value="1"/>
      <span className="checked">*</span><span>****</span>
    </div>
  )
}

export default Sidebar
