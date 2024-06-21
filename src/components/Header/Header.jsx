import React from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import './Header.css';
import { Typography } from '@mui/material';
import {Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

  function test(name) {
    console.log("okayokay" + name);
  }

  function test2(){
    console.log("okayokay");
  }
    

  return (
    <header>
      <img src={logo} alt="Logo" />
      <Typography variant='h6'>Investment Calculator</Typography>
      <Button variant='dark' className='mt-3 mb-5' onClick={() =>  test2()}>Test me</Button>
    </header>
  );
}