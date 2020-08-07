import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import cogoToast from 'cogo-toast';


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
        cogoToast.success("Success!");
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
            <div>
              <div className="instruments">
                    <form>
                        <input 
                        type="text" 
                        placeholder="instrument"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}></input>
                        <input placeholder="period"></input>
                        <button> Submit </button>
                    </form>

                    {filteredInstruments.map((instrument, index) => (
                        <div className="content">
                            <div key={index} clssName="group">
                        <Card 
                            color='#14A38B' 
                            instrument={instrument.instrument} 
                            owner={instrument.owner}
                            address={instrument.address}
                            number={instrument.number}
                            id={instrument._id}/>
                            </div>
                            
                        </div>

                    ))}
                {/* {this.displayInstruments(this.state.instruments)} */}
              </div>
            </div>
          );
    }
}

export default Display
