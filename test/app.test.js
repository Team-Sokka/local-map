import React from 'react';
import {configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import App from '../client/App.jsx';
import Modal from '../client/components/Modal.jsx';
import ModalNav from '../client/components/ModalNav.jsx';


describe('App Component tests', ()=> {
  test('App Component Renders', ()=>{
    const wrapper = mount(<App />);
    expect(wrapper).toBe(true)
  });

  test('Modal Component renders', ()=>{
    const modal = render(<Modal/>);
    expect(modal).toBe(true);
  })

  test('Modal Navigatation renders', ()=>{
    const modal = shallow(<Modal/>);
    console.log(ModalNav)
    expect(modal.find(ModalNav)).to.have.lengthOf(1);
  })
})
