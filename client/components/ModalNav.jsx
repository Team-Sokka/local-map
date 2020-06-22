import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: rgb(255,255,255);
  margin: 0;
  position: absolute;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  flex-direction: row;
  padding: 10px
`;
const Button = styled.button `
color: rgb(59,65,68);
background-color: transparent;
border-radius: 8px;
border-width: 1px;
text-align:center;
margin 5px;
padding: 8px 16px;
line-height: 1.5;
font-size: 16px;
font-weight: bold;
transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
border-color: transparent;
&:hover{
  background-color: rgb(239,239,239);
}
&:active{
  color: rgb(0,120,130);
  border-color: rgb(232,233,234);
  box-shadow: rgba(59, 65, 68, 0.4) 0px 8px 20px -15px;
  border-style: solid;
  border-width: 1px;
}
`
const ActiveButton = styled(Button)`
color: rgb(0,120,130);
border-color: rgb(232,233,234);
box-shadow: rgba(59, 65, 68, 0.4) 0px 8px 20px -15px;
border-style: solid;
border-width: 1px;
`

const ModalNav = (props) => (
  <Wrapper>
    <div>
    <ActiveButton>Map</ActiveButton>
    <Button>Street View</Button>
    <Button>Schools</Button>
    <Button>Crime</Button>
    <Button>Shop & Eat</Button>
    </div>

    <div>
      <Button><svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#869099"></path></svg>Save</Button>
      <Button><svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#869099"></path></svg>Share</Button>
      <Button onClick={props.closeModal}><svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill="#869099"></path></svg></Button>

      {/* Upload */}

    <div>


      </div>

    </div>

  </Wrapper>
)

export default ModalNav;