import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Select, Button } from "antd";

import ModalNewBook from "./ModalNewBook";
import { addToCart } from "../../redux/cart/actions";
import { setSortType } from "../../redux/filters/actions";
import { useTypedSelector } from "../../hooks/typeSelector";
import { SortedType } from "../../constants";
import "./catalogue.css";
import { selectGroupCartBooks } from "../../redux/books/selectors";
import { selectGroup } from "../../redux/filters/selectors";
import { Book } from "../../redux/books/types";

const { Option } = Select;

const Catalogue: React.FC = () => {
  const { cart, books } = useTypedSelector(selectGroupCartBooks);
  const { searchText, sortType } = useTypedSelector(selectGroup);

  const dispatch = useDispatch();

  const makeHandleAddBookToCart = (id: number) => () => {
    dispatch(addToCart(id));
  };

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleAddBook = () => {
    setIsModalVisible(true);
  };

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const sortedBooks: Book[] = getSortedBooks(sortType, books);

  const visibleBooks = searchText
    ? sortedBooks.filter(({ author, name }) => {
        return (
          author.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
          name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        );
      })
    : sortedBooks;

  const handleChange = (value: string) => {
    dispatch(setSortType(value));
  };

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

const getSortedBooks = (sortingType: SortedType, books: any) => {
  switch (sortingType) {
    case SortedType.Cheaper: {
      return books.sort((a: any, b: any) => {
        return a.price - b.price;
      });
    }

    case SortedType.Expensive: {
      return books.sort((a: any, b: any) => {
        return b.price - a.price;
      });
    }
    case SortedType.ByName: {
      return books.sort((a: any, b: any) => {
        if (a.author < b.author) return -1;
        if (a.author > b.author) return 1;
        return 0;
      });
    }
    default:
      return books;
  }
};

export default Catalogue;
