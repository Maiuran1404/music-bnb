import React, { Component, Link} from 'react';
import Add from '../components/Add';
import Display from '../components/Display';

import styled from 'styled-components';

export const Button = styled.a`
  /* display: inline-block; */
  border-radius: 3px;
  padding: 0.5rem 5px;
  margin: 0.5rem 1rem;
  width: fit-content;
  background: pink;
  color: black;
  border: 1px solid black;
  position: relative;
  /* right: -250px; */
  float: right;
`

export class AddPage extends Component {

    render() {
        return(
            <div>
                <Button as={Link} href='/'> Home </Button>
                <Add />
            </div>
        )
}}

export default AddPage
