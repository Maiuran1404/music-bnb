import React, { Component, Link} from 'react';
import Add from '../components/Add';
import Display from '../components/Display';

import styled from 'styled-components';

export const Button = styled.a`
  /* display: inline-block; */
  border-radius: 20px;
  
  padding: 1rem 5px;
  margin: 1rem 1rem;
  width: fit-content;
  background: #111d4a;
  color: white;
  border: 1px solid black;
  position: relative;
  /* right: -250px; */
  float: left;
`
const Wrapper = styled.div`
    background-color: #111d4a;
    height: 100vh;
    
`

const Container = styled.div`
    background-color: white;
    width: 50%;
    margin: 0 auto;
    box-sizing: border-box;
    height: 90%;
    border: 40px solid #111d4a;
    padding: 10px;
    border-radius: 50px;
    height: 75%;
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
