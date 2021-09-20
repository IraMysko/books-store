import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "antd";

import Cart from "../Cart";
import Sale from "./Sale";
import { setCartVisibility } from "../../redux/cart/actions";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/typeSelector";
import discountImg from "../../images/tag.svg";
import cartImg from "../../images/9261782281585492958.svg";
import "./header.css";
import { selectCartGroup } from "../../redux/cart/selectors";

const Header: React.FC = () => {
  const { countCart, isOpen } = useTypedSelector(selectCartGroup);

  const dispatch = useDispatch();
  const { setSearchText } = useActions();

  const handleFindBook = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleOpenCart = useCallback(() => {
    dispatch(setCartVisibility(true));
  }, [dispatch]);

  const handleCloseCart = useCallback(() => {
    dispatch(setCartVisibility(false));
  }, [dispatch]);

  const [isSaleOpen, setIsSaleOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsSaleOpen(true);
  };

  const handleOk = useCallback(() => {
    setIsSaleOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsSaleOpen(false);
  }, []);

  return (
    <div className="header-container">
      <div className="header-search-box">
        <div>
          <h3 className="header-title">Books Store</h3>
        </div>

        <div>
          <input
            onChange={handleFindBook}
            className="header-input"
            type="text"
          />
          <span className="header-button">Find</span>
        </div>
        <div>
          <Tooltip placement="left" title="Discount">
            <img
              onClick={showModal}
              className="header-img-discount"
              src={discountImg}
              alt=""
            />
          </Tooltip>
          <Sale visible={isSaleOpen} onOk={handleOk} onCancel={handleCancel} />

          <img
            onClick={handleOpenCart}
            className="header-img-cart"
            src={cartImg}
            alt=""
          />
          {countCart && <span className="header-count">{countCart}</span>}

          <Cart
            visible={isOpen}
            onOk={handleCloseCart}
            onCancel={handleCloseCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
