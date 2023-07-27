import React from 'react';
import './ImageList.css'; // Import the CSS file for ImageList component

const ImageList = ({ info }) => {
  return (
    <div className="list"> {/* Use the "list" class for flex layout */}
      {info.map((image) => (
        <img src={image.urls.small} alt={image.alt_description} key={image.id} />
      ))}
    </div>
  );
};

export default ImageList;
