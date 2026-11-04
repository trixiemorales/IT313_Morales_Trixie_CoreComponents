
import React from 'react';
import { StatusBar } from 'react-native';
import StudentDirectory from './StudentDirectory';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0B1F4D" />
      <StudentDirectory />
    </>
  );
}
