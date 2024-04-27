import React from 'react';
import "../AddProduct/addProduct.css";
import Topbar from '../dashComponent/Topbar/Topbar';
import Sidebar from '../dashComponent/Sidebar/Sidebar';
import  { useState } from 'react';

function AddProduct() {
    const [productData, setProductData] = useState({
        name: '',
        type: '',
        price: '',
        description: '',
        size: '',
      });

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
      };

  return (

    <div>
      <div className="dashcontent">
      <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm"  >
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file"  name="file" />
              </div>
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="enter name" name="name" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Type</label>
                <input type="text" placeholder="enter type" name="type" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input type="text" placeholder="enter price" name="price" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Describtion</label>
                <input type="text" placeholder="enter description" name="description" onChange={handleChange} />
              </div>
              <div className="addProductItem">
                <label>Size</label>
                <input type="text" placeholder="enter size" name="size" onChange={handleChange} />
              </div>

              <button type="submit" className="addProductButton">Create</button>
            </form>
          </div>
        </div>
      </div>

  )
}

export default AddProduct