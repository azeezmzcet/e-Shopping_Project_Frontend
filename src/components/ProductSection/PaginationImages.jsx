import React, { useState } from 'react';

const PaginatedImages = ({ images }) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;


    const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

   
    const totalPages = Math.ceil(images.length / itemsPerPage);

 
    const changePage = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div>
                                                                                                                                                      {/* Render the images for the current page */}
            <div>
                {currentItems.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>

                                                                                                                                                            {/* pagination controls */}
            <div>
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedImages;
