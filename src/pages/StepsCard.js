import React from 'react';
// import MyRedio from './MyRedio';


class StepsCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        creditcard: '',
        debitcard: '',
        CCCard:  '',
        Pin:  '',
        expDate: '',
        identity: '',
        username: '',
        password: '',
        conformpassword: '',
        secretword: '', 
        site: '',
        address: ''
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { CCCard, Pin, expDate, identity, username, password, conformpassword, secretword } = this.state
      const objData = {CCCard, expDate, identity, Pin, username, password, conformpassword, secretword };
      console.log(objData, 'objData')
      alert(`Your registration is successful`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Cancel
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <p>Step {this.state.currentStep} of 3</p> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            creditcard={this.state.creditcard}
            debitcard={this.state.debitcard}
            

          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            CCCard={this.state.CCCard}
            Pin={this.state.Pin}
            identity={this.state.identity}
            expDate={this.state.expDate}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
            conformpassword={this.state.conformpassword}
            secretword={this.state.secretword}
            site={this.state.site}
            address={this.state.address}
          />
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(<div>
      <h6 className="mb-3">Select your card type</h6>
      <div className="form-group">
        {/* <MyRedio /> */}
        <div className="left align-left">
        <input type="radio" name="debitcard" 
          value={props.debitcard} 
          onChange={props.handleChange} />
        <label htmlFor="debitcard">ATM / Dabit Card</label>
        </div>
        <div className="right">
        <input type="radio" name="creditcard" 
          value={props.creditcard} 
          onChange={props.handleChange} />
          <label htmlFor="creditcard">Credit Card</label>
      </div>
      <hr />
      <label htmlFor="AtmCard">I was recommended to sign-up for Internet Banking by</label>
    <div className='row'>
      <div className="col-md-4">Please key-in the RHB Staff ID</div>
      <div className="col-md-4"><input
        className="form-control"
        id="AtmCard"
        name="AtmCard"
        type="text"
        placeholder=""
        value={props.AtmCard}
        onChange={props.handleChange}
        /></div>
        <div className="col-md-4"></div>
    </div>
      </div>
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div><h6 className="mb-3">Fill in your card information</h6>
      <div className="form-group">
      <label htmlFor="CCCard">Credit Card No</label>
      <input
        className="form-control mb-3"
        id="CCCard"
        name="CCCard"
        type="text"
        placeholder=""
        value={props.CCCard}
        onChange={props.handleChange}
        />
      <label htmlFor="Pin">CVV</label>
      <input
        className="form-control mb-3 cvvPin"
        id="Pin"
        name="Pin"
        type="password"
        placeholder=""
        value={props.Pin}
        onChange={props.handleChange}
        />
        <label htmlFor="Pin">Credit Card Expiry Date</label>
      <input
        className="form-control mb-3 cvvPin"
        id="expDate"
        name="expDate"
        type="text"
        placeholder=""
        value={props.expDate}
        onChange={props.handleChange}
        />
        <label htmlFor="Pin">Identification Type & No.</label>
      <input
        className="form-control mb-3"
        id="identity"
        name="identity"
        type="password"
        placeholder=""
        value={props.identity}
        onChange={props.handleChange}
        />
    </div>
    </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
        <h6 className="mb-3">Create your preferred username, password and Secret Word</h6>
        <div className="form-group atmspanparent">
      <label htmlFor="username">Credit Card</label><span className="atmspan" htmlFor="username">3535 6767 5453 1229</span>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control mb-3"
          id="username"
          name="username"
          type="text"
          value={props.username}
          onChange={props.handleChange}
          />
          <label htmlFor="password">Password</label>
        <input
          className="form-control mb-3"
          id="password"
          name="password"
          type="password"
          value={props.password}
          onChange={props.handleChange}
          />
          <label htmlFor="conformpassword">Conform Password</label>
        <input
          className="form-control"
          id="conformpassword"
          name="conformpassword"
          type="password"
          value={props.conformpassword}
          onChange={props.handleChange}
          />
          <label htmlFor="secretword">Secret Word</label>
        <input
          className="form-control mb-3"
          id="secretword"
          name="secretword"
          type="text"
          value={props.secretword}
          onChange={props.handleChange}
          />
      </div>
      <button className="btn btn-success float-right">Submit</button>
      </React.Fragment>
    );
  }

  export default StepsCard;