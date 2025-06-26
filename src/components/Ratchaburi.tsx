import React from 'react';
import Places from './Places';
import { iteneraries } from '../datas/itineraries';

const Ratchaburi: React.FC = () => (
  <Places
    placeName="Ratchaburi"
    placeImage={iteneraries.pictures.ratchaburi}
    itineraryList={iteneraries.ratchaburi}
  />
);

export default Ratchaburi;
