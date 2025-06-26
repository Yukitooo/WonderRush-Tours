import React from 'react'
import Places from '../components/Places'
import { iteneraries } from '../datas/itineraries'


function Pattaya() {
  return (
    Places({
      placeName: 'Pattaya',
      placeImage: iteneraries.pictures.pattaya,
      itineraryList: iteneraries.pattaya,})
  )
}

export default Pattaya