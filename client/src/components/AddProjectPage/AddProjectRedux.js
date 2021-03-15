import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import CreateProject from './CreateProjectContainer';

import '../Style.scss';

class AddProject extends Component {
  render() {
    return (
      <Container className="mt-5">
        <div >
          <div >
            <CreateProject />
          </div>
        </div>
      </Container>
    );
  }
}

export default AddProject;
