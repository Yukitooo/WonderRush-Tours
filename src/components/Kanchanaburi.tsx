import React from 'react';
import Places from './Places';
import { iteneraries } from '../datas/itineraries';


const Kanchanaburi: React.FC = () => (
  <Places
    placeName="Kanchanaburi"
    placeImage={iteneraries.pictures.kanchanaburi}
    itineraryList={iteneraries.kanchanaburi}
  />
);

export default Kanchanaburi;
