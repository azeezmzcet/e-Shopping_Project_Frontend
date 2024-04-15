import React from "react";
import { Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts } from "../../features/slices/productsSlice";
import clothes from "../../assets/images/clothes.jpg";

const NavigateButtons = ({ displayMode = "allButtons" }) => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "Shirt",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
    "jwelleries",
    "perfumes",
    "Caps",
    "sunglasses",
    "watches",
  ];

  const dispatch = useDispatch();

  const handleFilterClick = (category) => {
    dispatch(filterProducts(category));
  };

  if (displayMode === "allButtons") {
    
    return (
      <div className="flex items-center justify-center py-8 space-x-2 ">
        {buttons.map((button, index) => (
          <div key={index} className="mr-4">
            <Link to={`/filteredProducts/${button}`}>
              <Button
                color="gray"
                size="md"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-red-500 duration-300 ease-in-out "
                onClick={() => handleFilterClick(button)}
              >
                {button}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    );
  } else if (displayMode === "categoriesDropdown") {
    
    return (
      <Menu>
        <MenuHandler>
          <Button
            color="gray"
            size="lg"
            variant="outlined"
            ripple={true}
            className="text-black hover:bg-gray-300 duration-300 ease-in-out"
          >
            Search Categories
          </Button>
        </MenuHandler>
        <MenuList>
          {buttons.map((button, index) => (
            <MenuItem key={index} onClick={() => handleFilterClick(button)}>
              <Link to={`/filteredProducts/${button}`}>
                {button}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return null;
};

<div>
   
   <img src={clothes} alt="Clothes" className="your-image-class" />
    
</div>

export default NavigateButtons;
