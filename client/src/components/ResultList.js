import React from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap'
function ResultList(props) {

  return (


    <div className="App">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={props.filter}
          value={props.search}
          name="search"
        />
        <InputGroup.Append>
          <Button variant="outline-success">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => props.sort(['name', 'last'])}><b>Name</b> <i className="fa fa-fw fa-sort"></i></th>
            <th onClick={() => props.sort(['email'])}><b>Email</b> <i className="fa fa-fw fa-sort"></i></th>
            <th onClick={() => props.sort(['phone'])}><b>Phone</b> <i className="fa fa-fw fa-sort"></i></th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => (

            <tr key={result.email}>
              <td>{result.name.title + " " + result.name.first + " " + result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>
              <td><img alt="Profile" src={result.picture.medium} /></td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default ResultList;
