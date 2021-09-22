import { Tooltip } from "antd";

import Cart from "../Cart";
import Sale from "./Sale";
import discountImg from "../../images/tag.svg";
import cartImg from "../../images/9261782281585492958.svg";
import "./header.css";
import useHeader from "./useHeader";

const Header: React.FC = () => {
  const {
    handleFindBook,
    showModal,
    isSaleOpen,
    handleOk,
    handleCancel,
    handleOpenCart,
    countCart,
    isOpen,
    handleCloseCart,
  } = useHeader();

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
