import React, { Component, Link } from 'react';
import { motion } from "framer-motion";
import '../App.scss';
import memoji from './memoji.png';
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

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


class Card extends Component {




    render(){

        return (
            <div className="cardList">
            <motion.div
            //   style={{ rotate: 0, x: "calc(50vh - 100px)" }}  
            //   whileHover={{ scale: 1.15 }}
            //   whileTap={{ scale: 0.85 }}
            //   backgroundColor="#fff000"
              className='card'
            //   onClick={() => this.handleClick(this.props.pageName)}
              >
                        <div className="Card-header">
                            {/* <img src={memoji} alt="Logo" /> */}
                        </div>
                            <div className="Card-body">
                        <div className="heading">
                        <span className="company">{this.props.instrument} </span>
                        <div className="labels">
                            {/* {props.new ? <span className="label new">new! </span> : null}
                            {featured ? <span className="label">featured </span> : null} */}
                        </div>
                        </div>
                        <h1>{this.props.address}</h1>

                            <div className="footer">
                                <li>{this.props.owner}</li>
                                <li>{this.props.number}</li>
                                
                            </div>
                            <button as={Link} href={this.props.id}> Book </button>
                            {console.log('ID' + this.props.id)}
                        </div>
                        <div className="Card-footer">
                            
                        </div>
            </motion.div>
            </div>
          
        );
    }
}

export default Card;