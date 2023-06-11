
import './App.css';
import  Maincontent  from './component/Maincontent';
import SearchApp from './component/SearchApp';
import Sidebar from './component/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProdcts] = useState([]);
  const [filterStatus, SetFilterStatus]  = useState(false)
  const [filterCategoryValue, setFilterCategoryValue] = useState([]);

    useEffect(() => {
       fetchProducts();
      }, []);

    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    };
    const categoryArr = products.map((product) => {
        return product.category
    });
    const categories = categoryArr.filter((item,
        index) => categoryArr.indexOf(item) === index);
        
  const filterCategory = (event) => {
    if (event.target.checked) {
      filterCategoryValue.push(event.target.value)
    } else {
      const index = filterCategoryValue.indexOf(event.target.value)
      if (index !== -1) {
        filterCategoryValue.splice(index, 1);
      }
    }
    
    const filterProducts = products.filter((product)=> {
      if(filterCategoryValue.includes(product.category)) {
        return product;
      }
    })
    console.log(filterProducts, filterCategoryValue)
    if (filterCategoryValue.length == 0) {
       SetFilterStatus(false)
    } else {
      SetFilterStatus(true)
      setFilterProdcts(filterProducts)
    }
  }

  return (
    <div className=''>
      <SearchApp />
      <div className='row' id='main-container'>
        <div className='col-md-3'>
          <Sidebar categories={categories} filterCategory={filterCategory}/>

        </div>
        <div className='col-md-9'>
          {filterStatus === true ? <Maincontent products={filterProducts}/> : <Maincontent products={products}/> }
         
        </div>
      </div>
    </div>
  );
}

export default App;
