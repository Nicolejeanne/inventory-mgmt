import React, { Component } from "react";
// import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/index";
import { Col, Row, Container } from "../../components/Grid";
// import makeData from "../../utils/addUtils";
// import DeleteBtn from "../../components/DeleteBtn/index";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  Input,
  FormBtn,
  Dropdown,
  StageBtn
} from "../../components/Form";

class Add extends Component {
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
    const { data } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Part Entry Form</h1>
        
              </Jumbotron>
              <Container>
          <Row>
            <Col size="md-6">
              <form style={{ paddingLeft: 10, width: 500 }}>
                <Input
                  value={this.state.orderType}
                  onChange={this.handleInputChange}
                  name="orderType"
                  placeholder="Order Type"
                />
                <Input
                  value={this.state.orderNumber}
                  onChange={this.handleInputChange}
                  name="orderNumber"
                  placeholder="Order Number"
                />
                <Input
                  value={this.state.vendor}
                  onChange={this.handleInputChange}
                  name="vendor"
                  placeholder="Vendor"
                />
                <Input
                  value={this.state.project}
                  onChange={this.handleInputChange}
                  name="project"
                  placeholder="Owning Project"
                />
                </form>
                </Col>
         
            <Col size="md-6">
                <form style={{ paddingLeft: 10}}>
                <Input
                  value={this.state.partNumber}
                  onChange={this.handleInputChange}
                  name="partNumber"
                  placeholder="Part Number"
                />
                <Input
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                  name="quantity"
                  placeholder="Quantity"
                />
                <Input
                  value={this.state.conforming}
                  onChange={this.handleInputChange}
                  name="conforming"
                  placeholder="Conforming"
                />
                <Input
                  value={this.state.cabinet}
                  onChange={this.handleInputChange}
                  name="cabinet"
                  placeholder="Cabinet"
                />
              </form>
              </Col>
          </Row>
        </Container>
        
              <StageBtn
          disabled={
            !(
              this.state.orderType &&
              this.state.orderNumber &&
              this.state.vendor &&
              this.state.project
            )
          }
          onClick={this.handleStagePart}
        >
          Stage Part Now!
        </StageBtn> 
            </Col>
            

            <Col size="md-12">
              <Jumbotron>
                <h1>Parts to Check-In</h1>
              </Jumbotron>
        <ReactTable
        style={{ color: "#ebebeb" }}
        // filterable
        //   defaultFilterMethod={(filter, row) =>
        //     String(row[filter.id]) === filter.value}
          // data={data}
          
          columns={[
            {
              Header: "Part Number",
              accessor: "partNumber"
            },
            {
              Header: "Part Type",
              accessor: "partType"
            },
            {
              Header: "Description",
              accessor: "description"
            },
            {
              Header: "Manufacturer",
              accessor: "manufacturer"
            },
            {
              Header: "Quantity",
              accessor: "quantity"
            },
            {
              Header: "Conforming?",
              accessor: "conforming"
            },
            {
              Header: "Cabinet",
              accessor: "cabinet"
            },
            {
              Header: "Remove",
      
              accessor: "remove"
            }
              ]}
            
          defaultPageSize={10}
          className="-striped -highlight"
        />
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

export default Add;
