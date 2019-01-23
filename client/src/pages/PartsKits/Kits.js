import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/index";
import DeleteBtn from "../../components/DeleteBtn/index";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown, Table } from "../../components/Form";

class Kits extends Component {
  // Setting our component's initial state
  state = {
    parts: [],
    orderType: "",
    orderNumber: "",
    vendor: "",
    project: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Parts Kits</h1>
          </Jumbotron>
          <h3 style={{color:"#ebebeb", paddingLeft: 10}}>No Kits to Display</h3>
        </Col>
        </Row>
        </Container>
    )
  }
}
export default Kits;
