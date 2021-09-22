import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/typeSelector";
import { useActions } from "../../hooks/useActions";
import { setCartVisibility } from "../../redux/cart/actions";
import { selectCartGroup } from "../../redux/cart/selectors";

const useHeader = () => {
  const { countCart, isOpen } = useTypedSelector(selectCartGroup);
  const [isSaleOpen, setIsSaleOpen] = useState<boolean>(false);

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

  const showModal = () => {
    setIsSaleOpen(true);
  };

  const handleOk = useCallback(() => {
    setIsSaleOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsSaleOpen(false);
  }, []);

  return {
    handleFindBook,
    showModal,
    isSaleOpen,
    handleOk,
    handleCancel,
    handleOpenCart,
    countCart,
    isOpen,
    handleCloseCart,
  };
};

export default useHeader;
