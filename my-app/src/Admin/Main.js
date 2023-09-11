import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./assets/css/admin.css";
import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
import ListCategory from "./ListCategory";
import AddCategories from "./AddCategories";
import Overview from "./overview";
import { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

function MainLayout() {
  let _navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);
  const { categories, setCategories } = useContext(ProductContext);
  const [isProdEdit, setIsProdEdit] = useState(false);
  const [isCatEdit, setIsCatEdit] = useState(false);

  const saveProdHandler = (_newObject) => {
    let editProduct = products.find((p) => p.id == _newObject.id);
    console.log("is edit", editProduct);
    if (editProduct) {
      console.log("editing");
      setIsProdEdit(true);
      editProduct.title = _newObject.title;
      editProduct.price = _newObject.price;
      editProduct.description = _newObject.description;
      editProduct.category = _newObject.category;
      editProduct.image = _newObject.image;
    } else {
      console.log("adding");
      products.push(_newObject);
      setIsProdEdit(false);
    }
    setProducts(products);
    _navigate("/Dashboard/ListProducts");
  };

  const deleteProdHandler = (_index) => {
    if (window.confirm("Are You Sure?")) {
      let deletedProductCat = categories.find(
        (c) => c.categoryName === products[_index].category
      );
      products.splice(_index, 1);
      //console.log("prod after delete", products);
      setProducts(products);
      const updatedCategories = categories.map((category) => {
        if (category.categoryName === deletedProductCat.categoryName) {
          return {
            ...category,
            status: category.status - 1,
          };
        }
        return category;
      });

      setCategories(updatedCategories);
      console.log("cats now", categories);
      _navigate("/Dashboard/ListProducts");
    }
  };

  const saveCatHandler = (_newObject) => {
    let editCategory = categories.find((c) => c.id == _newObject.id);
    console.log("is edit", editCategory);
    if (editCategory) {
      console.log("editing");
      setIsCatEdit(true);
      editCategory.categoryName = _newObject.categoryName;
      editCategory.status = _newObject.status;
      editCategory.description = _newObject.description;
    } else {
      console.log("adding");
      categories.push(_newObject);
      setIsCatEdit(false);
    }
    setCategories(categories);
    _navigate("/Dashboard/ListCategories");
  };

  const deleteCatHandler = (_index) => {
    if (window.confirm("Are You Sure?")) {
      if (
        !products.find((p) => p.category === categories[_index].categoryName)
      ) {
        categories.splice(_index, 1);
        //console.log("prod after delete", products);
        setCategories(categories);
      } else {
        alert("Can not delete this category!");
      }
      _navigate("/Dashboard/ListCategories");
    }
  };

  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-colomn">
          <Sidebar />
          <div id="content">
            <main>
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route
                  path="/AddProduct"
                  element={
                    <AddProduct
                      SaveHanlderRef={saveProdHandler}
                      isEdit={isProdEdit}
                    />
                  }
                />
                <Route
                  path="/ListProducts"
                  element={
                    <ListProducts
                      products={products}
                      DeleteHanlderRef={deleteProdHandler}
                    />
                  }
                />
                <Route
                  path="/AddCategory"
                  element={
                    <AddCategories
                      SaveHanlderRef={saveCatHandler}
                      isEdit={isCatEdit}
                    />
                  }
                />
                <Route
                  path="/ListCategories"
                  element={
                    <ListCategory
                      Categories={categories}
                      DeleteHanlderRef={deleteCatHandler}
                    />
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
