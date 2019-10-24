import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class CompanyDetailsForm extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();

    }

    render(){

        const { values, handleChange } = this.props;

        return(
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Company Details Form' />
                   <TextField 
                       hintText='Company Name'
                       floatingLabelText='Company Name'
                       onChange={handleChange('company_name')}
                       defaultValue={values.company_name}
                   />
                   <br/>
                   <TextField 
                       hintText='Company Description'
                       floatingLabelText='Company Description'
                       onChange={handleChange('company_description')}
                       defaultValue={values.company_description}
                   />
                   <br/>
                   <TextField 
                       hintText='Company Email'
                       floatingLabelText='Company Email'
                       onChange={handleChange('company_email')}
                       defaultValue={values.company_email}
                   />
                   <br/>
                   <TextField 
                       hintText='Company Website'
                       floatingLabelText='Company Website'
                       onChange={handleChange('company_website')}
                       defaultValue={values.company_website}
                   />
                   <br/>
                   <TextField 
                       hintText='Company Phone Number'
                       floatingLabelText='Company Phone Number'
                       onChange={handleChange('company_number')}
                       defaultValue={values.company_number}
                   />
                   <br/>
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

export default CompanyDetailsForm;