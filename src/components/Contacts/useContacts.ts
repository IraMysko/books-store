import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/typeSelector";
import { getMembersThunkCreator } from "../../redux/members/operations";
import { selectMembers } from "../../redux/members/selectors";

type MembersType = {
  name: string;
  email: string;
  city: string;
  phone: string;
};

const useContacts = () => {
  const members = useTypedSelector(selectMembers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersThunkCreator());
  }, [dispatch]);

  const getVisibilityMembers = (members: MembersType[]) => {
    const copiedMembers = [...members];
    copiedMembers.length = 5;

    return copiedMembers;
  };

  const visibilityMembers = getVisibilityMembers(members);

  return { visibilityMembers };
};

export default useContacts;
