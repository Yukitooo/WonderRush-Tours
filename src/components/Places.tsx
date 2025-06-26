import React from 'react'
import './Places.css'

interface PlacesProps {
  placeName: string;
  placeImage: string;
  itineraryList: string[];
}

function Places({ placeName, placeImage, itineraryList }: PlacesProps) {
  return (
    <>
      <div className="picture place-fade-in">
        <div className="placePicture">
          <h1 className='placeName'>{placeName}</h1>
          <img src={placeImage} alt={placeName} className="placeImage" />
        </div>
        <div className="itenerary">
          {itineraryList.map((item, idx) => (
            <p className="iteneraryList" key={idx}>{item}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Places