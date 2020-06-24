import React from 'react';
import {configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/App.jsx';
import Modal from '../client/components/Modal.jsx';
//const Adapter = require('enzyme-adapter-react-16');

configure({adapter: new Adapter()});

//const App = require('../client/App.jsx');
//const Modal = require('../client/components/Modal.jsx')

//console.log('enzyme - ', enzyme)
//console.log('Adapter - ',Adapter)
//import Adapter from 'enzyme-adapter-react-16.3';

describe('App Component tests', ()=> {
  test('App Component Renders', ()=>{
    const wrapper = shallow(<App />);
    expect(wrapper).toBe(true)
  });

  test('Modal Component renders', ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Modal)).to.have.lengthOf(1);
  })
})
