import React from 'react'

const Collection = () => {
  return (
    <>
    <section>
        <div class="collections container">
            <div class="content2">
                <img src="https://i.postimg.cc/Xqmwr12c/clothing.webp" alt="img" />
                <div class="img-content2">
                    <p>Clothing Collections</p>
                    <button  className='collect-btn'>SHOP NOW</button>
                </div>
            </div>
            <div class="content2">
                <img src="https://i.postimg.cc/8CmBZH5N/shoes.webp" alt="img" />
                <div class="img-content2">
                    <p>Shoes Spring</p>
                    <button className='collect-btn'>SHOP NOW</button>
                </div>
            </div>
            <div class="content2">
                <img src="https://i.postimg.cc/MHv7KJYp/access.webp" alt="img" />
                <div class="img-content2">
                    <p>Accessories</p>
                    <button  className='collect-btn'>SHOP NOW</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Collection