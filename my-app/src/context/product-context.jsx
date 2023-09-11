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
            //console.log("prod in getcat", products);
            //let tmp = [];
            for (let i = 0; i < data.length; i++) {
              let c = {
                categoryName: data[i],
                description: "predefined",
                status: "0",
                // products.filter((p) => p.category === data[i]).length,
            };
            categories.push(c);
            }
            //console.log("tmp", tmp);
            setCategories(categories);
            console.log("cats", categories);
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