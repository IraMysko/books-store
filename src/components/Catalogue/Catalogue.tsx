import { Select, Button } from "antd";
import ModalNewBook from "./ModalNewBook";
import "./catalogue.css";
import useCatalogue from "./useCatalogue";

const { Option } = Select;

const Catalogue: React.FC = () => {
  const {
    cart,
    handleAddBook,
    handleChange,
    isModalVisible,
    handleOk,
    handleCancel,
    visibleBooks,
    makeHandleAddBookToCart,
  } = useCatalogue();

  return (
    <div className="catalogue-container">
      <div className="catalogue-btn">
        <Button className="btn-add" onClick={handleAddBook} block>
          add
        </Button>
        <Select
          className="btn-sort"
          defaultValue="sort"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="cheaper">cheaper</Option>
          <Option value="expensive">expensive</Option>
          <Option value="byname">by name</Option>
        </Select>
      </div>

      <ModalNewBook
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />

      <div className="catalogue-books">
        {visibleBooks.length ? (
          visibleBooks.map(({ id, author, name, price, imgUrl }: any) => {
            const isDisabled = cart.includes(id);

            return (
              <div key={id} className="book">
                <img className="book-img" src={imgUrl} alt="" />
                <div>{author}</div>
                <div>{name}</div>
                <div>{price} $</div>
                <button
                  disabled={isDisabled}
                  onClick={makeHandleAddBookToCart(id)}
                  className="book-buy"
                >
                  {isDisabled ? "In Cart" : "Buy"}
                </button>
              </div>
            );
          })
        ) : (
          <div>do not find</div>
        )}
      </div>
    </div>
  );
};

export default Catalogue;
