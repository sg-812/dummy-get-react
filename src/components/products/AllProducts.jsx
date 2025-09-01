import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { allProdEnd, baseUrl } from '../../api/api_url';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    let api=baseUrl+allProdEnd;
    let [products,setProducts]=useState([])

    let getAllProd=()=>{
        axios.get(api)
        .then(res=>{
            // alert("Product fetched");
            console.log(res.data.products,"Products");
            setProducts(res.data.products)            
        })
        .catch(err=>{
            // alert("Error to fetch")
            console.log("Fetching err",err);            
        })
    }
 
    useEffect(()=>{
        getAllProd()
    },[setProducts])

  if(products.length<1) 
    {
        return (
            <h2>Products Loading...</h2>
        )
    } 
  return (
    <div>
        <h2>View All Products</h2>
        {
            products.map(prod=>(
                <React.Fragment key={prod.id}>
                    <p>{prod.title}</p>
                    <Link to={`details/${prod.id}`} className="btn btn-primary">
                    Details
                    </Link>
                </React.Fragment>
            ))
        }
    </div>
  )
}

export default AllProducts