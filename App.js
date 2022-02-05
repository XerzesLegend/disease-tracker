import * as React from 'react';
import Navigation from './components/Navigation';

fetch('https://api.covidtracking.com');

export default function App() {
  return (
    <Navigation/>
  );
};