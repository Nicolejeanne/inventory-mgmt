import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/index";
import NewSearchBtn from "../../components/NewSearchBtn/index";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn, Dropdown } from "../../components/Form";

class Transactions extends Component {
  // Setting our component's initial state
  state = {};

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    // this.loadTransactions();
  }

  // Loads all books and sets them to this.state.books
  // loadTransactions = () => {
  //   // API.getBooks()
  //   //   .then(res =>
  //   //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //   //   )
  //   //   .catch(err => console.log(err));
  // };

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
              <h1>Search Transactions</h1>
            </Jumbotron>
            <h5
              style={{
                color: "#ebebeb",
                opacity: 0.5,
                width: 500,
                textAlign: "center"
              }}
            >
              <i class="fa fa-arrow-down" aria-hidden="true" /> Search by one
              or all categories{" "}
              <i class="fa fa-arrow-down" aria-hidden="true" />
            </h5>
            <form style={{ paddingLeft: 10 }}>
              <Input
                value={this.state.partNumber}
                onChange={this.handleInputChange}
                name="partNumber"
                placeholder="Part Number"
              />
              <Input
                value={this.state.partType}
                onChange={this.handleInputChange}
                name="partType"
                placeholder="Part Type"
              />
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description"
              />
              <Dropdown
                value={this.state.manufacturer}
                onChange={this.handleInputChange}
                name="manufacturer"
                placeholder="Manufacturer"
              />
              <Dropdown
                value={this.state.vendor}
                onChange={this.handleInputChange}
                name="vendor"
                placeholder="Vendor"
              />
              <Dropdown
                value={this.state.project}
                onChange={this.handleInputChange}
                name="project"
                placeholder="Owning Project"
              />
              <Input
                value={this.state.cabinet}
                onChange={this.handleInputChange}
                name="cabinet"
                placeholder="Cabinet"
              />
              <Input
                value={this.state.orderNumber}
                onChange={this.handleInputChange}
                name="orderNumber"
                placeholder="Order Number"
              />
              <Input
                value={this.state.orderType}
                onChange={this.handleInputChange}
                name="orderType"
                placeholder="Order Type"
              />
              <Dropdown
                value={this.state.addedBy}
                onChange={this.handleInputChange}
                name="addedBy"
                placeholder="Added By"
              />
            </form>
          </Col>
        </Row>
      </Container>
      <FormBtn
        disabled={
          !(
            this.state.partNumber ||
            this.state.partType ||
            this.state.description ||
            this.state.manufacturer ||
            this.state.orderType ||
            this.state.orderNumber ||
            this.state.vendor ||
            this.state.project ||
            this.state.cabinet
          )
        }
        onClick={this.handleFormSubmit}
      >
        Submit
      </FormBtn>
      <NewSearchBtn>
        New Search
      </NewSearchBtn>
    </div>
  );
}
}
export default Transactions;
