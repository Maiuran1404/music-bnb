import React, { Component, Link} from 'react';
import Add from '../components/Add';
import Display from '../components/Display';

import styled from 'styled-components';

export const Button = styled.a`
  /* display: inline-block; */
  border-radius: 3px;
  padding: 1rem 5px;
  margin: 1rem 1rem;
  width: fit-content;
  background: pink;
  color: black;
  border: 1px solid black;
  position: relative;
  /* right: -250px; */
  float: right;
`
const Wrapper = styled.div`
    background-color: grey;
    height: 100vh;
`

const Container = styled.div`
    background-color: white;
    width: 50%;
    height: 60%;
    border-radius: 20px;
    margin: 0 auto;
`


export class AddPage extends Component {

    render() {
        return(
            <Wrapper>
                <Container>
                    <Button as={Link} href='/'> Home </Button>
                    <Add />
                </Container>
            </Wrapper>
        )
}}

export default AddPage
