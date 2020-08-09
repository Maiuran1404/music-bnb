import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';

const LogoTitle = styled.h3`
  margin-right: 90%;
  font-family: "Spartan", sans-serif;
  text-decoration: none;
  font-weight: 300;
  margin-top: 2%;
  color: white;
`

const Banner = styled.h3`
  margin-right: 85%;
  font-family: "Spartan", sans-serif;
  text-decoration: none;
  font-weight: 100;
  margin-top: 2%;
`

const Container = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);

  /* grid-template-areas: "Disp Disp" "Disp" "Disp"; */
`

const Disp = styled.div`
  margin: 0 auto;
`

const Disp2 = styled.div`
  margin-left: 0;
`
const Form = styled.form`
  margin-left: 0%;
  margin-bottom: 3%;
  margin-top: 1%;
`

const Input = styled.input`
  margin-top: 0px;
  padding: 10px;
  width: 25%;
  height: 50px;
  border-radius: 40px;
  padding: 8px 10px;
  margin: 1px 0;
  box-sizing: border-box;
  border: 0.1px solid white;
  background: white;
  text-align: center;
  box-shadow: 3px 3px #F1F1F1;
`

const Button = styled.button`
  margin: 0 auto;
  margin-left: 3%;
`

export class Display extends Component {

    constructor() {
        super();
        this.state = {
            instruments: [],
            search: ''
        };
    }
    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0, 20)
        });
    }
    componentDidMount(){
      this.getInstruments();
    }
    getInstruments = () => {
      axios.get('/api')
        .then((res) => {
          const data = res.data;
          this.setState({
            instruments: data
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    displayInstruments = (instruments) => {
  
      if(!instruments.length) return null;
  
      return null;
  
    }

    render() {

    let filteredInstruments = this.state.instruments.filter(
        (instrument) => {
            
            return instrument.instrument && instrument.instrument.toLowerCase()
            .indexOf(this.state.search) !== -1;
        }
    );

      return(
        <Fragment>
                <LogoTitle>Music BnB</LogoTitle>
                  <Form>
                      <Input 
                      type="text" 
                      placeholder="Instrument"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}></Input>
                      {/* <Button> Submit </Button> */}
                  </Form>
                  
            <Container>


                  {filteredInstruments.map((instrument, index) => (
                      <Disp>
                          <Disp2 key={index} clssName="group">
                            <Card 
                            color='#14A38B' 
                            instrument={instrument.instrument} 
                            owner={instrument.owner}
                            address={instrument.address}
                            number={instrument.number}
                            email={instrument.email}
                            price={instrument.price}
                            id={instrument._id}/>
                          </Disp2>
                      </Disp>
                  ))}
              {/* {this.displayInstruments(this.state.instruments)} */}
            </Container>
        </Fragment>

        );
    }
}

export default Display
