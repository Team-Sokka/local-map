import React from 'react'
import styled from 'styled-components'
import DetailsItem from './DetailsItem.jsx'

// const Details = (props) => (
//   <FlexContainer>
//   <DetailContainer styling={props.styling} hide={props.hide}>
//     <TitleContainer>
//       <MainTitle>
//         Shop & Eat
//         </MainTitle>
//         <SubTitle>
//           Amenity information provided by <img src="https://www.trulia.com/images/txl/icons/yelp/yelp_logo_small.png" style={{"width": "40px", "marginBottom": "4px", "paddingLeft": "2px"}}/>
//         </SubTitle>
//       </TitleContainer>
//     <ContentContainer>
//     {props.places.map((business, key) => {
//       return <DetailsItem business={business} key={key}/>
//     })}
//     </ContentContainer>
//   </DetailContainer>
//   </FlexContainer>
// )

class Details extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: `I am interested in ${this.props.currentHouse.address}`,
      talkAboutFinancing: false
    }
  }

  componentDidMount(){
    console.log('DETAILS MOUNTED')
    console.log('Props', this.props)
  }
  updateName(e){
    this.setState({
      name: e.target.value
    });
  }
  updatePhone(e){
    this.setState({
      phone: e.target.value
    });
  }
  updateEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  updateMessage(e){
    this.setState({
      message: e.target.value
    });
    this.logThis('Message ',this.state.message)
  }
  updateTalkAboutFinancing(){
    this.setState({
      talkAboutFinancing: !this.state.talkAboutFinancing
    })
  }
  logThis(type,content){
    console.log(type, content)
    console.log('Props', this.props)
  }
  sendMessage(e){
    e.preventDefault()
    console.log(this.props)
    console.log('Name: ', this.state.name)
    console.log('Phone: ', this.state.phone)
    console.log('Email: ', this.state.email)
    console.log('Message: ', this.state.message)
    console.log('Financing:', this.state.talkAboutFinancing)
  }
  render(){
    let content;
    if (this.props.styling.shopAndEat) {
      content =
      <React.Fragment>
        <TitleContainer>
        <MainTitle>
          Shop & Eat
          </MainTitle>
          <SubTitle>
            Amenity information provided by <img src="https://www.trulia.com/images/txl/icons/yelp/yelp_logo_small.png" style={{"width": "40px", "marginBottom": "4px", "paddingLeft": "2px"}}/>
          </SubTitle>
        </TitleContainer>
        <ContentContainer>
        {this.props.places.map((business, key) => {
          return <DetailsItem business={business} key={key}/>
        })}
        </ContentContainer>;
      </React.Fragment>
    } else {
      content =
      <FormContainer>
        <FormTitle>Contact A Premier Agent</FormTitle>
        <Form>
          <SimpleInput placeholder={'Name'} type={'text'} value={this.state.name} onChange={this.updateName.bind(this)}></SimpleInput>
          <SimpleInput placeholder={'Phone'} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type={'tel'} value={this.state.phone} onChange={this.updatePhone.bind(this)}></SimpleInput>
          <SimpleInput placeholder={'Email'} type={'email'} value={this.state.email} onChange={this.updateEmail.bind(this)}></SimpleInput>
          <MessageText type={'text'} value={this.state.message} onChange={this.updateMessage.bind(this)}></MessageText>
          {/* <SimpleInput type={'checkbox'}>I want to talk about financing</SimpleInput> */}
          <Submit onClick={this.sendMessage.bind(this)}>Request Info</Submit>
          <CheckboxContainer>
            <CheckBox type={'checkbox'} onClick={this.updateTalkAboutFinancing.bind(this)}/><label>I want to talk about financing</label>
          </CheckboxContainer>
        </Form>
        <LegalDisclaimer>
        By pressing Request Info, you agree that House Reactor and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our <a target="_blank" href="https://www.trulia.com/terms">Terms of Use</a>&nbsp;House Reactor does not endorse any <span><a target="_blank">real estate professionals</a></span>&nbsp;
        </LegalDisclaimer>
      </FormContainer>
    }
    return(
      <FlexContainer>
      <DetailContainer styling={this.props.styling} hide={this.props.hide}>
      {content}
      </DetailContainer>
      </FlexContainer>
    )
  }
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10px;
`


const DetailContainer = styled.div`
  height: 88%;
  width: 332px;
  background-color: white;
  position: absolute;
  z-index: 500;
  margin-top 10px;
  border-radius: 8px;
  border-color: rgb(232, 233, 234);
  border-style: solid;
  border-width: 1px;
  visibility: ${props => {
    if ((props.styling.shopAndEat || props.styling.basic)&& !props.hide) {
      return 'visible'
    } else {
      return 'hidden'
    }
  }}
`

const TitleContainer = styled.div`
  text-align: left;
`

const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`

const MainTitle = styled.div`
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(59, 65, 68);
`

const SubTitle = styled.div`
  padding: 2px 2px 5px 5px;
  font-size: 12px;
  align-items: center;
  display: flex;
`

const ContentContainer = styled.div`
  border-radius: 5px;
  overflow:scroll;
  max-height: 87%;
`
const Form = styled.form`
  border-radius: 5px;
  overflow:scroll;
  max-height: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
padding: 16px;
`

const SimpleInput = styled.input`
  display: inline-block;
  border-radius: 8px;
  border-color: rgb(205, 209, 212);
  border-style: solid;
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;
  width: 94%;
  margin: 8px;
`

const MessageText = styled.textarea`
  border-radius: 8px;
  border-color: rgb(205, 209, 212);
  border-style: solid;
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;
  height: 78px;
  width: 94%;
  margin: 8px;
  resize: none;
`

const Submit = styled.button`
  display: inline-block;
  border-radius: 8px;
  border-color: rgb(217, 60, 35);
  border-style: solid;
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
  margin: 8px;
  background-color: rgb(217, 60, 35);
  color: rgb(255, 255, 255);
  font-weight: 400;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(217, 60, 35);
  }
`
const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  color: rgb(134, 144, 153);
  font-size: 12px;
  line-height: 2;
  margin: 3px;
  align-items: center;
`;

const CheckBox = styled.input`
  display: inline-block;
  border-radius: 8px;
  border-color: rgb(205, 209, 212);
  border-style: solid;
  border-width: 1px;
  font-size: 16px;
  line-height: 1.5;
`

const LegalDisclaimer = styled.div`
font-size: 10px;
line-height: 16px;
color: rgb(134, 144, 153);
`

export default Details;