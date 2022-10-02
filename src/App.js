import './App.css';
import NavbarComp from './components/Navbar/NavbarComp';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  let [cartItemIds, setCartItemIds] = useState([])

    const addToCart = (id) =>  {
      if(!cartItemIds.includes(id))
      setCartItemIds([...cartItemIds, id])
      // setCartItemIds(cartItemIds.filter(itemId => itemId !== id))
  }   
  const [userEmail, setUserEmail] = useState('')

  const handleEmailChange = (e) => {
    console.log(e.target.value)
    setUserEmail(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://acciojob-project-default-rtdb.asia-southeast1.firebasedatabase.app/message.json',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userEmail: userEmail,
        })
      }
    )
  }
  return (
    <div className="App">
     <NavbarComp 
      cartItemIds={cartItemIds}
     />
      
     <Header />
     <Products
      addToCart={addToCart} 
      />
      
     <Footer handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} />
    </div>
    // <BrowserRouter>
		// 	<NavbarComp cartItemIds={cartItemIds} />
    //   {/* <Header />
    //   <Products
    //   addToCart={addToCart} 
    //   />
    //  <Footer handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} /> */}
    
		// 	<Routes>
		// 		<Route path="/home" element={<Header />} />
		// 		<Route path="/shop" element={<Products addToCart={addToCart} />} />
    //     <Route path="/about" element={<Footer handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} />} />
		// 	</Routes>
		// </BrowserRouter>
  );
}

export default App;
/*<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<NewsList newsList={newsList} />} />
  <Route path="/news/:id" element={<SingleNews newsList={newsList} />} />
  <Route path="/news/about" element={<About />} />
  <Route path="/news/contact" element={<Contact />} />
</Routes>
<NewsList />
</BrowserRouter>*/