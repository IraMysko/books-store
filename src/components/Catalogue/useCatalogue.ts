import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/typeSelector";
import { selectGroupCartBooks } from "../../redux/books/selectors";
import { Book } from "../../redux/books/types";
import { addToCart } from "../../redux/cart/actions";
import { setSortType } from "../../redux/filters/actions";
import { selectGroup } from "../../redux/filters/selectors";
import { getSortedBooks } from "./utils";

const useCatalogue = () => {
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
  return {
    cart,
    handleAddBook,
    handleChange,
    isModalVisible,
    handleOk,
    handleCancel,
    visibleBooks,
    makeHandleAddBookToCart,
  };
};

export default useCatalogue;
