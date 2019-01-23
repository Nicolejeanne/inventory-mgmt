import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/index";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown, Table } from "../../components/Form";

class BOMs extends Component {
  // Setting our component's initial state
  state = {};

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBOMs();
  }

  // Loads all books  and sets them to this.state.books
  loadBOMs = () => {
    // API.getBooks()
    //   .then(res =>
    //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //   )
    //   .catch(err => console.log(err));
  };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
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
            <h1>Bill of Materials (BOMs)</h1>
          </Jumbotron>
          <h3 style={{color:"#ebebeb", paddingLeft: 10}}>No BOMs to Display</h3>
        </Col>
        </Row>
        </Container>
    )
  }
}

export default BOMs;
