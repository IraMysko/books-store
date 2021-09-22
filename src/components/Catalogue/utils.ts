import { SortedType } from "../../constants";
import { Book } from "../../redux/books/types";

export const getSortedBooks = (sortingType: SortedType, books: Book[]) => {
  switch (sortingType) {
    case SortedType.Cheaper: {
      return books.sort((a: Book, b: Book) => {
        return a.price - b.price;
      });
    }

    case SortedType.Expensive: {
      return books.sort((a: Book, b: Book) => {
        return b.price - a.price;
      });
    }
    case SortedType.ByName: {
      return books.sort((a: Book, b: Book) => {
        if (a.author < b.author) return -1;
        if (a.author > b.author) return 1;
        return 0;
      });
    }
    default:
      return books;
  }
};
