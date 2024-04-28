import React from 'react'

import './QuantityInput.css'

const QuantityInput = () => {
  return (
    <>
    <button className="quantity_input_button" disabled>{" "}-{" "}</button>
    <p className="quantity_input_count">1</p>
    <button className="quantity_input_button" disabled>+</button>

    {/* <button className="search_button add_cart">Add to Cart</button> */}
    </>
  )
}

export default QuantityInput
