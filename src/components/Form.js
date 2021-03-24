import React from 'react';
import{ init } from 'emailjs-com';
import { Box, Button, Typography } from '@material-ui/core';
init("user_Xv1ewXuwbb7AZZjl9RYsj");

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
		
  	<form className="test-mailing">
    	<Typography variant="h4" style={{marginTop:"64px"}}>Just wanted to say hi?</Typography>
    	<Typography variant="h5">Send an anonymous letter</Typography>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<Button><input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} /></Button>
  	</form>
	)
		

  }



  handleChange(event) {
    this.setState({feedback: event.target.value})
  }
   handleSubmit (event) {
	const templateId = 'template_i43mnvr';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'service_zxwbm1d', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }}