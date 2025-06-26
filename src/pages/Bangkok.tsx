import React from 'react'
import Places from '../components/Places'
import { iteneraries } from '../datas/itineraries'


function Bangkok() {
  return (
    Places({
      placeName: 'Bangkok',
      placeImage: iteneraries.pictures.bangkok,
      itineraryList: iteneraries.bangkok})
  )
}

export default Bangkok