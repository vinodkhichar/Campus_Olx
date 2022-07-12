import React from 'react'

function product_item_small_desc(props) {
  return (
    <div className='product_item_small_description'>
        <div className="item_small_img"></div>
        <div className="item_small_title">
            <h2>props.price</h2>
            <h3>props.title</h3>
        </div>
    </div>
  )
}

export default product_item_small_desc