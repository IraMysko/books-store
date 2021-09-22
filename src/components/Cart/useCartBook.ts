import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/typeSelector";
import { selectBook } from "../../redux/books/selectors";
import { removeFromCart, setCartCount } from "../../redux/cart/actions";

interface Input {
  id: number;
  count: number;
}

const useCartBook = ({ id, count }: Input) => {
  const dispatch = useDispatch();

  const book = useTypedSelector((state) => selectBook(state, { id }));

  const makeHandleDeleteBook = (id: number) => () => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseCount = useCallback(() => {
    dispatch(setCartCount(id, count + 1));
  }, [dispatch, id, count]);

  const handleDecreaseCount = useCallback(() => {
    dispatch(setCartCount(id, count - 1));
    if (count <= 1) {
      dispatch(removeFromCart(id));
    }
  }, [dispatch, id, count]);

  return {
    book,
    makeHandleDeleteBook,
    handleDecreaseCount,
    handleIncreaseCount,
  };
};

export default useCartBook;
