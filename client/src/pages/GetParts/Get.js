import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/index";
import DeleteBtn from "../../components/DeleteBtn/index";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown, Table } from "../../components/Form";

class Get extends Component {
  // Setting our component's initial state
  state = {
    parts: [],
    orderType: "",
    orderNumber: "",
    vendor: "",
    project: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    // this.loadBooks();
  }

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
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Get Parts</h1>
              </Jumbotron>
              <Table/>
            </Col>

            <Col size="md-12">
              <Jumbotron>
                <h1>Parts to Checkout</h1>
              </Jumbotron>
              <Table />

              {/* <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
            </Col>
          </Row>
        </Container>
        <FormBtn
          disabled={
            !(
              this.state.orderType &&
              this.state.orderNumber &&
              this.state.vendor &&
              this.state.project
            )
          }
          onClick={this.handleFormSubmit}
        >
          Submit
        </FormBtn>
      </div>
    );
  }
}
export default Get;
