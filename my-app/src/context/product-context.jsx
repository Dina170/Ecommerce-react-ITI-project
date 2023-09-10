import { createContext, useState ,useEffect} from "react";





export const ProductContext = createContext()


export function ProductContextProvider(props){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const api_url ="https://fakestoreapi.com/products";


    const getProducts = () => {
    fetch(api_url)
        .then((res) => res.json())
        .then((data) => setProducts(data));
        console.log("products in context", products);
    };

    const getCategories = () => {
      fetch(`${api_url}/categories`)
        .then((res) => res.json())
        .then((data) => {
          const updatedCategories = data.map((category) => ({
            categoryName: category,
            description: "predefined",
            status: "0",
          }));
          setCategories(updatedCategories);
          console.log("categories in context", updatedCategories);
        });
    };
  
    useEffect(() => {
        getProducts();
        getCategories();
      }, []); 

      const contextValues = {
        
        products,
        setProducts,
        categories,
        setCategories,
      };
    
      return (
        <ProductContext.Provider value={contextValues}>
          {props.children}
        </ProductContext.Provider>
      );
    

   
} 