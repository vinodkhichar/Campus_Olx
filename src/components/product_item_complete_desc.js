import React from 'react'

function product_item_complete_desc(props) {
  return (
    <div className='product_item_complete_desc'>
      <div className="item_big_img">scrollable multiple images</div>
      <div className="item_prize_title_div">
        <h2>props.price</h2>
        <h3>props.title</h3>
        <p>props.address</p>
      </div>
      <div className="item_seller_description">
        <h3>Seller Description</h3>
        <Link to='/seller_profile'>
          seller_photo
          seller_name
        </Link>
        <button>chat with seller</button>
      </div>
      <div className="item_decription">props.description</div>
    </div>
  )
}

export default product_item_complete_desc