import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/index";
import DeleteBtn from "../../components/DeleteBtn/index";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Dropdown, Table } from "../../components/Form";

class Add extends Component {
  // Setting our component's initial state
  state = {
    parts: [],
    orderType: "",
    orderNumber: "",
    vendor: "",
    project: "",
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
              <h1>Part Entry Form</h1>
            </Jumbotron>
            <form style={{paddingLeft:10}}>
            <Dropdown
                value={this.state.orderType}
                onChange={this.handleInputChange}
                name="orderType"
                placeholder="Order Type (required)"
              />
              <Input
                value={this.state.orderNumber}
                onChange={this.handleInputChange}
                name="orderNumber"
                placeholder="Order Number (required)"
              />
              <Input
                value={this.state.vendor}
                onChange={this.handleInputChange}
                name="vendor"
                placeholder="Vendor (required)"
              />
              <Dropdown
                value={this.state.project}
                onChange={this.handleInputChange}
                name="project"
                placeholder="Owning Project (required)"
              />
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
            </form>
            
          </Col>

          <Col size="md-12">
            <Jumbotron>
              <h1>Enter Parts Here</h1>
            </Jumbotron>
<Table/>
              
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
      disabled={!(this.state.orderType && this.state.orderNumber && this.state.vendor && this.state.project)}
      onClick={this.handleFormSubmit}
    >
      Submit
    </FormBtn>
    </div>
    );
  }
}

export default Add;
