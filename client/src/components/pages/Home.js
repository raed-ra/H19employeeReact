import React, { Component } from "react";
import ResultList from "../ResultList";
import API from "../../utils/API";
import '../../App.css';
import { filter } from "async";


class Home extends Component {
  state = {
    search: "",
    results: [],
    filteredResults:[],
    key: [],
    direction: ""
  };

  // When this component mounts, gets info from the random user API
  componentDidMount() {
    this.getuser();
  }

  getuser = () => {
    console.log("getuserfunction")
    API.search()
      .then(res => {
        console.log(res.data.results)
        this.setState({ results: res.data.results ,filteredResults: res.data.results})
      })
      .catch(err => console.log(err));
  };

 // When anythig typed in search box it'll start searching in names, emails, phone numbers
  handleFilter = event => {
    let search = event.target.value;
    let employeeList = this.state.results;
    const filteredEmployees = employeeList.filter((obj) =>  {
      return ((JSON.stringify(obj.name).toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
      (JSON.stringify(obj.email).toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
      (JSON.stringify(obj.phone).toLowerCase().indexOf(search.toLowerCase()) !== -1) );
    });

    this.setState({ search, filteredResults: filteredEmployees });
  };

 
  //when the heading on the table is clicked it'll start sorting. It knows the current states if acending and it'll got opposite
  handleSort = (key) => {
    const getNestedObject = (nestedObj, pathArr) => {
      return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    } 
    let direct = "ascending"
    if (JSON.stringify(this.state.key) === JSON.stringify(key) && this.state.direction === 'ascending') {
      direct = "descending";
    } 
    let list = [...this.state.filteredResults]
    if (this.state.direction === 'ascending') {
      list.sort((a, b) => {
        return (getNestedObject(a, key) > getNestedObject(b, key) ? 1 : -1)
      });
    } else {
      list.sort((a, b) => {
        return (getNestedObject(a, key) < getNestedObject(b, key) ? 1 : -1)
      });
    }
    this.setState({ filteredResults: list, key: key, direction: direct })
  };


  render() {
    return (
      <ResultList results={this.state.filteredResults} sort={this.handleSort} filter={this.handleFilter} />
    )
  }
}

export default Home;
