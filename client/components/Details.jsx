import React from 'react'
import { FlexContainer, DetailContainer, TitleContainer,MainTitle,SubTitle, ContentContainer, FormContainer, FormTitle, Form, SimpleInput, MessageText, Submit, CheckboxContainer, CheckBox, LegalDisclaimer } from '../styles.js';
import DetailsItem from './DetailsItem.jsx'

class Details extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: ``,
      defaultMessageRendered: false,
      talkAboutFinancing: false
    }
  }
  componentDidUpdate(){
    if(!this.state.defaultMessageRendered) {
      this.setState({
        defaultMessageRendered: true,
        message: `I am interested in ${this.props.currentHouse.address}`
      })
    }
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
    //this.logThis('Message ',this.state.message)
  }
  updateTalkAboutFinancing(){
    this.setState({
      talkAboutFinancing: !this.state.talkAboutFinancing
    })
  }
  logThis(type,content){
    console.log(type, content)
    console.log('Props - ', this.props)
    console.log('State - ', this.state)
  }
  sendMessage(e){
    e.preventDefault()
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
            Amenity information provided by <img src="https://hrr46-fec-localmap-bucket.s3.amazonaws.com/yelp/yelp_logo_small.png" style={{"width": "40px", "marginBottom": "4px", "paddingLeft": "2px"}}/>
          </SubTitle>
        </TitleContainer>
        <ContentContainer>
        {this.props.places.map((business, key) => {
          return <DetailsItem business={business} key={key}/>
        })}
        </ContentContainer>
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
        By pressing Request Info, you agree that House Reactor and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our <a target="_blank" href="">Terms of Use</a>&nbsp;House Reactor does not endorse any <span><a target="_blank">real estate professionals</a></span>&nbsp;
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

export default Details;