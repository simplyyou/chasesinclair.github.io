import React from 'react';

const ImageWrapper = ({ image, description }) => {
  return (
    <div className="col-md-4 col-xs-6">
      <div className="thumbnail">
        <img src={image} alt={description}></img>
      </div>
    </div>
  )
}

export default ImageWrapper;