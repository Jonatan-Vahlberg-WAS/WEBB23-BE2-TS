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
