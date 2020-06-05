import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['cogumelos', 'pimenta', 'cebolas', 'azeitonas', 'queijo extra', 'tomates'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <h3>Passo 2: Coberturas</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ originX: 0, scale: 1.3, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Pedir
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;