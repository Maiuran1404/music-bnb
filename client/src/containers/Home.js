import React, { Component, Link} from 'react';
import Display from '../components/Display';
import Header from '../components/Header';
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

class Home extends Component  {

    render(){


        return(
            
            <div className="home">
                
                <div className="header">
                
                    <Header />
                    <Button as={Link} href='/add'> Add new </Button>

                </div>
                
                <div className="body">
                    <Display />
                </div>
                
            </div>
        )
    }
}

export default Home
