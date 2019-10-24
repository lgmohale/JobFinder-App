import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class VacancyDetailsForm extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();

    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const { values, handleChange } = this.props;

        return(
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Vacancy Details Form' />
                   <TextField 
                       hintText='Job Title'
                       floatingLabelText='Job Title'
                       onChange={handleChange('job_title')}
                       defaultValue={values.job_title}
                   />
                   <br/>
                   <TextField 
                       hintText='Job Location'
                       floatingLabelText='Job Location'
                       onChange={handleChange('job_location')}
                       defaultValue={values.job_location}
                   />
                   <br/>
                   <TextField 
                       hintText='Job Roles'
                       floatingLabelText='Job Roles'
                       onChange={handleChange('job_resp')}
                       defaultValue={values.job_resp}
                   />
                   <br/>
                   <TextField 
                       hintText='Job Requirement'
                       floatingLabelText='Job Requirement'
                       onChange={handleChange('job_req')}
                       defaultValue={values.job_req}
                   />
                   <br/>
                   <TextField 
                       hintText='Budget'
                       floatingLabelText='Budget'
                       onChange={handleChange('job_budget')}
                       defaultValue={values.job_budget}
                   />
                   <br/>
                   <RaisedButton 
                       label='Back'
                       primary={false}
                       style={styles.button}
                       onClick={this.back}
                   />
                   <RaisedButton 
                       label='Continue'
                       primary={true}
                       style={styles.button}
                       onClick={this.continue}
                   />
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default VacancyDetailsForm;