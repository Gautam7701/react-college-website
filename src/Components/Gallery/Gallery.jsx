import React from 'react'
import gallery1 from "../../assets/gallery-1.png"
import gallery2 from "../../assets/gallery-2.png"
import gallery3 from "../../assets/gallery-3.png"
import gallery4 from "../../assets/gallery-4.png"
import whitearrow from "../../assets/white-arrow.png"
import "./Gallery.css"

const Gallery = () => {
  return (
    <>
    <div className="gallery">
        <img src={gallery1} alt="" className='galleryimages'/>
        <img src={gallery2} alt="" className='galleryimages'/>
        <img src={gallery3} alt="" className='galleryimages'/>
        <img src={gallery4} alt="" className='galleryimages'/>
    </div>
    <div className='btn-g'>
    <button className='btn-gallery'>See more here <img src={whitearrow} alt="" height="15rem"/> </button>
    </div>
    </>
  )
}

export default Gallery
