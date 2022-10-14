const { books } = require("../book_dataset");

const resolvers = {
  Query: {
    getBooks() {
      return books;
    },
  },
  Mutation: {
    addBook(_parent, args) {
      console.log("Args", args);
      const newBook = args;
      books.push(newBook);

      return newBook;
    },
  },
};

module.exports = { resolvers };
