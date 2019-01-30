import React, { Component } from "react";
import API from "../../utils/API";
import makeData from "../../utils/Utils";
import Jumbotron from "../../components/Jumbotron/index";
// import DeleteBtn from "../../components/DeleteBtn/index";
import { Col, Row, Container } from "../../components/Grid";
import _ from "lodash";
import ReactTable from "react-table";
import "react-table/react-table.css";

const rawData = makeData();

const requestData = (pageSize, page, sorted, filtered) => {
  return new Promise((resolve, reject) => {
    // You can retrieve your data however you want, in this case, we will just use some local data.
    let filteredData = rawData;

    // You can use the filters in your request, but you are responsible for applying them.
    if (filtered.length) {
      filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        return filteredSoFar.filter(row => {
          return (row[nextFilter.id] + "").includes(nextFilter.value);
        });
      }, filteredData);
    }
    // You can also use the sorting in your request, but again, you are responsible for applying it.
    const sortedData = _.orderBy(
      filteredData,
      sorted.map(sort => {
        return row => {
          if (row[sort.id] === null || row[sort.id] === undefined) {
            return -Infinity;
          }
          return typeof row[sort.id] === "string"
            ? row[sort.id].toLowerCase()
            : row[sort.id];
        };
      }),
      sorted.map(d => (d.desc ? "desc" : "asc"))
    );

    // You must return an object containing the rows of the current page, and optionally the total pages number.
    const res = {
      rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(filteredData.length / pageSize)
    };

//     // Here we'll simulate a server response with 500ms of delay.
//     setTimeout(() => resolve(res), 500);
//   });
// };
})
}

class Get extends Component {
  // Setting our component's initial state
    state = {
        // data: {
          parts: [],
          partNumber: "",
          partType: "",
          description: "",
          manufacturer: "",
          vendor: "",
          quantity: "",
          conforming: "",
          cabinet: "",
          project: "",
        // }
        // loading: true,
        // pages: null
      };
      // data: makeData()
    
  // fetchData(state, instance) {
  //   // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
  //   // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
  //   this.setState({ loading: true });
  //   // Request the data however you want.  Here, we'll use our mocked service we created earlier
  //   requestData(
  //     state.pageSize,
  //     state.page,
  //     state.sorted,
  //     state.filtered
  //   ).then(res => {
  //     // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
  //     this.setState({
  //       data: res.rows,
  //       pages: res.pages,
  //       loading: false
  //     });
  //   });
  // }

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
                    accessor: "partNumber",
                    // accessor: d => d.partNumber
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
}

export default Get;
  