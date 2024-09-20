export type Model = {
    id: string;
}

export type Author = {
  firstName: string;
  lastName: string;
  yearOfBirth: number;
};

export type Book = {
  title: string;
  description: string;
  rating: number;
  author: Author;
  ISBN?: string;
};

export type ComicBook = Book & {
    ilustrator: string;
    inColor: boolean;
}

export type Work = Book | ComicBook
