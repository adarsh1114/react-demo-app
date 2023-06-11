import React,{useState,useEffect} from 'react';
import "./searchapp.css"
import SuggestionBox from './suggestionBox';
import {AiOutlineSearch} from 'react-icons/ai'


const SearchApp = () => {
  
    const [SearchText,setSearchText] = useState('');
    const [products, setProducts] = useState([]);
    const [searchBox, SetSearchBox] = useState(false);

    useEffect(() => {
      
      fetchProducts();
      
    }, []);
  
    const fetchProducts = async () => {
      if(SearchText!=""){
      await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
      }
    };
  
  
    const handleSearchChange = (e) => {
      
       setSearchText(e.target.value);
    };
    const openSearchBox = (e) => {
      console.log('here')
      document.getElementById('main-container').style.display = 'none'
      SetSearchBox(true)
    }
    const closeSearchBox = (e) => {
      document.getElementById('main-container').style.display = ''
      SetSearchBox(false)
    }
  return (
    
      <div className="center">
        <input type='text' placeholder='search here' value={SearchText} onChange={handleSearchChange} onFocus={openSearchBox} onBlur={closeSearchBox} className='searchinput'/><AiOutlineSearch className='search-icon' />
        {searchBox && (
          <SuggestionBox/>
        )} 
        
        </div>      
    
  );
};

export default SearchApp;
