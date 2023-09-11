import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products/";

  const getDefaultCart = () => {
    let cart = {};
    products.forEach((product) => {
      cart[product.id] = 0;
    });
    console.log("cart def", cart);
    return cart;
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itmefound = products.find((product) => product.id === Number(item));
        total += itmefound.price * cartItems[item];
      }
    }
    return total;
  };

  let [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    console.log("cartItems", cartItems);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
  };

  const updateAmount = (amount, id) => {
    setCartItems({ ...cartItems, [id]: amount });
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
    console.log("products in context", products);
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        const updatedCategories = data
          .map((category, i) => ({
            id: i + 1,
            categoryName: category,
            description: "predefined",
            status: products.filter((p) => p.category === category).length,
          }))
          .slice(0, 6);
        setCategories(updatedCategories);
        console.log("categories in context", updatedCategories);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCategories();
    if (products.length > 0) {
      setCartItems(getDefaultCart());
    }
  }, [products]);

  const contextValues = {
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    updateAmount,
    checkout,
    products,
    setProducts,
    categories,
    setCategories,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
