import React, {Link, Component, Fragment} from 'react';
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.a`
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

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5
    }
  }
};

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
    }, delay: 0.2
    
  }
};

class InstrumentId extends Component  {
  constructor(){
    super();

    this.state = {
      instruments: [],
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params

    this.getInstruments(id);
  }

  getInstruments = (id) => {
    axios.get(`/${id}`)
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

  

  render(){

    const j = Object.values(this.state.instruments)
    // const e = this.state.instruments.extensions

      return(
        <Fragment>
          {/* <div>Maiu</div> */}
          <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>{
            j && j.map((instrument,i) =>{
             return <motion.div key={i} variants={fadeInUp}>
                <motion.h3 variants={fadeInUp}>{instrument.owner}</motion.h3>
                <motion.p variants={fadeInUp}>{instrument._id}</motion.p>
                <motion.p variants={fadeInUp}>{instrument.date}</motion.p>
                <motion.p variants={fadeInUp}>{instrument.instrument}</motion.p>
                <motion.p variants={fadeInUp}>{instrument.address}</motion.p>
                <motion.p variants={fadeInUp}>{instrument.email}</motion.p>
                  {instrument.extensions && instrument.extensions.map((extension, i) => {
                    return <motion.div variants={fadeInUp}>{extension}</motion.div>
                  })}
                <Button>Book</Button>
                </motion.div>
             })
            }
          </motion.div>
          
          
        </Fragment>


  // <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
  //   <div className='fullscreen'>
  //     <div className='product'>
  //       <motion.div
  //         className='img'
  //         animate={{ opacity: 1 }}
  //         initial={{ opacity: 0 }}>
  //         {/* <motion.img
  //           key={props.product.image}
  //           src={props.product.image}
  //           animate={{ x: 0, opacity: 1 }}
  //           initial={{ x: 200, opacity: 0 }}
  //           exit={{ opacity: 0 }}
  //           transition={{ delay: 0.2 }}
  //         /> */}
  //       </motion.div>
  //       <div className='product-details'>
  //         <motion.div variants={stagger} className='inner'>
  //           <Link href='/'>
  //             <motion.div variants={fadeInUp}>
  //               <a className='go-back'>Back to products</a>
  //             </motion.div>
  //           </Link>
  //           <motion.div variants={fadeInUp}>
  //             <span className='category'>Protein</span>
  //           </motion.div>
  //           <motion.h1 variants={fadeInUp}>Maiu</motion.h1>
  //           <motion.p variants={fadeInUp}>Maiu2</motion.p>
  //           <motion.div variants={fadeInUp} className='additonals'>
  //             <span>Soy Free</span>
  //             <span>Gluten Free</span>
  //           </motion.div>
  //           <motion.div variants={fadeInUp} className='qty-price'>
  //             <div className='qty'>
  //               <div className='minus'>-</div>
  //               <div className='amount'>1</div>
  //               <div className='add'>+</div>
  //             </div>
  //             <span className='price'>$50</span>
  //           </motion.div>
  //           <motion.div variants={fadeInUp} className='btn-row'>
  //             <button className='add-to-cart'> Add to cart</button>
  //             <button className='subscribe'> Subscribe</button>
  //           </motion.div>
  //         </motion.div>
  //       </div>
  //     </div>
  //   </div>
  // </motion.div>
  )
}
}




// InstrumentId.getInitialProps = async function(context) {
//   const { id } = context.query;
//   const res = await fetch(
//     `https://my-json-server.typicode.com/wrongakram/demo/products/${id}`
//   );
//   const InstrumentId = await res.json();
//   return { InstrumentId };
// };

export default InstrumentId;
