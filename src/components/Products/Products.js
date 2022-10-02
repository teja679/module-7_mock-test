import React, {useEffect, useState} from 'react'
import './Products.css'
import axios from 'axios'


const Products = ({addToCart}) => {
  // const productItems = [
  //   {
  //     "id": 1,
  //     "new-price": 47999,
  //     "old-price": 65999,
  //     "product-image": "https://m.media-amazon.com/images/I/417PwBC+iEL._SX342_SY445_.jpg",
  //     "product-name": "Apple iPhone 12 (64GB) - (Product) RED"
  //   },
  //   {
  //     "id": 2,
  //     "new-price": 109900,
  //     "old-price": 129900,
  //     "product-image": "https://m.media-amazon.com/images/I/617FFRO3vcL._SX679_.jpg",
  //     "product-name": "Apple iPhone 13 Pro (256GB) - Silver"
  //   },
  //   {
  //     "id": 3,
  //     "new-price": 2990,
  //     "old-price": 3190,
  //     "product-image": "https://m.media-amazon.com/images/I/71L5lSfJIPS._SX679_.jpg",
  //     "product-name": "New Apple AirTag"
  //   }
  // ]
    var [values, setValue] = useState([])
    useEffect(()=> {
    const fetchProducts  =  async () => {
      // const res = await fetch('https://fakestoreapi.com/products')  
      try{
        const res = await axios.get('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json') 
        const data = await res.data
        // console.log(data)
        setValue(Object.values(data))
        console.log(values[0].productName)
        // values.map(value => console.log(value))
      }
      catch(err){
        console.log(err)
      }
  }  
  fetchProducts()
},[])
  // fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
  // .then(res => res.json())
  // .then(data => {
  //   const keys = Object.keys(data)
  //   productItems = data
  // })
  // const keys = Object.keys(productItems)
  // console.log(productItems[keys[0]])
      // console.log(values[2])
  return (
    // <div>
    //   <h1>Hello</h1>
    //   <h1>{values[0].productName}</h1>
    //   {/* <h1>{values['0']['product-name']}</h1> */}
    // </div>
    // <h1>Hello</h1>
    <div className='main-container'>
      <h1 className='products-header'>Products</h1>
      <div className='products-container'>
        <div className='products-row'>
        {values.map((productItem) => (
          <div key={productItem.id} className='card'>
            <img width="100%" src={productItem.productImage} alt="logoImage" />
            <div className='container'>
              <h4>{productItem.productName.length > 40 ? productItem.productName.slice(0,38) + '...' : productItem.productName}</h4>
              <div className='product-data'>
                <div className='ratings'>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                  </svg>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                  </svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                  </svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                  </svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B" />
                  </svg>
                </div>
                <div className='price'>
                  <h3><span>{productItem.oldPrice}</span>/-</h3>
                  <h2><span>{productItem.newPrice}</span>/-</h2>
                </div>
              </div>
              <button onClick={()=>addToCart(productItem.id)}>ADD TO CART</button>
            </div>
          </div>
          //  <h1>{productItem["id"]}</h1>
        ))}
        </div>
      </div>
     </div>
  )
}

export default Products

/*<div class="card" key={productItem['id']}>
        <img src={productItem['product-image']} alt="Avatar" style="width:100%" />
          <div class="container">
            <h4><b>{productItem['product-name']}</b></h4>
            <p>{productItem['old-price']} {productItem['new-price']}</p>
          </div>
      </div>*/

          // var keys = []
    // var data
//   useEffect(() => {
//   const getPosts = async () => {
//     try {
//       // // let res  = await axios.get('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
//       // // console.log(Object.values(res.data))
//       // // const keys = Object.keys(Object.values(res.data))
//       // // console.log(res.data[keys])
//       // // console.log(res.data[keys])
//       // // const keys = Object.keys(Object.values(res.data))
//       // // console.log(productItems(keys[0]))
//       // data = await res.data
//       // keys = Object.keys(data)
//       // // console.log(data[keys[0]])
//       // for(let i=0; i<keys.length; i++){
//       //   productItems[i] = data[keys[i]]
//       // }
//       //   // console.log(productItems[2])
//       //   console.log(data[keys[0]].productName)
    
//       // // console.log(data["-NDEoHcGCp88kdn4dixa"].newPrice)
//       // // console.log(data["-NDEoHcGCp88kdn4dixa"].oldPrice)
//       // // console.log(data["-NDEoHcGCp88kdn4dixa"].productName)

      

//     } catch (err) {
//       console.log(err)
//     }
//   }
//   getPosts()
// }, [])