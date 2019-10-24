import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
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

        const { values: { 
            company_name, 
            company_description, 
            company_email,
            company_website,
            company_number,
            job_title,
            job_location,
            job_resp,
            job_req,
            job_budget} 
        } = this.props;

        return(
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Vacancy Details Form' />
                        <List>
                            <ListItem 
                                primaryText='Company Name'
                                secondaryText ={ company_name }
                            />
                            <ListItem 
                                primaryText='Company Description'
                                secondaryText ={ company_description }
                            />
                            <ListItem 
                                primaryText='Company Email'
                                secondaryText ={ company_email }
                            />
                            <ListItem 
                                primaryText='Company Website'
                                secondaryText ={ company_website }
                            />
                            <ListItem 
                                primaryText='Company Number'
                                secondaryText ={ company_number }
                            />
                            <ListItem 
                                primaryText='Job Title'
                                secondaryText ={ job_title }
                            />
                            <ListItem 
                                primaryText='Job Location'
                                secondaryText ={ job_location }
                            />
                            <ListItem 
                                primaryText='Job Roles'
                                secondaryText ={ job_resp }
                            />
                            <ListItem 
                                primaryText='Job Requirements'
                                secondaryText ={ job_req }
                            />
                            <ListItem 
                                primaryText='Budget'
                                secondaryText ={ job_budget }
                            />
                        </List>
                   <br/>
                   <RaisedButton 
                       label='Back'
                       primary={false}
                       style={styles.button}
                       onClick={this.back}
                   />
                   <RaisedButton 
                       label='Confirm'
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