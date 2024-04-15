import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Error from "../Error/Error";

const FilteredProducts = () => {
  const { type } = useParams(); 
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);

  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 

  
  const filteredProducts = products.filter((product) => product.type === type);

                                                              
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

                                                                                                                                                      // Calculate the index of the last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
                                                                                                                                                      // Calculate the index of the first product on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
                                                                                                                                                       // Slice the products array to get the products for the current page
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

                                                                                                                                                    // handle going to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

 
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="filtered-products-container">
      <h1 className="text-gray-600 text-4xl font-bold tracking-normal leading-none">
        {type}
      </h1>
      
      {error ? (
        <Error />
      ) : (
        <div>
          <div className="grid grid-cols-3 justify-items-center py-8 gap-10">
            {currentProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                text={product.text}
                img={product.img}
                price={product.price}
                colors={product.color}
              />
            ))}
          </div>


                                                                                                           {/* Pagination controls */}
          <div className="pagination-controls flex justify-center py-4">
            <button
              className="btn-prev mx-2 px-4 py-2 bg-gray-300 text-gray-800 rounded"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="mx-2">Page {currentPage} of {totalPages}</span>
            <button
              className="btn-next mx-2 px-4 py-2 bg-gray-300 text-gray-800 rounded"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
