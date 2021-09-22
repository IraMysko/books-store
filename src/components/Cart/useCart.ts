import { useTypedSelector } from "../../hooks/typeSelector";
import { selectGroupCartBooks } from "../../redux/books/selectors";

const useCart = () => {
  const { cart, books } = useTypedSelector(selectGroupCartBooks);

  const isCartEmpty = !cart.length;

  const allSum = cart.reduce((acc, cartItem) => {
    const book = books.find((book) => book.id === cartItem.id);
    const price = book?.price || 0;
    const sum = Math.round(price * cartItem.count);

    return acc + sum;
  }, 0);
  return { isCartEmpty, cart, allSum };
};

export default useCart;
