import React from 'react';
import ScannerPage from '../scanner/ScannerPage'
import Scanner from '../scanner/Scanner'

export default {
  title: 'Scanner',
  component: ScannerPage,
};

export const main = () => <ScannerPage  />;
export const scanner = () => <Scanner />