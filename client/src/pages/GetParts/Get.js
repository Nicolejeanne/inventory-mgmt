import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/index";
// import DeleteBtn from "../../components/DeleteBtn/index";
import { Col, Row, Container } from "../../components/Grid";
// import _ from "lodash";
import ReactTable from "react-table";
import "react-table/react-table.css";


class Get extends Component {
  // Setting our component's initial state
    state = {
        parts: [],
        partNumber: "",
        partType: "",
        description: "",
        manufacturer: "",
        vendor: "",
        quantity: "",
        conforming: "",
        cabinet: "",
        project: ""
      };
      // data: makeData()
    
  

  // When the component mounts, load all parts and save them to this.state.parts
  componentDidMount() {
    this.loadParts();
  }

  // Loads all parts and sets them to this.state.parts
  loadParts = () =>{
    API.getParts()
      .then(res =>
        this.setState({ parts: res.data })
      )
      // , partNumber: "", partType: "", description: "", manufacturer: "", vendor: "", quantity: "", conforming: "", cabinet: "", project: ""
      .catch(err => console.log(err));
  };

  // ----------------------------------------
  // something for updating parts
  // ----------------------------------------

// Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveParts method to save the book data
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
    const { data, pages, loading } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Get Parts</h1>
              </Jumbotron>
              <ReactTable
                style={{ color: "#ebebeb" }}
                columns={[
                  {
                    Header: "Part Number",
                    accessor: "partNumber"
                  },
                  {
                    Header: "Part Type",
                    id: "partType"
                    // accessor: d => d.lastName
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
                    Header: "Vendor",
                    accessor: "vendor"
                  },
                  {
                    Header: "Quantity",
                    accessor: "quantity"
                  },
                  {
                    Header: "Conforming",
                    accessor: "conforming"
                  },
                  {
                    Header: "Cabinet",
                    accessor: "cabinet"
                  },
                  {
                    Header: "Project",
                    accessor: "project"
                  }
                ]}
                manual // Forces table not to paginate or sort automatically, so we can handle it server-side
                data={data}
                pages={pages} // Display the total number of pages
                loading={loading} // Display the loading overlay when we need it
                onFetchData={this.fetchData} // Request new data when things change
                filterable
                defaultPageSize={10}
                className="-striped -highlight"
              />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  // previous self made table starting point
  //   render() {
  //     return (
  //       <div>
  //         <Container fluid>
  //           <Row>
  //             <Col size="md-12">
  //               <Jumbotron>
  //                 <h1>Get Parts</h1>
  //               </Jumbotron>
  //               <Table/>
  //             </Col>

  //             <Col size="md-12">
  //               <Jumbotron>
  //                 <h1>Parts to Checkout</h1>
  //               </Jumbotron>
  //               <Table />
  //             </Col>
  //           </Row>
  //         </Container>
  //         <FormBtn
  //           disabled={
  //             !(
  //               this.state.orderType &&
  //               this.state.orderNumber &&
  //               this.state.vendor &&
  //               this.state.project
  //             )
  //           }
  //           onClick={this.handleFormSubmit}
  //         >
  //           Submit
  //         </FormBtn>
  //       </div>
  //     );
  //   }
  // self made table ending point
}

export default Get;
