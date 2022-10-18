const { books } = require("../book_dataset");

const resolvers = {
  Query: {
    getBooks() {
      return books;
    },
    getBooksByLimit(_, { limit, offset }) {
      // console.log(limit, offset);
      return books.slice(offset, offset + limit);
    },
    getBookById(_parent, args) {
      return books.filter((item) => item.id == args.id);
    },
    getBooksByGenre(_, { genres }) {
      // console.log(genres);
      return books.filter((item) => item.genres.includes(genres));
    },
  },
  Mutation: {
    addBook(_parent, args) {
      console.log("Args", args.input);
      const newBook = args.input;
      books.push(newBook);

      return newBook;
    },
  },
};

module.exports = { resolvers };
