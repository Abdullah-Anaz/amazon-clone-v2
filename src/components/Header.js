import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;