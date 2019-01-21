import axios from "axios";

export default {
  // Gets all parts
  getParts: function() {
    return axios.get("/api/parts");
  },
  // Gets parts with the given id
  getParts: function(id) {
    return axios.get("/api/parts/" + id);
  },
  // // Deletes parts with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves parts to the database
  saveParts: function(partData) {
    return axios.post("/api/parts", partData);
  }
};
