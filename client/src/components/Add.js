import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const Button = styled.button`
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
  float: left;
`

export class Add extends Component {

    state = {
        instrument: '',
        owner: '',
        address: '',
        email: '',
        price: '',
        total_price: '',
        gummibears: false,
        soloroom: false,
        instruments: []
      }
    
      componentDidMount(){
        this.getInstruments();
      }
    
      handleChange = ({ target }) => {
        const { name, value } = target; 
        this.setState({
          [name]: value
        })
      }

      handleInputChange = (event) =>  {
        const target = event.target;
        const value = target.name === 'gummibears' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });

        if(target.checked){
          this.setState({
            total_price: parseInt(this.state.price) + 5
          })
        }
      }

      handleInputChangeSolo = (event) =>  {
        const target = event.target;
        const value = target.name === 'soloroom' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        if(target.checked){
          this.setState({
            total_price: parseInt(this.state.price) + 5
          })
        }
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        const payload = {
          instrument: this.state.instrument,
          owner: this.state.owner,
          address: this.state.address,
          email: this.state.email,
          price: this.state.price,
          total_price: this.state.total_price,
          gummibears: this.state.gummibears,
          soloroom: this.state.soloroom
        };
    
        axios({
          url: '/api/add',
          method: 'POST',
          data: payload
        }) 
        .then(() => {
          console.log('Data has been sent')
          this.reset();
          this.getInstruments();
        })
        .catch((err) => {
          console.log(err)
        })
      }
    
      reset = () => {
        this.setState({
          instrument: '',
          owner: '',
          address: '',
          email: '',
          price: null,
          total_price: null,
          gummibears: false,
          soloroom: false
        })
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
    
        return instruments.map((instrument, index) => (
          <div key={index}>
            <h3>{instrument.instrument}</h3>
            <p>{instrument.owner}</p>
            <p>{instrument.address}</p>
            <p>{instrument.number}</p>
          </div>
        ))
    
      }

    render() {
        return(
            <div>
              <h2>MusicBnb</h2>
              
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <input 
                    type="text"
                    name="instrument"
                    placeholder="instrument"
                    value={this.state.instrument}
                    onChange={this.handleChange}/>
                </div>
                
                <div className="form-input">
                  <input 
                    type="text"
                    name="owner"
                    placeholder="owner"
                    value={this.state.owner}
                    onChange={this.handleChange}/>
                </div>
                <div className="form-input">
                  <input 
                    type="text"
                    name="address"
                    placeholder="address"
                    value={this.state.address}
                    onChange={this.handleChange}/>
                </div>
                <div className="form-input">
                  <input 
                    type="number"
                    name="price"
                    placeholder="price"
                    value={this.state.price}
                    onChange={this.handleChange}/>
                </div>
                <div className="form-input">
                  <input 
                    type="text"
                    name="email"
                    placeholder="email "
                    value={this.state.email}
                    onChange={this.handleChange}/>
                    <br/>
                    <label>
                      Gummibears
                      <input
                        name="gummibears"
                        type="checkbox"
                        checked={this.state.gummibears}
                        onChange={this.handleInputChange} />
                    </label>
                    <p>With Gummibears extension: $5 USD</p>
                    
                    <label>
                      Soloroom
                      <input
                        name="soloroom"
                        type="checkbox"
                        checked={this.state.soloroom}
                        onChange={this.handleInputChangeSolo} />
                    </label>
                    <p>With soloroom extension: 10 USD</p>

                    <div>
                    <br/>
                    {<h3>Your hourly price: ${this.state.price}  USD</h3>}
                    
                    {!this.state.gummibears && !this.state.soloroom && <h3>Your total price: ${this.state.price} USD</h3>}
                    {this.state.gummibears && !this.state.soloroom && <h3>Your total price: ${parseInt(this.state.price) + parseInt(5)} USD</h3>}
                    {!this.state.gummibears && this.state.soloroom && <h3>Your total price: ${parseInt(this.state.price) + parseInt(10)} USD</h3>}
                    {this.state.gummibears && this.state.soloroom && <h3>Your total price: ${parseInt(this.state.price) + 15} USD</h3>}
                  </div>
                    <button>Submit</button>
                </div>

              </form>

            </div>
          );
    }
}

export default Add
