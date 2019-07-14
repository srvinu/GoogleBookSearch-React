import axios from "axios";

const apiKey = "AIzaSyBbQagiDTkD8IJvVCyjYZy0JXNphEztxqc";

export default {
  getGoogleSearchBooks: function(term) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?`, {
      params: {
        key: apiKey,
        q: term,
        maxResults: 10
      }
    });
  },
  // Gets all books
  getBooks: function() {
    console.log("get Books Triggered");
    return axios.get("/api/books");
  },

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function(savedBooks) {
    console.log("saveBook Triggered");
    return axios.post("/api/books", savedBooks);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
