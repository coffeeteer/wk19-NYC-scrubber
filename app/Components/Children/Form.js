import React from 'react';
class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			term: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleClick(){
		console.log("CLICK");
		console.log(this.state.term);

		this.props.setTerm(this.state.term);
	}

	render(){

		return(

		<form class="form-horizontal">
			<fieldset>



			  <legend>
			    <div class="col-md-12 col-md-offset-6">
			      Search
			    </div>  
			  </legend>  
			 



			<div class="form-group">
			  <label class="col-md-4 control-label" for="topic">Topic</label>  
			  <div class="col-md-6">
			  <input name="topic" class="form-control input-md" id="term" onChange= {this.handleChange} required />
			    
			  </div>
			</div>


			<div class="form-group">
			  <label class="col-md-4 control-label" for="start-year">Start Year</label>
			  <div class="col-md-6">
			    <input name="start-year" class="form-control input-md" id="start-year"  onChange= {this.handleChange} required />
			    
			  </div>
			</div>


			<div class="form-group">
			  <label class="col-md-4 control-label" for="end-year">End Year</label>
			  <div class="col-md-6">
			    <input name="end-year" class="form-control input-md"  onChange= {this.handleChange} required />
			    
			  </div>
			</div>


			<div class="form-group">
			  <label class="col-md-4 control-label" for="singlebutton">Single Button</label>
			  <div class="col-md-4">
									<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
			    <button name="singlebutton"  type="button" class="btn btn-primary" id="singlebutton">Submit</button>
			  </div>
			</div>

			</fieldset>
		</form>


		)
	}
}

export default Form;
