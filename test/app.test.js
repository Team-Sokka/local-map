const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16.3');
import sinon from 'sinon';

enzyme.configure({adapter: new Adapter()});

const App = require('../client/App.jsx');
const Modal = require('../client/components/Modal.jsx')

//console.log('enzyme - ', enzyme)
//console.log('Adapter - ',Adapter)
//import Adapter from 'enzyme-adapter-react-16.3';

describe('App Component tests', ()=> {

  test('App Component Renders', ()=>{
    const wrapper = enzyme.shallow(<App/>);
    expect(wrapper).toBe(true)
  });

  test('Modal Component renders', ()=>{
    const wrapper = enzyme.shallow(<App/>);
    expect(wrapper.find(Modal)).to.have.lengthOf(1);
  })
})
